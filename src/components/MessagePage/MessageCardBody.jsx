import { useState } from 'react';
import PropTypes from 'prop-types';
import { BACKGROUND_COLOR } from '../../constants/constants.js';
import MessageButtons from './MessageButtons.jsx';
import MessageCardLists from './MessageCardLists.jsx';

function MessageCardBody({ recipient, messages, postId, initialSkeletonLoading }) {
  const [clickedMessageIds, setClickedMessageIds] = useState([]);

  const getClickedMessageIds = (clickedMessageId) => {
    setClickedMessageIds((prevSet) => {
      const updatedSet = new Set(prevSet);
      if (updatedSet.has(clickedMessageId)) {
        updatedSet.delete(clickedMessageId);
      } else {
        updatedSet.add(clickedMessageId);
      }

      const updatedArray = Array.from(updatedSet);
      return updatedArray;
    });
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${recipient?.backgroundImageURL})` }}
        className={`flex flex-wrap content-center flex-col items-end gap-3.5 w-full min-h-screen pt-16 pb-60 px-6 pr bg-cover 
        ${BACKGROUND_COLOR[recipient?.backgroundColor]}`}
      >
        <MessageButtons
          postId={postId}
          recipient={recipient}
          disabled={clickedMessageIds.length}
          clickedMessageIds={clickedMessageIds}
          setClickedMessageIds={setClickedMessageIds}
        />
        <MessageCardLists
          postId={postId}
          messages={messages}
          getClickedMessageIds={getClickedMessageIds}
          initialSkeletonLoading={initialSkeletonLoading}
        />
      </div>
    </>
  );
}

MessageCardBody.propTypes = {
  recipient: PropTypes.object,
  messages: PropTypes.array,
  initialSkeletonLoading: PropTypes.bool,
  postId: PropTypes.string,
};

export default MessageCardBody;
