import axios from 'axios';

const BASICURL = 'https://rolling-api.vercel.app/2-5/recipients/';

export async function getRollingPaperLists() {
  try {
    const response = await axios.get(BASICURL);

    if (!response.data) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('데이터를 불러오는 중 에러 발생:', error);
    throw error;
  }
}
