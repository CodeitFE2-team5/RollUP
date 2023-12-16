import { useState } from 'react';
import heart from '../../assets/heart.jpg';
import load from '../../assets/load.jpg';
import sea from '../../assets/sea.jpg';
import supermario from '../../assets/supermario.jpg';
import ColorOptionsContainer from './ColorOptionsContainer';
import ImageOptionsContainer from './ImageOptionContainer';

export const PostPage = () => {
  const [selectOption, setSelectOption] = useState('color');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [receiveUserName, setReceiveUserName] = useState('');

  const handleColorClick = (option, color) => {
    setSelectOption(option);
    setSelectedColor(color);
    setSelectedImage(null);
  };

  const handleImgClick = (option, image) => {
    setSelectOption(option);
    setSelectedImage(image);
    setSelectedColor(null);
  };

  const images = [heart, load, sea, supermario];

  const colors = [`bg-[#ECD9FF]`, `bg-[#D0F5C3]`, `bg-[#B1E4FF]`, `bg-[#FFE2AD]`];

  const handleNameChange = (e) => {
    setReceiveUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      sender: 'string',
      profileImageURL: 'string',
      relationship: '친구',
      content: 'string',
      font: 'Noto Sans',
    };
    console.log('폼 제출됨:', formData);
  };

  return (
    <div className="mt-14 mb-14">
      <form onSubmit={handleSubmit} className="w-[1060px] mx-auto">
        <div className="inline-flex flex-col items-start gap-3 mb-8">
          <p className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-10">
            To. 수신인
          </p>
          <input
            className="w-[720px] h-12 px-4 py-3 bg-white rounded-lg border border-stone-300 justify-start items-center gap-2.5 inline-flex"
            type="text"
            name="receiveUserName"
            value={receiveUserName}
            onChange={handleNameChange}
            placeholder="받는 사람 이름을 입력해 주세요"
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <p className="text-gray-900 font-bold font-Pretendard text-[24px] leading-36 tracking-wide">
            배경화면을 선택해 주세요.
          </p>
          <p className="text-gray-500 font-normal font-Pretendard text-16 leading-26 tracking-tight">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다
          </p>
        </div>

        <div className="flex-shrink-0 mb-8">
          <div className="w-[244px] rounded-md flex items-center justify-center">
            <div
              onClick={() => handleColorClick('color', null)}
              className={`w-[50%] rounded-md p-[7px] px-[16px] text-center cursor-pointer ${
                selectOption === 'color'
                  ? 'rounded-md border-purple-600 border-2 text-purple-700 text-center font-bold font-pre text-base leading-6'
                  : 'bg-gray-100 text-center font-pre text-base leading-6'
              } `}
            >
              컬러
            </div>

            <div
              onClick={() => handleImgClick('image', null)}
              className={`w-[50%] rounded-md bg-white p-[7px] px-[16px] text-center cursor-pointer ${
                selectOption === 'image'
                  ? 'rounded-md border-purple-600 border-2 text-purple-700 text-center font-bold font-pre text-base leading-6'
                  : 'bg-gray-100 text-center font-pre text-base leading-6'
              }`}
            >
              이미지
            </div>
          </div>
        </div>

        {selectOption === 'color' ? (
          <ColorOptionsContainer
            colors={colors}
            selectOption={selectOption}
            selectedColor={selectedColor}
            handleColorClick={handleColorClick}
          />
        ) : (
          <ImageOptionsContainer
            images={images}
            selectOption={selectOption}
            selectedImage={selectedImage}
            handleImgClick={handleImgClick}
          />
        )}
        <button type="submit" className="border-4 border-black">
          제출
        </button>
        <div className="mt-4">받는사람 이름: {receiveUserName}</div>
        <div className="mt-4">선택된 옵션: {selectOption}</div>
        <div className="mt-4">선택된 이미지: {selectedImage || selectedColor}</div>
      </form>
    </div>
  );
};

export default PostPage;
