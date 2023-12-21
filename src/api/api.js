import axios from 'axios';

export const postData = async(url, data) => {
  try{
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
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

export async function uploadImageIBB(file) {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(
      'https://api.imgbb.com/1/upload?expiration=518400&key=95d8f7e8290e8ffef56546465f96b389',
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Uploaded Image URL:', data.data.url);
      return data.data.url;
    } else {
      console.error('업로드실패');
      return null;
    }
  } catch (error) {
    console.error('업로드실패:', error);
    return null;
  }
}
