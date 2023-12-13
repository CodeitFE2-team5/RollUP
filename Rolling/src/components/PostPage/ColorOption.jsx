import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

const ColorOption = ({ color, isSelected, handleItemClick }) => {
  return (
    <div
      onClick={() => handleItemClick('color', color)}
      className={` w-40 h-40 rounded-2xl cursor-pointer ${color} ${
        isSelected ? 'border-2 border-blue-500' : ''
      }`}
    >
      {isSelected && (
        <div className="relative w-full h-full bg-gray-400 opacity-50 rounded-2xl">
          <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] " />
        </div>
      )}
    </div>
  );
};
ColorOption.propTypes = propTypes;
export default ColorOption;
