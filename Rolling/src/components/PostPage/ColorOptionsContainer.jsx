import React from 'react';
import ColorOption from './ColorOption';

const ColorOptionsContainer = ({ colors, selectOption, selectedColor, handleColorClick }) => {
  return (
    <div className="flex w-[720px]">
      {colors.map((color, index) => (
        <ColorOption
          key={index}
          color={color}
          isSelected={selectOption === 'color' && selectedColor === color}
          handleColorClick={handleColorClick}
        />
      ))}
    </div>
  );
};

export default ColorOptionsContainer;
