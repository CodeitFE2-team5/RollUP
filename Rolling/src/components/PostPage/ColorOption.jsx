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
        className={`relative min-w-[154px] h-[154px] rounded-2xl cursor-pointer ${color} md:w-[168px] md:h-[168px] `}
      >
        {isSelected && (
          <div className="absolute top-0 left-0 min-w-full h-full bg-gray-400 opacity-50 rounded-2xl">
            <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] " />
          </div>
        )}
      </div>
    </div>
  );
};
ColorOption.propTypes = propTypes;
export default ColorOption;
