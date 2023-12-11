import plusBtnImage from '../assets/plus.png';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function PostCardList({ recipient, messages, showTrashIcon }) {
  return (
    <>
      <div className={`w-full h-[1080px] bg-[${recipient?.backgroundColor}]`}>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center w-[384px] h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
              <button className="flex items-start gap-2.5 p-4 rounded-[100px] bg-[#555]">
                <img src={plusBtnImage} alt="메세지 추가하기" />
              </button>
            </div>

            {messages?.map((message) => (
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
                    <p className={`font-[${message.font}]`}>
                      From. <b>{message.sender}</b>
                    </p>
                    <p>{message.relationship}</p>
                  </div>
                  {showTrashIcon && <img src="쓰레기통 이미지 url" />}
                </div>
                <div>
                  <p className=" overflow-hidden text-[#4A4A4A] text-ellipsis whitespace-nowrap text-lg leading-7">
                    {message.content}
                  </p>
                </div>
                <p className="absolute bottom-[30px] text-[#999] text-xs">
                  {formatDate(message.createdAt)}
                </p>
              </div>
            )) ?? null}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCardList;
