import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import formatDate from '../../utils/formatDate';

function MessageCardModal({ message, setOpenModal }) {
  const closeModal = () => {
    setOpenModal(false);
    document.body.style = '';
  };

  return (
    <div className="fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[9999] w-[600px] h-[476px] px-10 rounded-2xl bg-white">
      <div className="flex justify-between items-center h-[116px] pb-4 border-b border-b-[#eee]">
        <div className="flex">
          <img
            className="w-14 h-14 rounded-[100px] border border-[#eee]"
            src={message.profileImageURL}
            alt="프로필 이미지"
          />
          <div className="ms-5">
            <p className={`mb-2 ${MESSAGE_FONT['message.font']}`}>
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
        <div className="text-sm text-[#999] leading-5">{formatDate(message.createdAt)}</div>
      </div>

      <div className="mt-3 h-60 overflow-y-auto">
        <span className="text-lg text-[#5A5A5A]">{message.content}</span>
      </div>

      <div className="absolute -translate-x-2/4 left-2/4 bottom-10">
        <button
          onClick={closeModal}
          className="w-[120px] px-4 py-[7px] rounded-md bg-[#9935ff] text-white"
        >
          확인
        </button>
      </div>
    </div>
  );
}

MessageCardModal.propTypes = {
  message: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func,
};

export default MessageCardModal;
