import React from 'react';

import SearchForm from './SearchForm';

import * as S from './Header.styled';
import { icons } from '../../../constants';

export default function Header() {
  return (
    <S.Header>
      <S.Logo>{icons.유투브}</S.Logo>
      <SearchForm />
      <S.Icon>{icons.마이크}</S.Icon>
      <S.Icons>
        <S.Icon>{icons.녹화}</S.Icon>
        <S.Icon>{icons.앱}</S.Icon>
        <S.Icon>{icons.알림}</S.Icon>
        <S.Icon>{icons.유저}</S.Icon>
      </S.Icons>
    </S.Header>
  );
}
