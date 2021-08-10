import {
  BsSearch,
  BsHouseDoorFill,
  BsMicFill,
  BsCollectionPlay,
  BsCameraVideoFill,
  BsFillBellFill,
  BsPeopleCircle,
  BsGrid3X3Gap,
} from 'react-icons/bs';

export const ROUTES = {
  home: '/',
  detail: '/detail',
};
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const icons = {
  검색: BsSearch(),
  하우스: BsHouseDoorFill(),
  마이크: BsMicFill(),
  구독: BsCollectionPlay(),
  녹화: BsCameraVideoFill(),
  알림: BsFillBellFill(),
  유저: BsPeopleCircle(),
  앱: BsGrid3X3Gap(),
};
