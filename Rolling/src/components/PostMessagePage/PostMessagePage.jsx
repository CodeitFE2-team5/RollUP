// import axios from 'axios';
// import { useState, useEffect } from 'react';
import SenderName from './SenderName';
import ProfileImage from './ProfileImage';
import Relationships from './Relationships';

function PostMessagePage() {
  // const [messageData, setMessageData] = useState();

  // const getRollingMessage = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://rolling-api.vercel.app/2-5/recipients/836/messages/'
  //     );
  //     const results = await response.data;
  //     setMessageData(results);
  //   } catch (error) {
  //     throw new Error('메시지 정보를 가져오는데 실패했습니다.');
  //   }
  // };

  // useEffect(() => {
  //   getRollingMessage();
  // }, []);

  return (
    <div className="mt-14 mb-14 mx-auto max-w-[1080px] flex flex-col">
      {/* {messageData?.results?.map((data) => ( */}
      <form>
        <SenderName></SenderName>
        <ProfileImage></ProfileImage>
        <Relationships></Relationships>
      </form>
      {/* ))} */}
    </div>
  );
}

export default PostMessagePage;
