import axios from 'axios';
import dotenv from 'dotenv';

import Youtube from './youtube';
import { BASE_URL } from '../constants';

dotenv.config();

const httpClient = axios.create({
  baseURL: BASE_URL,
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

httpClient.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject({ data: undefined, error });
  }
);

export const youtube = new Youtube(httpClient);
