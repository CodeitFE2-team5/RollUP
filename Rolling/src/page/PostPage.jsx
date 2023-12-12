import React, { useState } from 'react';
import heart from '../assets/heart.jpg';
import load from '../assets/load.jpg';
import sea from '../assets/sea.jpg';
import supermario from '../assets/supermario.jpg';
import ColorOptionsContainer from '../component/ColorOptionsContainer';
import ImageOptionsContainer from '../component/ImageOptionContainer';
import Header from '../components/Header';

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
      receiveUserName: receiveUserName,
      selectedOption: selectOption,
      selectedImage,
    };
    console.log('폼 제출됨:', formData);
  };

  return (
    <>
      <Header />
      <div className="mt-[56px] mb-[56px]">
        <form onSubmit={handleSubmit} className="w-[1060px] mx-auto ">
          <div className="inline-flex flex-col items-start gap-[12px] mb-[30px]">
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

          <div className="flex flex-col gap-[4px] mb-[12px]">
            <p className="text-gray-900 font-bold font-Pretendard text-[24px] leading-36 tracking-wide">
              배경화면을 선택해 주세요.
            </p>
            <p className="text-gray-500 font-normal font-Pretendard text-16 leading-26 tracking-tight">
              컬러를 선택하거나, 이미지를 선택할 수 있습니다
            </p>
          </div>

          <div className="w-244 flex-shrink-0 mb-[30px]">
            <div className="w-[244px] flex ">
              <div
                onClick={() => handleColorClick('color', null)}
                className={`w-[50%] bg-white p-[7px] px-[16px] cursor-pointer ${
                  selectOption === 'color'
                    ? 'bg-white-500 border-2 border---purple-700 text-blue-500 '
                    : ''
                } `}
              >
                컬러
              </div>

              <div
                onClick={() => handleImgClick('image', null)}
                className={`w-[50%] bg-gray-200 p-[7px] px-[16px] cursor-pointer ${
                  selectOption === 'image'
                    ? 'bg-white-500 border-2 border-blue-500 text-blue-500 '
                    : ''
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
    </>
  );
};

export default PostPage;
