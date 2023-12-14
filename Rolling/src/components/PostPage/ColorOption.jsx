import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const ColorOption = ({ color, isSelected, handleColorClick }) => {
  return (
    <div
      onClick={() => handleColorClick('color', color)}

      className={`relative w-full h-[238px] cursor-pointer rounded-lg border border-solid ${color} ${
        isSelected ? 'border-transparent' : ''
      }`}
    >
      {isSelected && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BsFillPlusCircleFill className="w-14 h-14 text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default ColorOption;
