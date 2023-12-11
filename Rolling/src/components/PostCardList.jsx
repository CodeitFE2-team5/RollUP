import plusBtnImage from '../assets/plus.png';

function PostCardList({ messages, showTrashIcon }) {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center w-[384px] h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white">
            <button className="flex items-start gap-2.5 p-4 rounded-[100px] bg-[#555]">
              <img src={plusBtnImage} alt="메세지 추가하기" />
            </button>
          </div>

          {messages?.map((message) => (
            <div
              className="w-full max-w-[384px] h-[280px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl bg-white"
              key={message.id}
            >
              <p>From. {message.sender}</p>
              {showTrashIcon && <img src="쓰레기통 이미지 url" />}
              <p>{message.relationship}</p>
              <p style={{ fontFamily: message.font }}>{message.content}</p>
              <p>{message.createdAt}</p>
            </div>
          )) ?? null}
        </div>
      </div>
    </>
  );
}

export default PostCardList;
