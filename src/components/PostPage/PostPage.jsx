import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Subject from './Subject';
import PostButton from '../Common/PostButton';
import { UserNameInput } from './UserNameInput';
import { ToggleButton } from './ToggleButton';
import OptionSelectContainer from './OptionSelectContainer';
import { UrlModal } from './UrlModal';
import NoSelectBackgroundCheck from './NoBackgroundCheck';
import { UrlAppendButton } from './UrlAppendButton';
import getURL from '../../utils/getURL';
import { getData, postData } from '../../api/api';
import { BACKGROUND_COLOR } from '../../constants/constants';

const colors = Object.values(BACKGROUND_COLOR);
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
  const [userName, setUserName] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const [initialImageSet, setInitialImageSet] = useState(false);

  const getBackgroundList = async () => {
    const url = 'https://rolling-api.vercel.app/background-images/';
    try {
      const { imageUrls } = await getData(url);
      setImages(imageUrls);
    } catch (error) {
      console.error('Error fetching background list:', error);
    }
  };
  const handleItemClick = (option, value) => {
    setSelectOption(option);

    if (option === 'color') {
      setSelectedColor(value);
    } else {
      setSelectedImage(value);
      setChecked(false);
    }
    if (option === 'image' && !initialImageSet) {
      setSelectedImage(images[0]);
      setInitialImageSet(true);
    }
  };

  const handleSetImageArray = (value) => {
    setImages((prev) => [value, ...prev]);
  };
  const handleNameChange = (value) => {
    setUserName(value);
  };
  const handleModalChange = (bool, value) => {
    setModalOpen(bool);

    if (value !== null) {
      setImages((prev) => [value, ...prev]);
      setSelectedImage(value);
      setChecked(false);
    } else {
      setSelectedImage(selectedImage);
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setSelectedImage('');
  };

  const handleResponse = async (responseData) => {
    try {
      if (responseData.id) {
        navigate(`/post/${responseData.id}`);
      } else {
        console.error('responseData에 유효한 id가 없습니다:', responseData);
      }
    } catch (error) {
      console.error('응답 처리 중 오류 발생:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = getURL('', '', 'POST');
    if (selectedColor === '') {
      return alert('색상은 필수 선택 항목입니다.');
    }

    const formData = new FormData();

    formData.append('name', userName);
    formData.append('backgroundColor', colorMap[selectedColor]);

    if (selectedImage) {
      formData.append('backgroundImageURL', selectedImage);
    }

    try {
      const responseData = await postData(url, formData);
      handleResponse(responseData);
    } catch (error) {
      console.error('수령인 생성 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getBackgroundList();
  }, []);

  return (
    <div className="m-full px-5 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-[320px] mx-auto mt-[57px] flex flex-col box-border sm:w-[720px] "
      >
        <div className="flex flex-col  gap-3 mb-[34px] ">
          <Subject subject="To." description="" />
          <UserNameInput onChange={handleNameChange} />
        </div>

        <Subject
          subject="배경화면을 선택해 주세요."
          description="컬러를 선택하거나, 이미지를 선택할 수 있습니다"
        />
        <div className="flex justify-between">
          <div className="w-[240px] flex  bg-gray-200 text-center mb-11  text-lg font-Pretendard font-bold rounded-md  ">
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
            <div className="flex flex-col gap-1 w-[210px]  text-center mb-11  text-lg font-Pretendard font-bold rounded-md sm:flex-row sm:w-[260px]">
              <NoSelectBackgroundCheck
                handleCheckboxChange={handleCheckboxChange}
                isChecked={isChecked}
              />
              <UrlAppendButton onclick={() => setModalOpen(true)} />
            </div>
          )}
        </div>

        {images.length > 0 && selectOption === 'color' ? (
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
        <PostButton onSubmit={handleSubmit} isButtonEnabled={userName} />
      </form>
      <div>{modalOpen && <UrlModal handleModalChange={handleModalChange} />}</div>
    </div>
  );
};

export default PostPage;
