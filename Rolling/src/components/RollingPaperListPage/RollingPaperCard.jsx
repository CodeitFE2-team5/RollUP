import { Link } from 'react-router-dom';
import ReactionBadge from '../ReactionBadge';

const backgroundColor = {
  blue: 'bg-[#B1E4FF]',
  green: 'bg-[#D0F5C3]',
  purple: 'bg-[#ECD9FF]',
  beige: 'bg-[#FFE2AD]',
};

const RollingPaperCard = ({ rollingPaper }) => {
  return(
    <Link to={`/post/${rollingPaper.id}`} className={`h-auto w-[275px] rounded-2xl border-solid border-2 py-7 px-6 shadow-md ${backgroundColor[rollingPaper.backgroundColor]}`}>
      <div className="flex flex-col gap-5 mb-7">
        <div className="font-bold text-pretendard text-2xl leading-10 tracking-tight">
          To. {rollingPaper.name}
        </div>
        <span>그림들어갈자리</span>
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
    </Link>
  )
};

export default RollingPaperCard;
