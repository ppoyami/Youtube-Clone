import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Video from '../../components/Detail/Video';
import * as S from './Detail.styled';

export default function Detail() {
  const { id, snippet } = useSelector(state => state.selectedVideo);
  // const { data } = useSelector(state => state.video);

  const [more, setMore] = useState(false);
  if (!snippet) return null;
  return (
    <S.Layout>
      <Video id={id} />
      <S.Title>{snippet.title}</S.Title>
      <S.ChannelTitle>{snippet.channelTitle}</S.ChannelTitle>
      <S.Desc more={more}>{snippet.description}</S.Desc>
      <S.More onClick={() => setMore(!more)}>
        {more ? '숨기기' : '더보기'}
      </S.More>
    </S.Layout>
  );
}
