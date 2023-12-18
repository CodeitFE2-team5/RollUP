import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import { LiaTrashAltSolid } from 'react-icons/lia';
import formatDate from '../../utils/formatDate';

function MessageCard({ message, onClickMessage, showTrashIcon }) {
  const handleClick = () => {
    onClickMessage(message.id);
  };

  return (
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
          <button className="border border-[#CCC] p-2 rounded-md ">
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
  );
}

MessageCard.propTypes = {
  message: PropTypes.object.isRequired,
  onClickMessage: PropTypes.func.isRequired,
  showTrashIcon: PropTypes.bool,
};

export default MessageCard;
