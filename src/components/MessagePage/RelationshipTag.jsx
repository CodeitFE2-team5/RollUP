const RelationshipTag = ({ color, children}) => {
  return(
    <span className={`rounded px-2 py-[2px] text-sm ${color}`}>
      {children}
    </span>
  )
};

export default RelationshipTag;
