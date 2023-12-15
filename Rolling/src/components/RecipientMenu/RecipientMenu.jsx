import Avatar from "../Common/Avatar";
import ReactionContainer from "./ReactionContainer";
import { IoShareOutline } from "react-icons/io5";
import { useState } from "react";
import ShareMenu from "./ShareMenu";
import PropTypes from 'prop-types';

const RecipientMenu = ({ recipient }) => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  
  const handleClickShareButton = () => {
    setShareMenuOpen(!shareMenuOpen);
  };

  return(
    <nav className="w-full relative py-[13px]">
      <div className="mx-auto flex gap-64 w-fit relative">
        <div className="recipent font-bold text-3xl font-pre">{`To. ${recipient?.name}`}</div>
        <div className="flex items-center gap-7 justify-center">
          <div className="flex gap-2.5">
            <Avatar recentMessages={recipient?.recentMessages} messageCount={recipient?.messageCount}/>
            <div className="text-lg text-gray-900 font-pre">{`${recipient?.messageCount}명이 작성했어요!`}</div>
          </div>
          <div className="w-px h-7 bg-gray-200" />
          <ReactionContainer topReactions={recipient?.topReactions} recipientId={recipient?.id}/>
          <div className="w-px h-7 bg-gray-200" />
          <button className="px-4 py-2 border border-gray-300 rounded-md" onClick={handleClickShareButton}><IoShareOutline className="w-6 h-6"/></button>
          {shareMenuOpen && <ShareMenu />}
        </div>
      </div>
    </nav>
  )
};

RecipientMenu.propTypes = {
  recipient: PropTypes.shape({
    name: PropTypes.string,
    messageCount: PropTypes.number,
    topReactions: PropTypes.array,
    id: PropTypes.number,
    recentMessages: PropTypes.array
  })
}

export default RecipientMenu;

