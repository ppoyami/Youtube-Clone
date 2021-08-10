import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideo } from '../../../store/modules/video';

export default function List() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.video);

  useEffect(() => {
    dispatch(getPopularVideo);
  }, []);

  console.log(data);

  if (loading) return <span>로딩 중..</span>;
  if (error) return <span>{error}</span>;
  return <div></div>;
}
