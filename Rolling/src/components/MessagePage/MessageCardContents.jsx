import PropTypes from 'prop-types';
import MessageCard from './MessageCard';
import MessageCardModal from './MessageCardModal.jsx';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BACKGROUND_COLOR } from '../../constants/constants.js';
import { useState } from 'react';

function MessageCardContents({ recipient, messages }) {
  const [clickedMessage, setClickedMessage] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onClickMessage = (id) => {
    const message = messages.find((message) => message.id === id);
    setClickedMessage(message);
    setOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className={`w-screen ${BACKGROUND_COLOR[recipient?.backgroundColor]} pt-28 pb-60 px-7`}>
      <div className="relative w-[75rem] mx-auto my-0 h-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center max-w-sm h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
            <button className="flex items-start gap-2.5 p-4">
              <BsFillPlusCircleFill className="w-14 h-14 fill-gray-500" />
            </button>
          </div>

          {messages?.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              onClickMessage={onClickMessage}
              showTrashIcon={false}
            />
          )) ?? null}

          {openModal && (
            <>
              <MessageCardModal
                message={clickedMessage}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
              <div
                onClick={() => {
                  setOpenModal(false);
                }}
                className="fixed bg-[black] opacity-[60%] inset-0"
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

MessageCardContents.propTypes = {
  recipient: PropTypes.object,
  messages: PropTypes.array,
};

export default MessageCardContents;
