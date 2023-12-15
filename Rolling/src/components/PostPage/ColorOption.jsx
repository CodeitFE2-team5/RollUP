import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

const ColorOption = ({ color, isSelected, handleItemClick }) => {
  return (
    <div className={`rounded-2xl  `}>
      <div
        onClick={() => handleItemClick('color', color)}
        className={`relative w-[156px] h-[156px] rounded-2xl cursor-pointer ${color} sm:w-[21.9vw] sm:h-[21.9vw] md:w-[168px] md:h-[168px]`}
      >
        {isSelected && (
          <div className="absolute top-0 left-0 min-w-full h-full bg-gray-400 opacity-50 rounded-2xl">
            <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] sm:w-[7vw] sm:h-[7vw] md:w-[55px] md:h-[55px]" />
          </div>
        )}
      </div>
    </div>
  );
};
ColorOption.propTypes = propTypes;
export default ColorOption;
