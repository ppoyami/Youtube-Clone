export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 12,
        regionCode: 'KR',
      },
    });

    return this._appendData(
      response.data.items,
      video => video?.snippet?.channelId,
      this._channel
    ).catch(e => {
      throw new Error(e);
    });
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 12,
        type: 'video',
        q: query,
      },
    });

    const serchedVideoList = response.data?.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));

    const result = this._appendData(
      serchedVideoList,
      video => video?.snippet?.channelId,
      this._channel
    )
      .then(list => {
        return this._appendData(
          list,
          video => video.id,
          this._getVideoStatistics
        );
      })
      .catch(e => {
        throw new Error(e);
      });

    return result;
  }

  async _channel(id) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet, statistics',
        id,
      },
    });

    return { channelInfo: response.data?.items[0] };
  }

  async _getVideoStatistics(id) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'statistics',
        id,
      },
    });

    return { statistics: response.data?.items[0].statistics };
  }

  _appendData(source, getId, f) {
    const promises = source?.map(getId)?.map(f.bind(this));

    return Promise.all(promises)
      .then(list => source.map((data, i) => ({ ...data, ...list[i] })))
      .catch(e => {
        throw new Error(e);
      });
  }
}
