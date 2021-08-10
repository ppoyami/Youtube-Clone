import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideo } from '../../../store/modules/video';

import { popular } from '../../../constants';
import * as S from './List.styled';
import Item from './Item';

export default function List() {
  // const { loading, data, error } = useSelector(state => state.video);

  // if (loading) return <span>로딩 중..</span>;
  // if (error) return <span>{error}</span>;
  // if (!data) return null;

  console.log(popular[0]);
  return (
    <S.Container>
      {popular.map(video => (
        <Item key={video.id} video={video} />
      ))}
    </S.Container>
  );
}
