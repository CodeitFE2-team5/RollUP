import { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaCircleCheck } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const propTypes = {
  setFormData: PropTypes.func,
};

function MessageProfileImage({ setFormData }) {
  const [selectedImage, setSelectedImage] = useState(
    'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg'
  );
  const [imageArray, setImageArray] = useState([
    'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg',
    'https://i.ibb.co/SBhkRPX/profileimg1.jpg',
    'https://i.ibb.co/pX1t3bR/profileimg2.jpg',
    'https://i.ibb.co/m6MMJN5/profileimg3.jpg',
    'https://i.ibb.co/n7dYm0y/profileimg4.jpg',
  ]);
  const [preview, setPreview] = useState();

  const maxImages = 15;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    handleChange(imageUrl);
  };

  const handleAddImage = (event) => {
    if (imageArray.length >= maxImages) {
      alert('추가할 수 있는 최대 파일 수를 초과하였습니다. ');
      return;
    }
    const imgFile = event.target.files[0];

    if (imgFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageArray((prevImages) => [...prevImages, e.target.result]);
        setSelectedImage(e.target.result);
        handleChange(e.target.result);
      };

      reader.readAsDataURL(imgFile);
    }
  };

  const handleChange = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImageURL: imageUrl,
    }));
  };

  useEffect(() => {
    setPreview(selectedImage);
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-start gap-3 mt-[50px]">
      <div className="flex text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
        프로필 이미지
      </div>

      <div className="flex content-center items-center gap-8">
        <img
          className="w-[90px] h-[90px] rounded-full "
          src={preview}
          alt="프로필 이미지 미리보기"
        ></img>
        <div className="flex flex-col items-start gap-2">
          <div className="text-neutral-600 text-base font-normal font-['Pretendard'] leading-relaxed">
            프로필 이미지를 선택해주세요!
          </div>
          <div className="flex w-full h-14 relative justify-start">
            <div className="gap-1 flex flex-wrap">
              <label htmlFor="AddProfileImage" className="cursor-pointer">
                <BsFillPlusCircleFill className="w-14 h-14 fill-gray-400" />
              </label>
              <input
                type="file"
                name="file"
                id="AddProfileImage"
                className="hidden"
                accept="image/*"
                onChange={handleAddImage}
              />
              {imageArray.map((imageUrl, index) => (
                <button key={index} type="button" onClick={() => handleImageClick(imageUrl)}>
                  <img
                    src={imageUrl}
                    alt={`Profile Image ${index}`}
                    className={`w-14 h-14 cursor-pointer ${
                      selectedImage === imageUrl ? 'selected opacity-50' : ''
                    } ${index >= 5 ? 'rounded-full object-cover' : ''}`}
                  />
                  {selectedImage === imageUrl && (
                    <FaCircleCheck className="absolute m-auto transform translate-x-[25%] -translate-y-[124%] bg-white fill-gray-400 rounded-full w-[35px] h-[35px]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MessageProfileImage.propTypes = propTypes;

export default MessageProfileImage;
