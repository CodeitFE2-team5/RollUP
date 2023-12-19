import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { IoReload } from 'react-icons/io5';
import formatDate from '../../utils/formatDate';
import axios from 'axios';
import { useState } from 'react';
import ConfirmModal from '../Common/ConfirmModal';
import DOMPurify from 'dompurify';

function MessageCard({ message, handleClickMessage, handleDeleteMessage, showTrashIcon = false }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [markedForDeletion, setMarkedForDeletion] = useState(false);

  const getMessageId = () => {
    handleClickMessage(message.id);
  };

  const handleDismissModal = () => {
    setShowConfirmModal(false);
    setShowCompleteModal(false);
  };

  const handleMessageRemove = () => {
    setShowConfirmModal(false);
    setMarkedForDeletion(true);
    // try {
    //   await axios.delete(`https://rolling-api.vercel.app/2-5/messages/${message.id}/`);
    //   setShowConfirmModal(false);
    //   setShowCompleteModal(true);
    // } catch (error) {
    //   alert(error);
    // }
  };

  return (
    <>
      <div
        className={`flex flex-col gap-5 max-w-sm h-[280px] px-6 py-7 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white ${
          markedForDeletion ? 'opacity-70' : 0
        }
        key={message.id}`}
      >
        <div className="flex justify-between items-center border-b border-b-[#eee]">
          <div className="flex">
            <img
              className="w-14 h-14 rounded-[100px] border border-[#eee]"
              src={message.profileImageURL}
              alt="프로필 이미지"
            />
            <div className="ms-5">
              <p className={`${MESSAGE_FONT['message.font']}`}>
                From. <b>{message.sender}</b>
              </p>
              <span
                className={`rounded px-2 py-[2px] text-sm ${
                  RELATIONSHIP_TAG_COLOR[message.relationship]
                }`}
              >
                {message.relationship}
              </span>
            </div>
          </div>
          {showTrashIcon && !markedForDeletion && (
            <button
              onClick={() => {
                handleDeleteMessage(message.id);
                setShowConfirmModal(true);
              }}
              className="border border-[#CCC] p-2 rounded-md "
            >
              {markedForDeletion ? <IoReload /> : <LiaTrashAltSolid />}
            </button>
          )}
          {markedForDeletion && (
            <button
              onClick={() => {
                setMarkedForDeletion(false);
              }}
              className="border border-[#CCC] p-2 rounded-md "
            >
              <IoReload />
            </button>
          )}
        </div>
        <div className="h-28 line-clamp-4 cursor-pointer" onClick={getMessageId}>
          <p
            className={`text-[#4A4A4A] text-lg leading-7 ${MESSAGE_FONT[message.font]}`}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message.content) }}
          />
        </div>
        <p className="bottom-[30px] text-[#999] text-xs">{formatDate(message.createdAt)}</p>
      </div>

      {showConfirmModal && (
        <ConfirmModal
          title="해당 메세지를 삭제하시겠습니까?"
          onConfirm={handleMessageRemove}
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

MessageCard.propTypes = {
  message: PropTypes.object,
  handleClickMessage: PropTypes.func,
  handleDeleteMessage: PropTypes.func,
  showTrashIcon: PropTypes.bool,
};

export default MessageCard;
