import React from 'react';
import ColorOption from './ColorOption';

const ColorOptionsContainer = ({ colors, selectOption, selectedColor, handleColorClick }) => {
  return (
    <div className="flex w-full gap-4">
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
