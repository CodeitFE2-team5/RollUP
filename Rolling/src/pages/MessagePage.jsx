import axios from 'axios';
import MessageCardContents from '../components/MessageCardContents';
import { useState, useEffect, useRef } from 'react';
import loadingAnimation from '../assets/loading.gif';

function MessagePage() {
  const [recipient, setRecipient] = useState();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(null);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);
  const LIMIT = 10;

  const getRollingRecipient = async () => {
    try {
      const response = await axios.get('https://rolling-api.vercel.app/2-5/recipients/836/');
      const results = await response.data;
      setRecipient(results);
    } catch (error) {
      alert(error);
    }
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  useEffect(() => {
    const getRollingData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rolling-api.vercel.app/2-5/recipients/836/messages/?limit=${LIMIT}&offset=${offset}`
        );
        const { next, results } = await response.data;

        if (offset === 0) {
          setMessages(results);
        } else {
          setMessages((prev) => [...prev, ...results]);
        }
        setHasNext(next);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    getRollingData();
  }, [offset]);

  useEffect(() => {
    getRollingRecipient();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const handleObserver = (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNext) {
          handleLoadMore();
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (observerRef.current) {
      observerRef.current.observe(document.getElementById('observer-element'));
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasNext]);

  return (
    <>
      <MessageCardContents recipient={recipient} messages={messages} loading={loading} />
      <div id="observer-element" style={{ height: '1px' }}></div>
      {loading && (
        <div className="flex justify-center py-5">
          <img src={loadingAnimation} className="w-[50px]" />
        </div>
      )}
    </>
  );
}

export default MessagePage;
