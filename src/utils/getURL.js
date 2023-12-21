import { API_URL, LIMIT } from '../constants/constants';

const getURL = (id = '', endpoint = '', method = 'GET', limit = LIMIT, offset = 0, sort = '') => {
  if (id === '' && endpoint === '') {
    if (method === 'GET') return `${API_URL}/?limit=${limit}&offset=${offset}&sort=${sort}`;
    if (method === 'POST') return `${API_URL}/`;
  }
  if (endpoint === '') {
    if (method === 'GET' || method === 'DELETE') return `${API_URL}/${id}/`;
  }
  if (method === 'GET') return `${API_URL}/${id}/${endpoint}/?limit=${limit}&offset=${offset}`;
  if (method === 'POST') return `${API_URL}/${id}/${endpoint}/`;
  return `${API_URL}/`;
};

export default getURL;
