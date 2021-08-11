import React from 'react';

import * as S from './Item.styled';
import { ROUTES } from '../../../../constants';
import { selectVideo } from '../../../../store/modules/selectedVideo';
import { useDispatch } from 'react-redux';

export default function Item({ video }) {
  const { snippet } = video;
  const dispatch = useDispatch();

  const onSelectVideo = () => {
    dispatch(selectVideo(video.id, video.snippet));
  };

  return (
    <S.Wrapper to={ROUTES.detail} onClick={onSelectVideo}>
      <S.Thumbnail src={snippet.thumbnails.medium.url} alt="video thumbnail" />
      <S.Title>{snippet.title}</S.Title>
      <S.SubTitle>{snippet.channelTitle}</S.SubTitle>
      <S.Description>{snippet.publishedAt}</S.Description>
    </S.Wrapper>
  );
}
