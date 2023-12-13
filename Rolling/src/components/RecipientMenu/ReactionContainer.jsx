import ReactionBadge from "../Common/ReactionBadge";
import { LuSmilePlus } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import AdditionalReactionContainer from "./AdditionalReactionContainer";

const ReactionContainer = () => {
  const [additionalReactionOpen, setAdditionalReactionOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const handleClickAdditionalReaction = () => {
    setAdditionalReactionOpen(!additionalReactionOpen);
  }

  const handleClickAddButton = () => {
    setEmojiPickerOpen(!emojiPickerOpen);
  };
  return(
    <div className="flex gap-2 relative">
      <div className="flex">
        <div className="flex items-center justify-center gap-2">
          <ReactionBadge />
          <ReactionBadge />
          <ReactionBadge />
        </div>
        <button className="py-1.5 px-1.5" onClick={handleClickAdditionalReaction}><IoIosArrowDown className="w-6 h-6"/></button>
      </div>
      <button className="flex justify-center items-center py-1.5 px-4 gap-1 border rounded-md border-gray-300" onClick={handleClickAddButton}>
        <LuSmilePlus className="w-6 h-6"/>
        <p className="text-base">추가</p>
      </button>
      {additionalReactionOpen && <AdditionalReactionContainer />}
      {emojiPickerOpen && <div className="absolute top-11 left-4"><EmojiPicker width={307} height={393}/></div>}
    </div>
  )
};

export default ReactionContainer;
