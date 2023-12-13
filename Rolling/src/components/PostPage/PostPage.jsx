import { useState } from 'react';
import heart from '../../assets/heart.jpg';
import load from '../../assets/load.jpg';
import sea from '../../assets/sea.jpg';
import supermario from '../../assets/supermario.jpg';
import ColorOptionsContainer from './ColorOptionsContainer';
import ImageOptionsContainer from './ImageOptionContainer';

const colors = [`bg-[#ECD9FF]`, `bg-[#D0F5C3]`, `bg-[#B1E4FF]`, `bg-[#FFE2AD]`];
const images = [heart, load, sea, supermario];
const clickEffectCss = 'bg-white-500 border-2 border-blue-500 text-blue-500 ';

const PostPage = () => {
  const [selectOption, setSelectOption] = useState('color');
  const [selectedColor, setSelectedColor] = useState(null);
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
    <form onSubmit={handleSubmit} className="w-[860px] mx-auto">
      <div>
        <p>To</p>
        <input
          type="text"
          name="receiveUserName"
          value={receiveUserName}
          onChange={handleNameChange}
          placeholder="받는 사람 이름을 입력해 주세요"
        />
      </div>

      <div>
        <p>배경화면을 선택해 주세요.</p>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다</p>
      </div>

      <div className="w-[244px] flex ">
        <div
          onClick={() => handleItemClick('color', null)}
          className={`w-[50%] bg-gray-200 p-[7px] px-[16px] cursor-pointer ${
            selectOption === 'color' ? clickEffectCss : ''
          } `}
        >
          컬러
        </div>

        <div
          onClick={() => handleItemClick('image', null)}
          className={`w-[50%] bg-gray-200 p-[7px] px-[16px] cursor-pointer${
            selectOption === 'image' ? clickEffectCss : ''
          } 
          `}
        >
          이미지
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
