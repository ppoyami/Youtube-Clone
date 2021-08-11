import React, { useState } from 'react';

import * as S from './Sidebar.styled';
import { icons, ROUTES } from '../../../constants/index';
import { useLocation } from 'react-router';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isDetailPage = pathname === ROUTES.detail;

  return (
    <S.Container open={open} isDetailPage={isDetailPage}>
      <S.Icon onClick={() => setOpen(!open)}>{icons.햄버거}</S.Icon>
      {icons.sidebar_icons.map((icon, idx) => (
        <S.Icon key={idx} open={open}>
          {icon.component}
          <span>{icon.text}</span>
        </S.Icon>
      ))}
    </S.Container>
  );
}
