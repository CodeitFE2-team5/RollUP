import ColorOption from './ColorOption';
import PropTypes from 'prop-types';

const ColorOptionsContainer = ({ colors, selectedColor, handleItemClick }) => {
  return (
    <div className="flex w-[720px]">
      {colors.map((color, index) => (
        <div key={index}>
          <ColorOption
            color={color}
            isSelected={selectedColor === color}
            handleItemClick={handleItemClick}
          />
        </div>
      ))}
    </div>
  );
};
ColorOptionsContainer.propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColor: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
};
export default ColorOptionsContainer;
