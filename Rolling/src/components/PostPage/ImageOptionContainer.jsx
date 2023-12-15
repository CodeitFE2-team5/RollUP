import PropTypes from 'prop-types';
import ImageOption from './ImageOption';

const propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
};

const ImageOptionsContainer = ({ images, selectedImage, handleItemClick }) => {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex gap-3">
        {images.map((image, index) => (
          <div key={index}>
            <ImageOption
              image={image}
              isSelected={selectedImage === image}
              handleItemClick={handleItemClick}
            />
          </div>
        ))}{' '}
      </div>
    </div>
  );
};

ImageOptionsContainer.propTypes = propTypes;

export default ImageOptionsContainer;
