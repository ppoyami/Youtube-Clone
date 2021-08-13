import React from 'react';
import { useDispatch } from 'react-redux';

import * as S from './Item.styled';
import { parseCount, parseTime, getVideoInfo } from '../../../helpers';
import { ROUTES } from '../../../constants';
import { selectVideo } from '../../../store/modules/selectedVideo';

export default function Item({ video }) {
  const {
    title,
    thumbnail,
    publishedAt,
    viewCount,
    channelTitle,
    channelThumbnail,
  } = getVideoInfo(video);

  const dispatch = useDispatch();

  const onSelectVideo = () => {
    dispatch(selectVideo(video.id, video));
  };

  return (
    <S.Wrapper to={ROUTES.detail} onClick={onSelectVideo}>
      <S.Thumbnail src={thumbnail} alt={title} />
      <S.Description>
        <S.ChannelThumbnail src={channelThumbnail} alt={channelTitle} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.Info>
            <p>{channelTitle}</p>
            <span>조회수 {parseCount(viewCount)}</span>
            <span style={{ margin: '0 .5rem' }}>•</span>
            <span>{parseTime(publishedAt)}전</span>
          </S.Info>
        </S.TextBox>
      </S.Description>
    </S.Wrapper>
  );
}
