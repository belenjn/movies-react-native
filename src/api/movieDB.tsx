/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {REACT_APP_API_KEY, REACT_APP_URL} from '../../env';

const movieDB = axios.create({
  baseURL: REACT_APP_URL,
  params: {
    api_key: REACT_APP_API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;
