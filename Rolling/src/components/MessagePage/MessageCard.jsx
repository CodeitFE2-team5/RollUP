import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import { LiaTrashAltSolid } from 'react-icons/lia';
// import { formatDate } from '../../utils/formatDate';

MessageCard.propTypes = {
  message: PropTypes.object.isRequired,
  showTrashIcon: PropTypes.bool.isRequired,
};

function MessageCard({ message, showTrashIcon }) {
  return (
    <div
      className="relative w-full max-w-96 h-[280px] px-6 py-7 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white"
      key={message.id}
    >
      <div className="flex justify-between items-center pb-4 border-b border-b-[#eee]">
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
        {showTrashIcon && (
          <button className="border border-[#CCC] p-2 rounded-md ">
            <LiaTrashAltSolid />
          </button>
        )}
      </div>
      <div className="mt-3">
        <p
          className={`overflow-hidden text-[#4A4A4A] text-ellipsis whitespace-nowrap text-lg leading-7 ${
            MESSAGE_FONT[message.font]
          }`}
        >
          {message.content}
        </p>
      </div>
      <p className="absolute bottom-[30px] text-[#999] text-xs">{formatDate(message.createdAt)}</p>
    </div>
  );
}

export default MessageCard;
