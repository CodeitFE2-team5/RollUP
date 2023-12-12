function MessageCard({ message, showTrashIcon }) {
  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <div
      className="relative w-full max-w-[384px] h-[280px] px-6 py-7 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white"
      key={message.id}
    >
      <div className="flex pb-4 border-b border-b-[#eee]">
        <img
          className="w-[56px] h-[56px] rounded-[100px] border border-[#eee]"
          src={message.profileImageURL}
          alt="프로필 이미지"
        />
        <div className="ms-5">
          <p className={`mb-2 font-[${message.font}]`}>
            From. <b>{message.sender}</b>
          </p>
          <span
            className={`rounded px-2 py-[2px] text-sm
            ${
              message.relationship === '친구'
                ? 'bg-blue-100 text-blue-500'
                : message.relationship === '가족'
                ? 'bg-green-100 text-green-500'
                : message.relationship === '동료'
                ? 'bg-purple-100 text-purple-500'
                : message.relationship === '지인'
                ? 'bg-orange-100 text-orange-500'
                : null
            }`}
          >
            {message.relationship}
          </span>
        </div>
        {showTrashIcon && <img src="쓰레기통 이미지 url" />}
      </div>
      <div className="mt-3">
        <p className="overflow-hidden text-[#4A4A4A] text-ellipsis whitespace-nowrap text-lg leading-7">
          {message.content}
        </p>
      </div>
      <p className="absolute bottom-[30px] text-[#999] text-xs">{formatDate(message.createdAt)}</p>
    </div>
  );
}

export default MessageCard;