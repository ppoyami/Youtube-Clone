import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './SearchForm.styled';
import { icons, ROUTES } from '../../../../constants/index';
import { getPopularVideo, searchVideo } from '../../../../store/modules/video';
import { useHistory } from 'react-router';

export default function SearchForm() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    const query = inputRef.current.value;

    if (query.trim() === '') {
      dispatch(getPopularVideo);
    }

    dispatch(searchVideo(query));

    history.push(ROUTES.search);
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input ref={inputRef} />
      <S.Button>{icons.검색}</S.Button>
    </S.Form>
  );
}
