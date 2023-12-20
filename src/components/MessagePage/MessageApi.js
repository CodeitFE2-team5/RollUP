import axios from 'axios';
import getURL from '../../utils/getURL';
import { LIMIT } from '../../constants/constants';

export const rollingRecipientApi = async (id) => {
  try {
    const response = await axios.get(getURL(id));
    const results = await response.data;
    return results;
  } catch (error) {
    alert(error);
  }
};

export const rollingMessagesApi = async (id, offset) => {
  try {
    const response = await axios.get(getURL(id, 'messages', 'GET', LIMIT, offset));
    const { next, results } = await response.data;
    return { next, results };
  } catch (error) {
    alert(error);
  }
};
