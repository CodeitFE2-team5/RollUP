import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import MessageCardBody from './MessageCardBody';
import MessageLoading from './MessageLoading';
import { rollingMessagesApi, rollingRecipientApi } from './MessageApi';
import { LIMIT } from '../../constants/constants';

const RecipientMenu = lazy(() => import('../RecipientMenu/RecipientMenu'));

function MessagePage() {
  const [recipient, setRecipient] = useState();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(null);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [initialSkeletonLoading, setInitialSkeletonLoading] = useState(true);

  const { id } = useParams();
  const observerRef = useRef(null);

  const getRollingRecipient = async () => {
    try {
      const recipientData = await rollingRecipientApi(id);
      setRecipient(recipientData);
    } catch (error) {
      alert(error);
    }
  };

  const getRollingMessages = async () => {
    try {
      setScrollLoading(true);
      const { next, results } = await rollingMessagesApi(id, offset);

      if (offset === 0) {
        setMessages(results);
        setInitialSkeletonLoading(false);
      } else {
        setMessages((prev) => [...prev, ...results]);
      }
      setHasNext(next);
    } catch (error) {
      alert(error);
    } finally {
      setScrollLoading(false);
    }
  };

  const loadMoreMessages = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  useEffect(() => {
    getRollingMessages();
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
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNext) {
          loadMoreMessages();
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (observer) observer.observe(observerRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasNext]);

  return (
    <>
      <Suspense fallback={<div className="skeleton w-11/12 h-[68px] mx-auto"></div>}>
        <RecipientMenu recipient={recipient} />
      </Suspense>

      <MessageCardBody
        recipient={recipient}
        messages={messages}
        postId={id}
        initialSkeletonLoading={initialSkeletonLoading}
      />

      <div ref={observerRef}></div>
      {scrollLoading && <MessageLoading />}
    </>
  );
}

export default MessagePage;
