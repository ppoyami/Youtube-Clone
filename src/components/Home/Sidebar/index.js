import React, { useState } from 'react';

import * as S from './Sidebar.styled';
import { icons } from '../../../constants/index';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <S.Container open={open}>
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
