import { createContext, useContext } from 'react';
import axios from 'axios';

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

import { BASE_URL } from '../constants';
import Youtube from '../service';
import dotenv from 'dotenv';

dotenv.config();

const httpClient = axios.create({
  baseURL: BASE_URL,
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

const icons = {
  검색: BsSearch,
  하우스: BsHouseDoorFill,
  마이크: BsMicFill,
  구독: BsCollectionPlay,
  녹화: BsCameraVideoFill,
  알림: BsFillBellFill,
  유저: BsPeopleCircle,
  앱: BsGrid3X3Gap,
};

const IconContext = createContext(null);
const APIContext = createContext(null);

function rootContext({ children }) {
  return (
    <IconContext.Provider value={icons}>
      <APIContext.Provider value={new Youtube(httpClient)}>
        {children}
      </APIContext.Provider>
    </IconContext.Provider>
  );
}

export const useIcon = () => {
  const context = useContext(IconContext);
  if (!context) throw new Error('no icon context');
  return context;
};
export const useAPI = () => {
  const context = useContext(APIContext);
  if (!context) throw new Error('no api context');
  return context;
};

export default rootContext;
