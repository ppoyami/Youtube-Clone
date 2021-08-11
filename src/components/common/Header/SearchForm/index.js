import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './SearchForm.styled';
import { icons } from '../../../../constants/index';
import { getPopularVideo } from '../../../../store/modules/video';

export default function SearchForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      dispatch(getPopularVideo);
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input value={value} onChange={onChange} />
      <S.Button>{icons.검색}</S.Button>
    </S.Form>
  );
}
