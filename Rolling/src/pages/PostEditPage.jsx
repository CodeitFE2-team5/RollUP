import axios from 'axios';
import PostCardList from '../components/PostCardList';
import { useState, useEffect } from 'react';

function PostPage() {
  const [messages, setMessages] = useState([]);

  const getRollingData = async () => {
    try {
      const response = await axios.get(
        'https://rolling-api.vercel.app/2-5/recipients/836/messages/'
      );
      const { results } = await response.data;
      setMessages(results);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getRollingData();
  }, []);

  return (
    <>
      <div className="post-body">
        <button>삭제하기</button>
        <PostCardList messages={messages} showTrashIcon={true} />
        <PostCardModal />
      </div>
    </>
  );
}

export default PostPage;
