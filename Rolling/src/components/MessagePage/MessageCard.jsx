import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import { LiaTrashAltSolid } from 'react-icons/lia';
import formatDate from '../../utils/formatDate';
import axios from 'axios';
import { useState } from 'react';

function MessageCard({ message, onClickMessage, showTrashIcon = false }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleClick = () => {
    onClickMessage(message.id);
  };

  const handleCancelRemove = () => {
    setShowConfirmModal(false);
    setShowCompleteModal(false);
  };

  const handleMessageRemove = async () => {
    try {
      await axios.delete(`https://rolling-api.vercel.app/2-5/messages/${message.id}/`);
      setShowConfirmModal(false);
      setShowCompleteModal(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div
        className="flex flex-col gap-5 max-w-sm h-[280px] px-6 py-7 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white"
        key={message.id}
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
          {showTrashIcon && (
            <button
              onClick={() => {
                setShowConfirmModal(true);
              }}
              className="border border-[#CCC] p-2 rounded-md "
            >
              <LiaTrashAltSolid />
            </button>
          )}
        </div>
        <div className="h-28 line-clamp-4 cursor-pointer" onClick={handleClick}>
          <p className={`text-[#4A4A4A] text-lg leading-7 ${MESSAGE_FONT[message.font]}`}>
            {message.content}
          </p>
        </div>
        <p className="bottom-[30px] text-[#999] text-xs">{formatDate(message.createdAt)}</p>
      </div>

      {showConfirmModal && (
        <>
          <div className="flex flex-col justify-end gap-9 p-8 bg-white fixed -translate-x-2/4 -translate-y-2/4 left-2/4 w-96 h-56 rounded-3xl top-2/4 z-10">
            <p className="text-center text-xl font-bold">해당 메세지를 삭제하시겠습니까?</p>

            <div className="flex justify-center gap-5">
              <button
                onClick={handleMessageRemove}
                className="hover:bg-orange-700 w-24 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
              >
                확인
              </button>
              <button
                onClick={handleCancelRemove}
                className="hover:bg-gray-700 w-24 px-6 py-3.5 bg-gray-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
              >
                취소
              </button>
            </div>
          </div>
          <div
            onClick={handleCancelRemove}
            className="fixed bg-[black] opacity-[60%] inset-0"
          ></div>
        </>
      )}

      {showCompleteModal && (
        <>
          <div className="flex flex-col justify-end gap-9 p-8 bg-white fixed -translate-x-2/4 -translate-y-2/4 left-2/4 w-96 h-56 rounded-3xl top-2/4 z-10">
            <p className="text-center text-xl font-bold">삭제가 완료되었습니다.</p>
            <div className="flex justify-center gap-5">
              <button
                onClick={() => {
                  setShowCompleteModal(false);
                  window.location.reload();
                }}
                className="hover:bg-orange-700 w-24 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
              >
                확인
              </button>
            </div>
          </div>
          <div
            onClick={() => {
              setShowCompleteModal(false);
              window.location.reload();
            }}
            className="fixed bg-[black] opacity-[60%] inset-0"
          ></div>
        </>
      )}
    </>
  );
}

MessageCard.propTypes = {
  message: PropTypes.object.isRequired,
  onClickMessage: PropTypes.func.isRequired,
  showTrashIcon: PropTypes.bool,
};

export default MessageCard;
