// -769px이상 / 태블릿은 768px-361px / 모바일은 360px-

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Subject from './Subject';
import { CreateButton } from './CreateButton';
import { UserNameInput } from './UserNameInput';
import { ToggleButton } from './ToggleButton';
import { createRecipient } from '../../api';
import OptionSelectContainer from './OptionSelectContainer';
import { UrlModal } from './UrlModal';
import NoSelectBackgroundCheck from './NoBackgroundCheck';

const colors = [`bg-[#ECD9FF]`, `bg-[#D0F5C3]`, `bg-[#B1E4FF]`, `bg-[#FFE2AD]`];
const colorMap = {
  'bg-[#ECD9FF]': 'purple',
  'bg-[#D0F5C3]': 'green',
  'bg-[#B1E4FF]': 'blue',
  'bg-[#FFE2AD]': 'beige',
};

const PostPage = () => {
  const navigate = useNavigate();

  const [selectOption, setSelectOption] = useState('color');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedImage, setSelectedImage] = useState('');
  const [images, setImages] = useState([]);
  const [receiveUserName, setReceiveUserName] = useState('');
  const [nameInputEmpty, setNameInputEmpty] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const imageUrls = [
    'https://cdn.pixabay.com/photo/2017/11/07/20/43/christmas-tree-2928142_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/12/18/21/52/new-years-eve-3883137_1280.png',
    'https://cdn.pixabay.com/photo/2018/11/09/19/57/christmas-3805334_1280.jpg',
    'https://cdn.pixabay.com/photo/2012/04/13/01/23/moon-31665_1280.png',
  ];

  const fetchData = async () => {
    try {
      setImages(imageUrls);
      if (imageUrls.length > 0) {
        setSelectedImage(imageUrls[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleItemClick = (option, value) => {
    setSelectOption(option);
    option === 'color' ? setSelectedColor(value) : (setSelectedImage(value), setChecked(false));
  };
  const handleSetImageArray = (value) => {
    setImages((prev) => [...prev, value]);
    console.log;
  };
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setReceiveUserName(inputValue);
    inputValue !== '' ? setNameInputEmpty(true) : setNameInputEmpty(false);
  };
  const handleModalChange = (bool, value) => {
    setModalOpen(bool);

    value !== null
      ? (setImages((prev) => [...prev, value]), setSelectedImage(value))
      : setSelectedImage(selectedImage);
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setSelectedImage('image', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedColor === '') {
      return alert('색상은 필수선택 사항입니다.');
    }
    const formData = new FormData();
    formData.append('team', '2-5');
    formData.append('name', receiveUserName);

    formData.append('backgroundColor', colorMap[selectedColor]);
    {
      selectedImage && formData.append('backgroundImageURL', selectedImage);
    }
    try {
      const responseData = await createRecipient(formData);

      if (responseData.id) {
        navigate(`/post/${responseData.id}`);
      } else {
        console.error('Invalid id in responseData:', responseData);
      }
    } catch (error) {
      console.error('Error creating recipient:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-full px-5 ">
      <form
        onSubmit={handleSubmit}
        className="w-[320px] mx-auto mt-[57px] flex flex-col box-border sm:w-[720px] "
      >
        <div className="flex flex-col  gap-3 mb-[50px] ">
          <Subject subject="To." description="" />
          <UserNameInput
            value={receiveUserName}
            onChange={handleNameChange}
            nameInputEmpty={nameInputEmpty}
          />
        </div>

        <Subject
          subject="배경화면을 선택해 주세요."
          description="컬러를 선택하거나, 이미지를 선택할 수 있습니다"
        />
        <div className="flex justify-between">
          <div className="w-[220px] flex  bg-gray-200 text-center mb-11  text-lg font-Pretendard font-bold rounded-md  ">
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

          {selectOption === 'image' && (
            <div className="flex gap-1 w-[270px]   text-center mb-11  text-lg font-Pretendard font-bold rounded-md  ">
              <NoSelectBackgroundCheck
                handleCheckboxChange={handleCheckboxChange}
                isChecked={isChecked}
              />
              <div
                className=" p-[7px] px-[16px] border-2 border-gray-200 cursor-pointer rounded-md transition-transform transform hover:scale-110"
                onClick={() => setModalOpen(true)}
              >
                URL추가
              </div>
            </div>
          )}
        </div>

        {selectOption === 'color' ? (
          <OptionSelectContainer
            optionArray={colors}
            selectedList={selectedColor}
            selectOption={selectOption}
            handleItemClick={handleItemClick}
            handleSetImageArray={handleSetImageArray}
          />
        ) : (
          <OptionSelectContainer
            optionArray={images}
            selectedList={selectedImage}
            selectOption={selectOption}
            handleItemClick={handleItemClick}
            handleSetImageArray={handleSetImageArray}
          />
        )}
        <CreateButton onSubmit={handleSubmit} disabled={!receiveUserName}>
          생성하기
        </CreateButton>
      </form>
      <div>{modalOpen && <UrlModal handleModalChange={handleModalChange} />}</div>
    </div>
  );
};

export default PostPage;
