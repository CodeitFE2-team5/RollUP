import React, { useRef, useState } from 'react';

import plus from '../assets/plus.svg';
// ... (other imports and code)

const ImageOptionsContainer = ({ images, selectOption, selectedImage, handleImgClick }) => {
  const [preview, setPreview] = useState(plus);
  const inputRef = useRef();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      handleImgClick('image', objectUrl);
    }
  };

  const handleFileSelectClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex w-[840px]">
      {images.map((image, index) => (
        <div
          className={`overflow-hidden ${
            selectOption === 'image' && selectedImage === image ? 'border-2 border-blue-500' : ''
          }`}
          key={index}
        >
          <div
            onClick={() => handleImgClick('image', image)}
            className={`w-[168px] h-[168px] bg-no-repeat transition-transform duration-500 hover:scale-125  cursor-pointer `}
            style={{
              background: `url(${image})`,
              backgroundSize: '100% 100%',
            }}
          ></div>
        </div>
      ))}

      {preview && (
        <div className="overflow-hidden">
          <div
            className={`w-[168px] h-[168px] bg-no-repeat transition-transform duration-500 hover:scale-150 cursor-pointer  ${
              preview === plus ? 'bg-gray-200 bg-cover bg-center' : 'bg-contain'
            } ${
              selectOption === 'image' && selectedImage === preview
                ? 'border-2 border-blue-500'
                : ''
            }`}
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: preview === plus ? '20% 20%' : '100% 100%',
            }}
            onClick={handleFileSelectClick}
          ></div>
        </div>
      )}

      <div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          ref={inputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ImageOptionsContainer;
