import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MessagePageRemove from './MessagePageRemove';
import ConfirmModal from '../Common/ConfirmModal';
import axios from 'axios';

function MessageButtons({ postId, recipient, disabled, clickedMessageIds, setClickedMessageIds }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const location = useLocation();

  const removeMessagePape = () => {
    setOpenRemoveModal(true);
  };

  const handleDismissModal = () => {
    setShowConfirmModal(false);
    setShowCompleteModal(false);
  };

  const handleRemoveMessage = async () => {
    try {
      clickedMessageIds.map(async (messageId) => {
        await axios.delete(`https://rolling-api.vercel.app/2-5/messages/${messageId}/`);
      });

      setClickedMessageIds([]);
      setShowConfirmModal(false);
      setShowCompleteModal(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {!location.pathname.includes('edit') ? (
        <Link to={`/post/${postId}/edit`}>
          <button className="hover:bg-purple-700 w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7">
            편집하기
          </button>
        </Link>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={removeMessagePape}
            className="hover:bg-orange-700 w-44 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
          >
            페이지 삭제하기
          </button>

          <button
            onClick={() => setShowConfirmModal(true)}
            className={`${
              !disabled ? 'cursor-not-allowed' : ''
            } sm:w-full sm:fixed sm:left-0 sm:bottom-6 hover:bg-purple-700 lg:static lg:w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7 z-10`}
            disabled={!disabled}
          >
            저장하기
          </button>
        </div>
      )}

      {openRemoveModal && (
        <MessagePageRemove recipient={recipient} setOpenRemoveModal={setOpenRemoveModal} />
      )}

      {showConfirmModal && (
        <ConfirmModal
          title="선택한 메세지들을 삭제하고 저장하시겠습니까?"
          onConfirm={handleRemoveMessage}
          onCancel={handleDismissModal}
        />
      )}

      {showCompleteModal && (
        <ConfirmModal
          title="삭제가 완료되었습니다."
          onConfirm={() => {
            setShowCompleteModal(false);
            window.location.reload();
          }}
          onCancel={() => {
            setShowCompleteModal(false);
            window.location.reload();
          }}
          showCancelButton={false}
        />
      )}
    </>
  );
}

MessageButtons.propTypes = {
  postId: PropTypes.node,
  recipient: PropTypes.object,
  disabled: PropTypes.node,
  clickedMessageIds: PropTypes.array,
  setClickedMessageIds: PropTypes.func,
};

export default MessageButtons;
