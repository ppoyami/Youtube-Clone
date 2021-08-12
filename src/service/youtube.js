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
    // TODO: channel 정보도 포함시켜서 반환한다.
    return this.appendChannelData(
      response.data.items,
      video => video?.snippet?.channelId
    );
  }

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
      console.log(e); // ! console
      response = null;
    }

    return { channelInfo: response?.data?.items[0] };
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet, statistics',
        maxResults: 10,
        type: 'video',
        q: query,
      },
    });

    const serchedVideoList = response.data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));

    return this.appendChannelData(
      serchedVideoList,
      video => video?.snippet?.channelId
    );
  }

  appendChannelData(source, getChannelId) {
    const promises = source.map(getChannelId).map(this.channel.bind(this));
    console.log('channel promises', promises);

    return Promise.all(promises).then(channelList =>
      source.map((data, i) => ({ ...data, ...channelList[i] }))
    );
  }
}
