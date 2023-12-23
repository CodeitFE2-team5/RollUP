import { API_RECIPIENT_URL, LIMIT } from '../constants/constants';

const getURL = (id = '', endpoint = '', method = 'GET', limit = LIMIT, offset = 0, sort = '') => {
  if (id === '' && endpoint === '') {
    if (method === 'GET') return `${API_RECIPIENT_URL}/?limit=${limit}&offset=${offset}&sort=${sort}`;
    if (method === 'POST') return `${API_RECIPIENT_URL}/`;
  }
  if (endpoint === '') {
    if (method === 'GET' || method === 'DELETE') return `${API_RECIPIENT_URL}/${id}/`;
  }
  if (method === 'GET') return `${API_RECIPIENT_URL}/${id}/${endpoint}/?limit=${limit}&offset=${offset}`;
  if (method === 'POST') return `${API_RECIPIENT_URL}/${id}/${endpoint}/`;
  return `${API_RECIPIENT_URL}/`;
};

export default getURL;
