import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

const ImageOption = ({ isSelected, image, handleItemClick }) => {
  return (
    <div className={`overflow-hidden ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <div
        onClick={() => handleItemClick('image', image)}
        className={` w-40 h-40 rounded-2xl bg-no-repeat transition-transform duration-500 hover:scale-125  cursor-pointer `}
        style={{
          background: `url(${image})`,
          backgroundSize: '100% 100%',
        }}
      >
        {isSelected && (
          <div className="relative w-full h-full bg-gray-400 opacity-50 rounded-2xl">
            <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] " />
          </div>
        )}
      </div>
    </div>
  );
};

ImageOption.propTypes = propTypes;

export default ImageOption;
