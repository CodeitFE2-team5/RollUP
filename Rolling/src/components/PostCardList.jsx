function PostCardList({ messages, showTrashIcon }) {
  return (
    <>
      {messages?.map((message) => (
        <div
          className="  @apply w-96 h-[280px] shrink-0 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl;
        background: var(--white, #fff);"
          key={message.id}
        >
          <p>From. {message.sender}</p>
          {showTrashIcon && <img src="쓰레기통 이미지 url" />}
          <p>{message.relationship}</p>
          <p style={{ fontFamily: message.font }}>{message.content}</p>
          <p>{message.createdAt}</p>
        </div>
      )) ?? null}
    </>
  );
}

export default PostCardList;
