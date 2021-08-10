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

export const youtube = new Youtube(httpClient);
