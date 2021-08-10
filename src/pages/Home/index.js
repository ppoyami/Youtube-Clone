import React from 'react';

import Tags from '../../components/Home/Tags';
import List from '../../components/Home/List';
import * as S from './Home.styled';

export default function Home() {
  return (
    <S.Layout>
      <Tags />
      <List />
    </S.Layout>
  );
}
