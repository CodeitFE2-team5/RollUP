import ColorOption from './ColorOption';
import PropTypes from 'prop-types';

const propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColor: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
};
const ColorOptionsContainer = ({ colors, selectedColor, handleItemClick }) => {
  return (
    <div className="min-x-[320px] h-auto grid grid-cols-2 gap-3 md:grid-cols-4 mx-auto">
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
