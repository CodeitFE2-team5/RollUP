import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { IoReload } from 'react-icons/io5';
import formatDate from '../../utils/formatDate';
import { useState } from 'react';
import RelationshipTag from './RelationshipTag';
import MessageContent from './MessageContent';

function MessageCard({
  message,
  clickedMessageModal,
  getClickedMessageIds,
  showTrashIcon = false,
}) {
  const [markedForDeletion, setMarkedForDeletion] = useState(false);

  const getClickedMessageId = () => {
    clickedMessageModal(message.id);
  };

  return (
    <>
      <div
        className={`flex justify-between flex-col max-w-sm h-[280px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white ${
          markedForDeletion ? 'opacity-70' : 0
        }
        key={message.id}`}
      >
        <div className="flex justify-between items-center border-b border-b-[#eee]">
          <div className="flex mb-4">
            <img
              className="w-14 h-14 rounded-[100px] border border-[#eee]"
              src={message.profileImageURL}
              alt="프로필 이미지"
            />
            <div className="ms-5">
              <p
                className={`whitespace-nowrap w-[230px] text-ellipsis overflow-hidden ${
                  MESSAGE_FONT[message.font]
                }`}
              >
                From. <b>{message.sender}</b>
              </p>
              <RelationshipTag color={RELATIONSHIP_TAG_COLOR[message.relationship]}>{message.relationship}</RelationshipTag>
            </div>
          </div>
          {(showTrashIcon && !markedForDeletion) && (
            <button
              onClick={() => {
                getClickedMessageIds(message.id);
                setMarkedForDeletion(true);
              }}
              className="border border-[#CCC] p-2 rounded-md "
            >
              {markedForDeletion ? <IoReload /> : <LiaTrashAltSolid />}
            </button>
          )}
          {markedForDeletion && (
            <button
              onClick={() => {
                getClickedMessageIds(message.id);
                setMarkedForDeletion(false);
              }}
              className="border border-[#CCC] p-2 rounded-md "
            >
              <IoReload />
            </button>
          )}
        </div>
        <div className="h-28 line-clamp-4 cursor-pointer" onClick={getClickedMessageId}>
          <MessageContent font={MESSAGE_FONT[message.font]} content={message.content}/>
        </div>
        <p className="bottom-[30px] text-[#999] text-xs">{formatDate(message.createdAt)}</p>
      </div>
    </>
  );
}

MessageCard.propTypes = {
  message: PropTypes.object,
  clickedMessageModal: PropTypes.func,
  getClickedMessageIds: PropTypes.func,
  showTrashIcon: PropTypes.bool,
};

export default MessageCard;
