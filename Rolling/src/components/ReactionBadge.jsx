const ReactionBadge = ({ reaction }) => {
  return(
    <div className="flex px-3 py-2 rounded-4xl gap-0.5 bg-black/[0.54]">
      <div>{reaction?.emoji || '👍'}</div>
      <p className='text-white'>{reaction?.count || 0}</p>
    </div>
  )
};

export default ReactionBadge;
