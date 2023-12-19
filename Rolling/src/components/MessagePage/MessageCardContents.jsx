import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MessageCard from './MessageCard';
import MessageCardModal from './MessageCardModal.jsx';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BACKGROUND_COLOR } from '../../constants/constants.js';
import MessageLoading from '../MessagePage/MessageLoading';
import { Link, useLocation } from 'react-router-dom';
import PaperRemoveModal from './PaperRemoveModal.jsx';

function MessageCardContents({ recipient, messages, postId, loading }) {
  const [clickedMessage, setClickedMessage] = useState([]);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [clickedMessageIds, setClickedMessageIds] = useState([]);

  const location = useLocation();

  const handleClickMessage = (id) => {
    const message = messages.find((message) => message.id === id);
    setClickedMessage(message);
    handleOpenModal();
  };

  const handleDeleteMessage = (clickedMessageId) => {
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

  useEffect(() => {
    console.log(clickedMessageIds);
  }, [clickedMessageIds]);
  const handleOpenModal = () => {
    setOpenMessageModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setOpenMessageModal(false);
    document.body.style = '';
  };

  const handleRemovePaper = () => {
    setOpenRemoveModal(true);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${recipient?.backgroundImageURL})` }}
        className={`flex flex-wrap content-center flex-col items-end gap-3.5 w-full min-h-screen pt-28 pb-60 pl-6 pr-[34px] bg-cover 
        ${BACKGROUND_COLOR[recipient?.backgroundColor]}`}
      >
        {!location.pathname.includes('edit') ? (
          <Link to={`/post/${postId}/edit`}>
            <button className="hover:bg-purple-700 w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7">
              편집하기
            </button>
          </Link>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleRemovePaper}
              className="hover:bg-orange-700 w-44 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
            >
              페이지 삭제하기
            </button>

            <button className="sm:w-full sm:fixed sm:left-0 sm:bottom-6 hover:bg-purple-700 lg:static lg:w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7">
              저장하기
            </button>
          </div>
        )}

        {openRemoveModal && (
          <PaperRemoveModal recipient={recipient} setOpenRemoveModal={setOpenRemoveModal} />
        )}

        <div className="lg:grid lg:grid-cols-[repeat(3,minmax(0,24rem))] md:grid md:grid-cols-[repeat(2,minmax(0,24rem))] grid grid-cols-[repeat(1,minmax(0,24rem))] justify-center gap-4">
          {!location.pathname.includes('edit') && (
            <div className="flex justify-center items-center max-w-sm h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
              <Link to={`/post/${postId}/message`}>
                <button className="flex items-start gap-2.5 p-4">
                  <BsFillPlusCircleFill className="w-14 h-14 fill-gray-500 grid-cols" />
                </button>
              </Link>
            </div>
          )}

          {!location.pathname.includes('edit')
            ? messages?.map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  handleClickMessage={handleClickMessage}
                />
              ))
            : messages?.map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  handleClickMessage={handleClickMessage}
                  handleDeleteMessage={handleDeleteMessage}
                  showTrashIcon={true}
                />
              ))}

          {openMessageModal && (
            <MessageCardModal message={clickedMessage} handleCloseModal={handleCloseModal} />
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
  postId: PropTypes.string,
};

export default MessageCardContents;
