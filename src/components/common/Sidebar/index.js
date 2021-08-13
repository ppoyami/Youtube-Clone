import React, { useState } from 'react';

import * as S from './Sidebar.styled';
import { icons, ROUTES } from '../../../constants/index';
import { useHistory, useLocation } from 'react-router';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  const isDetailPage = pathname === ROUTES.detail;

  return (
    <S.Container open={open} isDetailPage={isDetailPage}>
      <S.Icon onClick={() => setOpen(!open)}>{icons.햄버거}</S.Icon>
      <S.Icon onClick={() => history.push(ROUTES.home)}>
        {icons.홈}
        <span>Home</span>
      </S.Icon>
      <S.Icon>
        {icons.구독}
        <span>Subscriptions</span>
      </S.Icon>
      <S.Icon>
        {icons.보관함}
        <span>Library</span>
      </S.Icon>
    </S.Container>
  );
}
