import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideo } from '../../../store/modules/video';

// import { popular } from '../../../constants';
import * as S from './List.styled';
import Item from '../../Common/Item';

export default function List() {
  const { loading, data, error } = useSelector(state => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideo);
  }, [dispatch]);

  console.log(data);

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
