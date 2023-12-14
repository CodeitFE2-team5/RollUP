import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

const ColorOption = ({ color, isSelected, handleItemClick }) => {
  return (
    <div className={`overflow-hidden rounded-2xl  `}>
      <div
        onClick={() => handleItemClick('color', color)}
        className={`relative w-[168px] h-40 rounded-2xl cursor-pointer ${color} `}
      >
        {isSelected && (
          <div className="absolute w-full h-full bg-gray-400 opacity-50 rounded-2xl">
            <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] " />
          </div>
        )}
      </div>
    </div>
  );
};
ColorOption.propTypes = propTypes;
export default ColorOption;
