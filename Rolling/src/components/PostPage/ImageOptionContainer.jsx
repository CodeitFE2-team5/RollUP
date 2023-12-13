import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import plus from '../../assets/plus.svg';
import ImageOption from './ImageOption';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
};

const ImageOptionsContainer = ({ images, selectedImage, handleItemClick }) => {
  const [preview, setPreview] = useState(plus);
  const inputRef = useRef();

  const plusButtonCss = preview === plus ? 'bg-gray-200 bg-cover bg-center' : 'bg-contain';

  const imgSize =
    preview === plus ? 'w-[20%] h-[20%] absolute top-[38%] left-[41%]' : 'w-full h-full';

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
    <div className="flex w-full justify-between ">
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
      </div>

      {preview && (
        <div className={`overflow-hidden rounded-2xl `}>
          <div
            className={`relative w-[150px] h-40 bg-no-repeat transition-transform duration-500 hover:scale-150 cursor-pointer ${plusButtonCss} `}
            onClick={handleFileSelectClick}
          >
            <img src={preview} alt="defaultImage" className={` ${imgSize}`} />

            {selectedImage === preview && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-50 ">
                <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] " />
              </div>
            )}
          </div>
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
