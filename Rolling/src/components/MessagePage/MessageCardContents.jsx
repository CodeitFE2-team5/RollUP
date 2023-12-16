import { useState } from 'react';
import PropTypes from 'prop-types';
import MessageCard from './MessageCard';
import MessageCardModal from './MessageCardModal.jsx';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BACKGROUND_COLOR } from '../../constants/constants.js';
import MessageLoading from '../MessagePage/MessageLoading';
import { Link } from 'react-router-dom';

function MessageCardContents({ recipient, messages, postId, loading }) {
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
    <>
      <div
        className={`flex flex-col items-end gap-3.5 w-screen min-h-screen ${
          BACKGROUND_COLOR[recipient?.backgroundColor]
        } pt-28 pb-60 pl-6 pr-[34px]`}
      >
        <Link to={`/post/${postId}/edit`}>
          <button className="hover:bg-purple-700 w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7">
            편집하기
          </button>
        </Link>

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

      {loading && <MessageLoading />}
    </>
  );
}

MessageCardContents.propTypes = {
  recipient: PropTypes.object,
  messages: PropTypes.array,
  loading: PropTypes.bool,
  postId: PropTypes.number,
};

export default MessageCardContents;
