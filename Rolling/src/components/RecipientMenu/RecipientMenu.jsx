import Avatar from "../Common/Avatar";
import profile1 from '../../assets/profileImage/profile1.png';
import profile2 from '../../assets/profileImage/profile2.jpg';
import profile3 from '../../assets/profileImage/profile3.png';
import profile4 from '../../assets/profileImage/profile4.png';
import ReactionContainer from "./ReactionContainer";
import { IoShareOutline } from "react-icons/io5";
import { useState } from "react";
import ShareMenu from "./ShareMenu";

const profileData = [profile1, profile2, profile3, profile4];

const RecipientMenu = () => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  
  const handleClickShareButton = () => {
    setShareMenuOpen(!shareMenuOpen);
  };

  return(
    <nav className="w-screen relative py-[13px]">
      <div className="mx-auto flex gap-64 w-fit relative">
        <div className="recipent font-bold text-3xl font-pre">To. Ashely Kim</div>
        <div className="flex items-center gap-7 justify-center">
          <div className="flex gap-2.5">
            <Avatar profileImages={profileData}/>
            <div className="text-lg text-gray-900 font-pre">23명이 작성했어요!</div>
          </div>
          <div className="w-px h-7 bg-gray-200" />
          <ReactionContainer />
          <div className="w-px h-7 bg-gray-200" />
          <button className="px-4 py-2 border border-gray-300 rounded-md" onClick={handleClickShareButton}><IoShareOutline className="w-6 h-6"/></button>
          {shareMenuOpen && <ShareMenu />}
        </div>
      </div>
    </nav>
  )
};

export default RecipientMenu;

