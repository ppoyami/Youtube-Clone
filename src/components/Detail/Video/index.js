import React from 'react';

import * as S from './Video.styled';

export default function Video({ id }) {
  return (
    <S.Wrapper>
      <S.Iframe
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
    </S.Wrapper>
  );
}
