import { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoCloseCircleSharp } from 'react-icons/io5';
import Modal from 'react-modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const maxImages = 15;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    handleChange(imageUrl);
  };

  const handleAddImage = (e) => {
    e.preventDefault();

    const imageUrl = document.getElementById('AddProfileImage').value;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!urlRegex.test(imageUrl)) {
      setError('정확한 이미지 URL을 입력해주세요.');
      return;
    }

    if (imageArray.includes(imageUrl)) {
      setError('이미 추가된 이미지입니다.');
      return;
    }

    if (imageArray.length >= maxImages) {
      setError('추가할 수 있는 최대 파일 수를 초과하였습니다. ');
      return;
    }

    setError('');
    setImageArray((prevImages) => [...prevImages, imageUrl]);
    setSelectedImage(imageUrl);
    handleChange(imageUrl);
    closeModal();
  };

  const handleChange = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImageURL: imageUrl,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setPreview(selectedImage);
    Modal.setAppElement('#root');
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

          <div className="flex w-full h-14 overflow-x-auto relative justify-start gap-1 flex-wrap">
            <div className="gap-1 flex flex-wrap">
              <label htmlFor="AddProfileImage" className="cursor-pointer" onClick={openModal}>
                <BsFillPlusCircleFill className="w-14 h-14 fill-gray-400" />
              </label>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                contentLabel="AddProfileImageModal"
                className="w-96 p-16 py-12 mx-auto bg-white border border-gray-300 rounded-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex flex-col items-center relative">
                  <div className="absolute top-[-36px] right-[-52px]">
                    <IoCloseCircleSharp
                      className="w-8 h-8 fill-purple-600 hover:fill-purple-700 cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <p className="mb-8 text-2xl font-bold leading-6">URL 주소</p>
                  <form id="FormId" className="flex flex-col items-center">
                    <input
                      type="url"
                      name="url"
                      id="AddProfileImage"
                      placeholder="이미지 주소를 입력해주세요."
                      form="FormId"
                      onChange={() => {
                        setError('');
                      }}
                      className={`flex w-[250px] p-3 mb-10 items-center gap-2 border rounded-xl bg-white focus:outline-none ${
                        error ? 'border-red-500' : 'border-gray-300 focus:border-gray-500'
                      } appearance-none relative`}
                    />
                    {error && (
                      <div className={`absolute top-[105px] font-bold text-red-500 text-sm mb-10`}>
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      className={`inline-flex p-2 px-6 justify-center items-center gap-[10px] rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-center font-bold font-Pretendard text-[15px] leading-7 ${
                        error ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      }`}
                      onClick={handleAddImage}
                    >
                      확인
                    </button>
                  </form>
                </div>
              </Modal>

              {imageArray.map((imageUrl, index) => (
                <button key={index} type="button" onClick={() => handleImageClick(imageUrl)}>
                  <img
                    src={imageUrl}
                    alt={`${index}번째 Profile Image `}
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
