// ImageOption.js
import React from 'react';

const ImageOption = ({ image, isSelected, handleImgClick }) => {
  return (
    <div
      onClick={() => handleImgClick('image', image)}
      className={`w-[168px] h-[168px] bg-no-repeat cursor-pointer ${
        isSelected ? 'border-2 border-blue-500' : ''
      }`}
      style={{ background: `url(${image})`, backgroundSize: '100% 100%' }}
    ></div>
  );
};

export default ImageOption;
