import ReactionBadge from "../Common/ReactionBadge";

const AdditionalReactionContainer = () => {
  return(
    <div className="grid grid-rows-2 grid-flow-col border py-6 px-6 absolute top-11 gap-x-2 gap-y-2.5 border-gray-400 rounded-lg right-24 z-10 bg-white">
      <ReactionBadge></ReactionBadge>
      <ReactionBadge></ReactionBadge>
      <ReactionBadge></ReactionBadge>
      <ReactionBadge></ReactionBadge>
      <ReactionBadge></ReactionBadge>
      <ReactionBadge></ReactionBadge>
    </div>
  )
};

export default AdditionalReactionContainer;
