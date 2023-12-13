import { useState } from 'react';
import heart from '../../assets/heart.jpg';
import load from '../../assets/load.jpg';
import sea from '../../assets/sea.jpg';
import supermario from '../../assets/supermario.jpg';
import ColorOptionsContainer from './ColorOptionsContainer';
import ImageOptionsContainer from './ImageOptionContainer';
import Subject from './Subject';
import { CreateButton } from './CreateButton';

const colors = [`bg-[#ECD9FF]`, `bg-[#D0F5C3]`, `bg-[#B1E4FF]`, `bg-[#FFE2AD]`];
const images = [heart, load, sea, supermario];
const optionClickCss = 'bg-white-500 border-2 border-purple-500 text-purple-500 ';

const PostPage = () => {
  const [selectOption, setSelectOption] = useState('color');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [receiveUserName, setReceiveUserName] = useState('');
  const [nameInputEmpty, setNameInputEmpty] = useState(true);
  const handleItemClick = (option, value) => {
    setSelectOption(option);
    setSelectedColor(option === 'color' ? value : colors[0]);
    setSelectedImage(option === 'image' ? value : images[0]);
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setReceiveUserName(inputValue);
    setNameInputEmpty(inputValue !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receiveUserName) {
      setNameInputEmpty(false);
      return;
    }

    const formData = {
      receiveUserName: receiveUserName,
      selectedOption: selectOption,
      selectedImage,
    };
    console.log('폼 제출됨:', formData);
  };
  return (
    <form onSubmit={handleSubmit} className="w-[860px] mx-auto mt-[57px] flex flex-col box-border">
      <div className="flex flex-col  gap-3 mb-[50px]">
        <Subject>To. </Subject>
        <input
          type="text"
          name="receiveUserName"
          value={receiveUserName}
          onChange={handleNameChange}
          placeholder={
            nameInputEmpty
              ? '받는 사람 이름을 입력해 주세요'
              : '필수입력 사항입니다 받는사람이름을 입력해주세요'
          }
          className={`p-4 border-2 border-solid  rounded-lg focus:border-2 focus:outline-none focus:border-purple-500 ${
            nameInputEmpty ? 'border-gray-300' : 'border-red-500'
          }`}
        />
      </div>

      <div className="flex flex-col gap-1 mb-6">
        <Subject>배경화면을 선택해 주세요.</Subject>

        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다</p>
      </div>

      <div className="w-[250px] flex al bg-gray-200 text-center mb-11  text-lg font-Pretendard font-bold rounded-md  ">
        <div
          onClick={() => handleItemClick('color', selectedColor)}
          className={`w-[50%]  p-[7px] px-[16px]  border-2 border-gray-200 cursor-pointer rounded-md ${
            selectOption === 'color' ? optionClickCss : ''
          }`}
        >
          <p className="transition-transform transform hover:scale-110">색상</p>
        </div>

        <div
          onClick={() => handleItemClick('image', selectedImage)}
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
      <CreateButton>생성하기</CreateButton>
      <div className="mt-4">받는사람 이름: {receiveUserName}</div>
      <div className="mt-4">선택된 옵션: {selectOption}</div>
      <div className="mt-4">
        선택된 이미지: {selectOption === 'color' ? selectedColor : selectedImage}
      </div>
    </form>
  );
};

export default PostPage;
