import { Link } from 'react-router-dom';
import MessageCard from './MessageCard';
import PropTypes from 'prop-types';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import MessageCardModal from './MessageCardModal';

function MessageCardLists({ postId, messages, getClickedMessageIds, initialSkeletonLoading }) {
  const [clickedMessage, setClickedMessage] = useState([]);
  const [openMessageModal, setOpenMessageModal] = useState(false);

  const clickedMessageModal = (id) => {
    const message = messages.find((message) => message.id === id);
    setClickedMessage(message);

    setOpenMessageModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setOpenMessageModal(false);
    document.body.style = '';
  };

  return (
    <div className="lg:grid lg:grid-cols-[repeat(3,minmax(0,24rem))] md:grid md:grid-cols-[repeat(2,minmax(0,24rem))] grid grid-cols-[repeat(1,minmax(0,24rem))] justify-center gap-4 relative">
      {initialSkeletonLoading && <div className="skeleton absolute w-full h-auto inset-0"></div>}
      {!location.pathname.includes('edit') && (
        <PlusButton id={postId} />
      )}

      {!location.pathname.includes('edit')
        ? messages?.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              clickedMessageModal={clickedMessageModal}
            />
          ))
        : messages?.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              clickedMessageModal={clickedMessageModal}
              getClickedMessageIds={getClickedMessageIds}
              showTrashIcon={true}
            />
          ))}

      {openMessageModal && (
        <MessageCardModal message={clickedMessage} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
}

const PlusButton = ({id}) => {
  return(
    <div className="flex justify-center items-center max-w-sm h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
      <Link to={`/post/${id}/message`}>
        <button className="flex items-start gap-2.5 p-4">
          <BsFillPlusCircleFill className="w-14 h-14 fill-gray-500 grid-cols" />
        </button>
      </Link>
    </div>
  )
};

MessageCardLists.propTypes = {
  postId: PropTypes.node,
  messages: PropTypes.array,
  clickedMessageModal: PropTypes.func,
  getClickedMessageIds: PropTypes.func,
  initialSkeletonLoading: PropTypes.bool,
};

PlusButton.propTypes = {
  id:PropTypes.node
}

export default MessageCardLists;
