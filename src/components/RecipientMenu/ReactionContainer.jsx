import ReactionBadge from "../Common/ReactionBadge";
import { LuSmilePlus } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";
import EmojiPicker from 'emoji-picker-react';
import AdditionalReactionContainer from "./AdditionalReactionContainer";
import PropTypes from 'prop-types';
import { useParams } from "react-router";
import getURL from "../../utils/getURL";
import { getData, postData } from "../../api/api";


const ReactionContainer = ({ recipientId }) => {
  const [additionalReactionOpen, setAdditionalReactionOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { id } = useParams();
  
  const [reactions, setReactions] = useState([]);
  const [url, setUrl] = useState(getURL(id, 'reactions'));
  
  const postURL = getURL(id, 'reactions', 'POST');

  const getReactions = useCallback(async() => {
    const { previous, next, results } = await getData(url);
    
    if(!previous) setReactions(results);
    else setReactions((prev) => [...prev, ...results]);
    
    if(next) setUrl(next);
  }, [url])

  const handleClickAdditionalReaction = () => {
    setAdditionalReactionOpen(!additionalReactionOpen);
    setEmojiPickerOpen(false);
  }

  const handleClickAddButton = () => {
    setEmojiPickerOpen(!emojiPickerOpen);
    setAdditionalReactionOpen(false);
  };

  const handleAddReaction = (value) => {
    setReactions((prev) => {
      const isEmojiExist = prev.some((reaction) => reaction.emoji === value);
      if(!isEmojiExist) return [...prev, { emoji: value, count: 1}].sort((a, b) => b.count - a.count);
      return prev.map((reaction) => {
        if(reaction.emoji === value) return {...reaction, count: reaction.count + 1};
        return reaction;
      }).sort((a, b) => b.count - a.count);
    })
    postData(postURL, {emoji: value, type: 'increase'});
    setEmojiPickerOpen(!emojiPickerOpen);
  }
  
  useEffect(() => {
    getReactions();
  }, [getReactions])

  return(
    <div className="flex md:gap-2 relative">
      <div className="flex">
        <div className="flex items-center justify-center gap-2">
          {reactions?.slice(0,3).map((reaction) => <ReactionBadge key={reaction.emoji} reaction={reaction} />)}
        </div>
        <button className="py-1.5 px-1.5" onClick={handleClickAdditionalReaction}><IoIosArrowDown className="w-6 h-6"/></button>
      </div>
      <button className="flex justify-center items-center py-1.5 px-2 md:px-4 gap-1 border rounded-md border-gray-300" onClick={handleClickAddButton}>
        <LuSmilePlus className="w-6 h-6"/>
        <p className="hidden text-base md:flex">추가</p>
      </button>
      {additionalReactionOpen && <AdditionalReactionContainer recipientId={recipientId}/>}
      {emojiPickerOpen && <div className="absolute top-11 left-4 z-10"><EmojiPicker onEmojiClick={(value) => handleAddReaction(value.emoji)} width={307} height={393}/></div>}
    </div>
  )
};

ReactionContainer.propTypes = {
  recipientId: PropTypes.number
}

export default ReactionContainer;
