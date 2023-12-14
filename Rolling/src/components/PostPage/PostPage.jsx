import { useState } from 'react';
import heart from '../../assets/heart.jpg';
import load from '../../assets/load.jpg';
import sea from '../../assets/sea.jpg';
import supermario from '../../assets/supermario.jpg';
import ColorOptionsContainer from './ColorOptionsContainer';
import ImageOptionsContainer from './ImageOptionContainer';
import Subject from './Subject';
import { CreateButton } from './CreateButton';
import { UserNameInput } from './UserNameInput';
import { ToggleButton } from './ToggleButton';
import { createRecipient } from '../../api';

const colors = [`bg-[#ECD9FF]`, `bg-[#D0F5C3]`, `bg-[#B1E4FF]`, `bg-[#FFE2AD]`];
const images = [heart, load, sea, supermario];
const colorMap = {
  'bg-[#ECD9FF]': 'purple',
  'bg-[#D0F5C3]': 'green',
  'bg-[#B1E4FF]': 'blue',
  'bg-[#FFE2AD]': 'beige',
};

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
    inputValue !== '' ? setNameInputEmpty(true) : setNameInputEmpty(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('team', '2-5');
    formData.append('name', receiveUserName);
    if (selectOption === 'color') {
      formData.append('backgroundColor', colorMap[selectedColor]);
      formData.append('backgroundImage', null);
    } else if (selectOption === 'image') {
      formData.append('backgroundColor', null);
      formData.append('backgroundImage', selectedImage);
    }
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    createRecipient(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="w-[860px] mx-auto mt-[57px] flex flex-col box-border">
      <div className="flex flex-col  gap-3 mb-[50px]">
        <Subject>To. </Subject>
        <UserNameInput
          value={receiveUserName}
          onChange={handleNameChange}
          nameInputEmpty={nameInputEmpty}
        />
      </div>

      <div className="flex flex-col gap-1 mb-6">
        <Subject>배경화면을 선택해 주세요.</Subject>

        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다</p>
      </div>

      <div className="w-[250px] flex al bg-gray-200 text-center mb-11  text-lg font-Pretendard font-bold rounded-md  ">
        <ToggleButton
          onClick={() => handleItemClick('color', selectedColor)}
          isActive={selectOption === 'color'}
          content="색상"
        />
        <ToggleButton
          onClick={() => handleItemClick('image', selectedImage)}
          isActive={selectOption === 'image'}
          content="이미지"
        />
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
      <CreateButton onSubmit={handleSubmit} disabled={!receiveUserName}>
        생성하기
      </CreateButton>
      <div className="mt-4">받는사람 이름: {receiveUserName}</div>
      <div className="mt-4">선택된 옵션: {selectOption}</div>
      <div className="mt-4">
        선택된 이미지: {selectOption === 'color' ? selectedColor : selectedImage}
      </div>
    </form>
  );
};

export default PostPage;
