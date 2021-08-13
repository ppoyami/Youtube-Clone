import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideo } from '../../../store/modules/video';

// import { popular } from '../../../constants';
import * as S from './List.styled';
import Item from '../../Common/Item';
import { useLocation } from 'react-router';

export default function List() {
  const { loading, data, error } = useSelector(state => state.video);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') dispatch(getPopularVideo);
  }, [pathname, dispatch]);

  if (loading) return <span>로딩 중..</span>;
  if (error) return <span>{error}</span>;
  if (!data) return null;

  return (
    <S.Container>
      {data.map(video => (
        <Item key={video.id} video={video} />
      ))}
    </S.Container>
  );
}
