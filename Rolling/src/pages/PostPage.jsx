import axios from 'axios';
import PostCardList from '../components/PostCardList';
import { useState, useEffect } from 'react';

function PostPage() {
  const [recipient, setRecipient] = useState();
  const [messages, setMessages] = useState();

  const getRollingRecipient = async () => {
    try {
      const response = await axios.get('https://rolling-api.vercel.app/2-5/recipients/836/');
      const results = await response.data;
      setRecipient(results);
    } catch (error) {
      alert(error);
    }
  };

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
    getRollingRecipient();
  }, []);

  return (
    <>
      <PostCardList recipient={recipient} messages={messages} />
    </>
  );
}

export default PostPage;
