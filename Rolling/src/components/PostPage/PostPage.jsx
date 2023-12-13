import { useState } from 'react';
import heart from '../../assets/heart.jpg';
import load from '../../assets/load.jpg';
import sea from '../../assets/sea.jpg';
import supermario from '../../assets/supermario.jpg';
import ColorOptionsContainer from './ColorOptionsContainer';
import ImageOptionsContainer from './ImageOptionContainer';
import Subject from './Subject';

const colors = [`bg-[#ECD9FF]`, `bg-[#D0F5C3]`, `bg-[#B1E4FF]`, `bg-[#FFE2AD]`];
const images = [heart, load, sea, supermario];
const optionClickCss = 'bg-white-500 border-2 border-purple-500 text-purple-500 ';
const subjectCss = 'font-Pretendard font-bold text-2xl leading-9 tracking-wide';

const PostPage = () => {
  const [selectOption, setSelectOption] = useState('color');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [receiveUserName, setReceiveUserName] = useState('');

  const handleItemClick = (option, value) => {
    setSelectOption(option);
    setSelectedColor(option === 'color' ? value : null);
    setSelectedImage(option === 'image' ? value : null);
  };

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
    <form
      onSubmit={handleSubmit}
      className="w-[860px] mx-auto mt-[57px] flex flex-col gap-9 box-border"
    >
      <div className="flex flex-col  gap-3">
        <Subject css={subjectCss} subject="To." />
        <input
          type="text"
          name="receiveUserName"
          value={receiveUserName}
          onChange={handleNameChange}
          placeholder="받는 사람 이름을 입력해 주세요"
          className="p-4 border-2 border-solid border-gray-300 rounded-lg focus:border-2 focus:outline-none focus:border-purple-500 "
        />
      </div>

      <div className="flex flex-col gap-1 ">
        <Subject css={subjectCss} subject="배경화면을 선택해 주세요." />

        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다</p>
      </div>

      <div className="w-[250px] flex al bg-gray-200 text-center  text-lg font-Pretendard font-bold rounded-md  ">
        <div
          onClick={() => handleItemClick('color', null)}
          className={`w-[50%]  p-[7px] px-[16px]  border-2 border-gray-200 cursor-pointer rounded-md ${
            selectOption === 'color' ? optionClickCss : ''
          }`}
        >
          <p className="transition-transform transform hover:scale-110">색상</p>
        </div>

        <div
          onClick={() => handleItemClick('image', null)}
          className={`w-[50%]  py-2 px-[16px] border-2 border-gray-200 cursor-pointer  rounded-md ${
            selectOption === 'image' ? optionClickCss : ''
          } 
          `}
        >
          <p className="transition-transform transform hover:scale-110">이미지</p>
        </div>
      </div>

      {selectOption === 'color' ? (
        <ColorOptionsContainer
          colors={colors}
          selectedColor={selectedColor}
          handleItemClick={handleItemClick}
        />
      ) : (
        <ImageOptionsContainer
          images={images}
          selectedImage={selectedImage}
          handleItemClick={handleItemClick}
        />
      )}
      <button type="submit" className="border-4 border-black">
        제출
      </button>
      <div className="mt-4">받는사람 이름: {receiveUserName}</div>
      <div className="mt-4">선택된 옵션: {selectOption}</div>
      <div className="mt-4">선택된 이미지: {selectedImage || selectedColor}</div>
    </form>
  );
};

export default PostPage;
