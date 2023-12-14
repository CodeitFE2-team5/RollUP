import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import plus from '../../assets/plus.svg';
import ImageOption from './ImageOption';

const propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
};

const ImageOptionsContainer = ({ images, selectedImage, handleItemClick }) => {
  const [preview, setPreview] = useState(plus);
  const inputRef = useRef();

  const plusButtonCss = preview === plus ? 'bg-gray-200 bg-cover bg-center' : 'bg-contain';

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      handleItemClick('image', objectUrl);
    }
  };

  const handleFileSelectClick = () => {
    inputRef.current.click();
  };

  return (

    <div className="flex gap-4">

      {images.map((image, index) => (
        <div key={index}>
          <ImageOption
            image={image}
            isSelected={selectedImage === image}
            handleItemClick={handleItemClick}
          />
        </div>
      ))}

      {preview && (
        <div
          className={`overflow-hidden ${
            selectedImage === preview ? 'border-2 border-blue-500' : ''
          }`}
        >
          <div
            className={`w-[168px] h-[168px] bg-no-repeat transition-transform duration-500 hover:scale-150 cursor-pointer ${plusButtonCss} `}
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: preview === plus ? '20% 20%' : '100% 100%',
            }}
            onClick={handleFileSelectClick}
          ></div>
        </div>
      )}

      <div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          ref={inputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

ImageOptionsContainer.propTypes = propTypes;

export default ImageOptionsContainer;
