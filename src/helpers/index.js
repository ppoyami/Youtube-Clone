export function parseCount(viewcount) {
  if (!viewcount) return;
  return viewcount.length > 4 ? viewcount.slice(0, -4) + '만' : viewcount;
}

// TODO: 다시 작성하기
export function parseTime(publishedAt) {
  // 현재 날짜 - 업로드 날짜 = 두 날짜의 차이(ms)
  const currentTime = new Date().getTime();
  const uploadTime = new Date(publishedAt).getTime();
  let gapMs = currentTime - uploadTime;

  const days = Math.floor(gapMs / (1000 * 60 * 60 * 24));
  gapMs -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(gapMs / (1000 * 60 * 60));
  gapMs -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(gapMs / (1000 * 60));
  gapMs -= minutes * (1000 * 60);

  if (days > 0) {
    return `${days}일`;
  } else if (hours > 0) {
    return `${hours}시간`;
  } else if (minutes > 0) {
    return `${minutes}분`;
  } else {
    return '조금';
  }
}

export function getVideoInfo(video) {
  const snippet = video?.snippet;
  const statistics = video?.statistics;
  const channelInfo = video?.channelInfo;

  const title = snippet?.title;
  const thumbnail = snippet?.thumbnails.medium.url;
  const publishedAt = snippet?.publishedAt;
  const description = snippet?.description;
  const viewCount = statistics?.viewCount;
  const channelTitle = channelInfo?.snippet.title;
  const channelThumbnail = channelInfo?.snippet.thumbnails.medium.url;
  const subscriberCount = channelInfo?.statistics.subscriberCount;

  return {
    title,
    thumbnail,
    publishedAt,
    description,
    viewCount,
    channelTitle,
    channelThumbnail,
    subscriberCount,
  };
}
