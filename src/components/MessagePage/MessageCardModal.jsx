import PropTypes from 'prop-types';
import { MESSAGE_FONT, RELATIONSHIP_TAG_COLOR } from '../../constants/constants';
import formatDate from '../../utils/formatDate';
import RelationshipTag from './RelationshipTag';
import MessageContent from './MessageContent';

function MessageCardModal({ message, handleCloseModal }) {
  return (
    <>
      <div className="sm:w-full flex flex-col fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-[9999] md:w-[600px] h-[476px] p-10 rounded-2xl bg-white">
        <div className="flex justify-between items-center pb-5 h-auto border-b border-b-[#eee]">
          <div className="flex items-center">
            <img
              className="w-14 h-14 rounded-[100px] border border-[#eee]"
              src={message.profileImageURL}
              alt="프로필 이미지"
            />
            <div className="mx-5 w-[340px]">
              <p className={`mb-2 ${MESSAGE_FONT[message.font]}`}>
                From. <b>{message.sender}</b>
              </p>
              <RelationshipTag color={RELATIONSHIP_TAG_COLOR[message.relationship]}>{message.relationship}</RelationshipTag>
            </div>
          </div>
          <div className="text-sm text-[#999] leading-5">{formatDate(message.createdAt)}</div>
        </div>
        <div className="mt-3 h-60 overflow-y-auto">
          <MessageContent font={MESSAGE_FONT[message.font]} content={message.content}/>
        </div>
        <div className="mt-5 text-center">
          <button
            onClick={handleCloseModal}
            className="w-[120px] px-4 py-[7px] rounded-md bg-[#9935ff] text-white"
          >
            확인
          </button>
        </div>
      </div>
      <div onClick={handleCloseModal} className="fixed bg-[black] opacity-[60%] inset-0"></div>
    </>
  );
}

MessageCardModal.propTypes = {
  message: PropTypes.object.isRequired,
  handleCloseModal: PropTypes.func,
};

export default MessageCardModal;
