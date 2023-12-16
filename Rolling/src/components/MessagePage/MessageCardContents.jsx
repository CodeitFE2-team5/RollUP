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
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style = '';
  };

  return (
    <div
      className={`w-screen min-h-screen ${
        BACKGROUND_COLOR[recipient?.backgroundColor]
      } pt-28 pb-60 pl-6 pr-[34px]`}
    >
      <div className="lg:grid lg:grid-cols-[repeat(3,minmax(0,24rem))] md:grid md:grid-cols-[repeat(2,minmax(0,24rem))] grid grid-cols-[repeat(1,minmax(0,24rem))] justify-center gap-4">
        <div className="flex justify-center items-center max-w-sm h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
          <button className="flex items-start gap-2.5 p-4">
            <BsFillPlusCircleFill className="w-14 h-14 fill-gray-500 grid-cols" />
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
            <MessageCardModal message={clickedMessage} handleCloseModal={handleCloseModal} />
            <div
              onClick={handleCloseModal}
              className="fixed bg-[black] opacity-[60%] inset-0"
            ></div>
          </>
        )}
      </div>
    </div>
  );
}

MessageCardContents.propTypes = {
  recipient: PropTypes.object,
  messages: PropTypes.array,
};

export default MessageCardContents;
