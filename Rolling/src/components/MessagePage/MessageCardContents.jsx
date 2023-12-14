import PropTypes from 'prop-types';
import MessageCard from './MessageCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BACKGROUND_COLOR } from '../../constants/constants.js';

MessageCardContents.propTypes = {
  recipient: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  showTrashIcon: PropTypes.bool.isRequired,
};

function MessageCardContents({ recipient, messages, showTrashIcon }) {
  return (
    <div className={`w-full ${BACKGROUND_COLOR[recipient?.backgroundColor]}`}>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center w-[384px] h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
            <button className="flex items-start gap-2.5 p-4">
              <BsFillPlusCircleFill className="w-14 h-14 fill-gray-500" />
            </button>
          </div>

          {messages?.map((message) => (
            <MessageCard key={message.id} message={message} showTrashIcon={showTrashIcon} />
          )) ?? null}
        </div>
      </div>
    </div>
  );
}

export default MessageCardContents;
