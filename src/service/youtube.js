export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'KR',
      },
    });

    return this.appendData(
      response.data.items,
      video => video?.snippet?.channelId,
      this.channel
    );
  }
  // TODO: try catch 이렇게 쓰는 게 맞는 걸까??
  async channel(id) {
    let response;
    try {
      response = await this.youtube.get('channels', {
        params: {
          part: 'snippet, statistics',
          id,
        },
      });
    } catch (e) {
      response = undefined;
    }

    return { channelInfo: response?.data?.items[0] };
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        q: query,
      },
    });

    const serchedVideoList = response.data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));

    const result = this.appendData(
      serchedVideoList,
      video => video?.snippet?.channelId,
      this.channel
    ).then(list => {
      return this.appendData(list, video => video.id, this.getVideoStatistics);
    });

    return result;
  }

  async getVideoStatistics(id) {
    let response;
    try {
      response = await this.youtube.get('videos', {
        params: {
          part: 'statistics',
          id,
        },
      });
    } catch (e) {
      response = undefined;
    }

    return { statistics: response?.data?.items[0].statistics };
  }

  appendData(source, getId, f) {
    const promises = source.map(getId).map(f.bind(this));

    return Promise.all(promises).then(list =>
      source.map((data, i) => ({ ...data, ...list[i] }))
    );
  }
}
