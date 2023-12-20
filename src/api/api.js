import axios from 'axios';

export const postData = async(url, data) => {
  try{
    await axios.post(url, data);
  } catch(error) {
    alert(error);
  }
};

export const getData = async(url) => {
  try{
    const response = await axios.get(url);
    return response.data;
  } catch(error) {
    alert(error);
  }
};
