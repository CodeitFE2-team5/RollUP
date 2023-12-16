import axios from 'axios';
import MessageCardContents from './MessageCardContents';
import { useState, useEffect, useRef } from 'react';
import RecipientMenu from '../RecipientMenu/RecipientMenu';
import { useParams } from 'react-router-dom';

function MessagePage() {
  const [recipient, setRecipient] = useState();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const observerRef = useRef(null);
  const LIMIT = 10;

  const getRollingRecipient = async () => {
    try {
      const response = await axios.get(`https://rolling-api.vercel.app/2-5/recipients/${id}/`);
      const results = await response.data;
      setRecipient(results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const getRollingMessages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rolling-api.vercel.app/2-5/recipients/${id}/messages/?limit=${LIMIT}&offset=${offset}`
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
    getRollingMessages();
  }, [offset]);

  const loadMoreMessages = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

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
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNext) {
          loadMoreMessages();
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (observer) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hasNext]);

  return (
    <>
      <RecipientMenu recipient={recipient} />
      <MessageCardContents
        recipient={recipient}
        messages={messages}
        postId={id}
        loading={loading}
      />
      <div id="observer-element" ref={observerRef}></div>
    </>
  );
}

export default MessagePage;
