import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { ROUTES } from '../../constants';
import { parseCount, getVideoInfo } from '../../helpers';
import Video from '../../components/Detail/Video';
import * as S from './Detail.styled';
import Item from '../../components/Common/Item';

export default function Detail() {
  const [more, setMore] = useState(false);

  const history = useHistory();

  const { id, payload } = useSelector(state => state.selectedVideo);
  const { data } = useSelector(state => state.video);

  console.log(data);

  if (!payload) history.push(ROUTES.home);

  const {
    title,
    description,
    channelTitle,
    channelThumbnail,
    subscriberCount,
    viewCount,
  } = getVideoInfo(payload);

  return (
    <S.Layout>
      <S.Content>
        <Video id={id} />
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.ViewCount>조회수 {viewCount}회</S.ViewCount>
        </S.Info>
        <S.ChannelInfo>
          <div>
            <S.ChannelThumbnail src={channelThumbnail} alt={channelTitle} />
            <div>
              <S.ChannelTitle>{channelTitle}</S.ChannelTitle>
              <S.SubscriberCount>
                {parseCount(subscriberCount)}명
              </S.SubscriberCount>
            </div>
          </div>
          <S.Desc more={more}>{description}</S.Desc>
          <S.More onClick={() => setMore(!more)}>
            {more ? '숨기기' : '더보기'}
          </S.More>
        </S.ChannelInfo>
      </S.Content>
      <S.SideList>
        {data && data.map(video => <Item key={video.id} video={video} />)}
      </S.SideList>
    </S.Layout>
  );
}
