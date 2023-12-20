import ReactionBadge from "../Common/ReactionBadge";
import PropTypes from 'prop-types';
import { useReactions } from "../../hooks/hooks";

const AdditionalReactionContainer = ({ recipientId }) => {
  
  const reactions = useReactions(recipientId);

  return(
    <div className="grid grid-rows-2 grid-flow-col border py-6 px-6 absolute top-11 gap-x-2 gap-y-2.5 border-gray-400 rounded-lg right-24 z-10 bg-white">
      {reactions?.slice(0,8).map((reaction) => <ReactionBadge key={reaction.id+reaction.emoji} reaction={reaction} />)}
    </div>
  )
};

AdditionalReactionContainer.propTypes = {
  recipientId: PropTypes.number
}

export default AdditionalReactionContainer;
