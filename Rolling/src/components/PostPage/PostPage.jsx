import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Subject from './Subject';
import { CreateButton } from './CreateButton';
import { UserNameInput } from './UserNameInput';
import { ToggleButton } from './ToggleButton';
import { createRecipient, getBackgroundList } from '../../api';
import OptionSelectContainer from './OptionSelectContainer';

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
  const fetchData = async () => {
    try {
      const { imageUrls } = await getBackgroundList();

      setImages(imageUrls);
      if (imageUrls.length > 0) {
        setSelectedImage(imageUrls[0]);
      }
    } catch (error) {
      console.error('Error fetching background list:', error);
    }
  };
  const handleItemClick = (option, value) => {
    setSelectOption(option);
    if (option === 'color') {
      setSelectedColor(value);
    }
    if (option === 'image') {
      setSelectedImage(value);
    }
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setReceiveUserName(inputValue);
    inputValue !== '' ? setNameInputEmpty(true) : setNameInputEmpty(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('team', '2-5');
    formData.append('name', receiveUserName);
    formData.append('backgroundColor', colorMap[selectedColor]);
    formData.append('backgroundImageURL', selectedImage);

    try {
      const responseData = await createRecipient(formData);

      if (responseData.id) {
        alert('롤링페이퍼를 생성했습니다');
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
        className="max-w-[320px] mx-auto mt-[57px] flex flex-col box-border md:max-w-[720px] "
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
          <OptionSelectContainer
            optionArray={colors}
            selectedIndex={selectedColor}
            selectOption={selectOption}
            handleItemClick={handleItemClick}
          />
        ) : (
          <OptionSelectContainer
            optionArray={images}
            selectedIndex={selectedImage}
            selectOption={selectOption}
            handleItemClick={handleItemClick}
          />
        )}
        <CreateButton onSubmit={handleSubmit} disabled={!receiveUserName}>
          생성하기
        </CreateButton>
      </form>
    </div>
  );
};

export default PostPage;
