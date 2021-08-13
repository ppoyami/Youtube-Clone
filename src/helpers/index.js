export function parseCount(viewcount) {
  return viewcount.length > 4 ? viewcount.slice(0, -4) + '만' : viewcount;
}

// TODO: 함수 분리시키기: (특정 로직 별 분리가 가능해보인다.)
export function parseTime(publishedAt) {
  const date = new Date(); // ! 현재 날짜와 시간을 반환
  const iso = date.toISOString();
  const currentTime = date.getTime(iso);

  const uploadDate = new Date(publishedAt); // ! 지정된 날짜와 시간을 가지는 인스턴스를 반환 (Date.parse 메소드에 의해 해석 가능한 형식의 dateString을 받는다.)
  const uploadTime = uploadDate.getTime();

  const timeGap = currentTime - uploadTime;
  // 1628751997808 - 1628579199000 = 172798808
  const displayTime = new Date(timeGap);

  const hours = displayTime.getHours();
  const minutes = displayTime.getMinutes();

  // console.log(publishedAt); //  2021-08-10T07:06:39Z
  // console.log(uploadDate); // Tue Aug 10 2021 16:06:39 GMT+0900 (한국 표준시)
  // console.log(currentTime); // 1628751997808
  // console.log(iso); // 2021-08-12T07:06:37.808Z
  // console.log(`${currentTime} - ${uploadTime} = ${timeGap}`); // 1628752603551 - 1628579199000 = 173404551

  if (hours === 0) {
    return minutes + '분';
  } else if (hours > 24) {
    return hours / 24 + '일';
  } else {
    return hours + '시간';
  }
}

export function getVideoInfo(video) {
  const {
    snippet = undefined,
    statistics = undefined,
    channelInfo = undefined,
  } = video;

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
