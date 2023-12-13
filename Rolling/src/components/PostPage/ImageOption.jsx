import PropTypes from 'prop-types';

const ImageOption = ({ isSelected, image, handleItemClick }) => {
  return (
    <div className={`overflow-hidden ${isSelected ? 'border-2 border-blue-500' : ''}`}>
      <div
        onClick={() => handleItemClick('image', image)}
        className={`w-[168px] h-[168px] bg-no-repeat transition-transform duration-500 hover:scale-125  cursor-pointer `}
        style={{
          background: `url(${image})`,
          backgroundSize: '100% 100%',
        }}
      ></div>
    </div>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default ImageOption;
