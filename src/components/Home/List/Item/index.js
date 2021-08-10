import React from 'react';

import * as S from './Item.styled';

export default function Item({ video }) {
  const { snippet } = video;
  return (
    <S.Wrapper>
      <S.Thumbnail src={snippet.thumbnails.medium.url} alt="video thumbnail" />
      <S.Title>{snippet.title}</S.Title>
      <S.SubTitle>{snippet.channelTitle}</S.SubTitle>
      <S.Description>{snippet.publishedAt}</S.Description>
    </S.Wrapper>
  );
}
