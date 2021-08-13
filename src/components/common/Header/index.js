import React from 'react';

import SearchForm from './SearchForm';

import * as S from './Header.styled';
import { icons, ROUTES } from '../../../constants';
import { useHistory } from 'react-router';

export default function Header() {
  const history = useHistory();
  return (
    <S.Header>
      <S.Logo onClick={() => history.push(ROUTES.home)}>{icons.유투브}</S.Logo>
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
