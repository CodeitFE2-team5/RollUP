import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactionBadge from '../Common/ReactionBadge';
import Avatar from '../Common/Avatar';
import profile1 from '../../assets/profileImage/profile1.png';
import profile2 from '../../assets/profileImage/profile2.jpg';
import profile3 from '../../assets/profileImage/profile3.png';
import profile4 from '../../assets/profileImage/profile4.png';

const backgroundColor = {
  blue: 'bg-[#B1E4FF]',
  green: 'bg-[#D0F5C3]',
  purple: 'bg-[#ECD9FF]',
  beige: 'bg-[#FFE2AD]',
};

const profileData = [profile1, profile2, profile3, profile4];

const RollingPaperCard = ({ rollingPaper }) => {
  return(
    <Link to={`/post/${rollingPaper.id}`}>
      <div  className={`w-[275px] h-[260px] rounded-2xl border-solid border-2 pt-[30px] pb-5 px-6 shadow-md ${backgroundColor[rollingPaper.backgroundColor]}`}>
        <div className="flex flex-col gap-3 mb-7">
          <div className="font-bold text-pretendard text-2xl leading-10 tracking-tight">
            To. {rollingPaper.name}
          </div>
          <Avatar profiles={profileData}/>
          <div className=" font-normal text-pretendard text-base leading-6 tracking-tight">
            <span className="font-bold text-pretendard text-base leading-6 tracking-tight">
              {rollingPaper.messageCount}
            </span>
            명이 작성했어요
          </div>
        </div>
        <div className="flex items-center  border-t border-slate-400 gap-3 pt-4">
          {rollingPaper.topReactions.map((reaction) => <ReactionBadge key={reaction.id} reaction={reaction}/>)}
        </div>
      </div>
    </Link>
  )
};

RollingPaperCard.propTypes = {
  rollingPaper: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backgroundColor: PropTypes.string,
      backgroundImageURL: PropTypes.string,
      name: PropTypes.string,
      messageCount: PropTypes.number,
      recentMessages: PropTypes.array,
      topReactions: PropTypes.array,
    })
  )
}

RollingPaperCard.propTypes.rollingPaper.topReactions.propTypes = {
  topReactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      emoji: PropTypes.string,
      count: PropTypes.number
    })
  )
}

export default RollingPaperCard;
