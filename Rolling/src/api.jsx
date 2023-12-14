import axios from 'axios';

export async function getBackgroundList() {
  const URL = 'https://rolling-api.vercel.app/background-images/';
  try {
    const response = await axios.get(URL);

    if (!response.data) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('데이터를 불러오는 중 에러 발생:', error);
    throw error;
  }
}

export async function createRecipient(formData) {
  const url = 'https://rolling-api.vercel.app/2-5/recipients/';

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error('Error while fetching data:', error);
    throw error;
  }
}

export async function getLatestLists({ offset, limit }) {
  const URL = `https://rolling-api.vercel.app/2-5/recipients/?limit=${limit}&offset=${offset}/`;
  try {
    const response = await axios.get(URL);

    if (!response.data) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('데이터를 불러오는 중 에러 발생:', error);
    throw error;
  }
}

export async function getPopularLists({ offset, limit }) {
  const URL = `https://rolling-api.vercel.app/2-5/recipients/?limit=${limit}&offset=${offset}&sort=like`;
  try {
    const response = await axios.get(URL);

    if (!response.data) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('데이터를 불러오는 중 에러 발생:', error);
    throw error;
  }
}
