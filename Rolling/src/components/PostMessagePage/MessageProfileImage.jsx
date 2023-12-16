import ProfileImage from '../Common/ProfileImage';

function MessageProfileImage() {
  return (
    <div className="flex flex-col items-start gap-3 mt-[50px]">
      <div className="flex text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
        프로필 이미지
      </div>
      <div className="flex items-center gap-8">
        <img src="../../../src/assets/profileImage/no-profileimg.svg"></img>
        <div className="flex flex-col items-start gap-3">
          <div className="text-neutral-600 text-base font-normal font-['Pretendard'] leading-relaxed">
            프로필 이미지를 선택해주세요!
          </div>
          <div className="w-[605px] h-14">
            {/* <ProfileImage leftValue={2} size={80}></ProfileImage> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageProfileImage;
