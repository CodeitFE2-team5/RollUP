import React from 'react';

const ColorOption = ({ color, isSelected, handleColorClick }) => {
  return (
    <div
      onClick={() => handleColorClick('color', color)}
      className={`w-[168px] h-[168px]  cursor-pointer ${color} ${
        isSelected ? 'border-2 border-blue-500' : ''
      }`}
    >
      서브 디브
    </div>
  );
};

export default ColorOption;
