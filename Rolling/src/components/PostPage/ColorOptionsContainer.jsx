import ColorOption from './ColorOption';
import PropTypes from 'prop-types';

const propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColor: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
};
const ColorOptionsContainer = ({ colors, selectedColor, handleItemClick }) => {
  return (
    <div className="flex gap-4 ">
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
ColorOptionsContainer.propTypes = propTypes;
export default ColorOptionsContainer;
