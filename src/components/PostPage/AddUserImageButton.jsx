import plus from '../../assets/plus.svg';
import { useRef } from 'react';
import PropTypes from 'prop-types';
const propTypes = {
  selectedIndex: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
  handleSetImageArray: PropTypes.func.isRequired,
};
export const AddUserImageButton = ({ handleItemClick, handleSetImageArray }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      handleItemClick('image', objectUrl);
      handleSetImageArray(objectUrl);
    }
  };

  const handleFileSelectClick = () => {
    inputRef.current.click();
  };
  return (
    <div>
      <div className={`overflow-hidden rounded-2xl `}>
        <div
          className={`relative w-[156px] h-[156px] bg-no-repeat transition-transform duration-500 hover:scale-150 cursor-pointer bg-gray-200 bg-cover bg-center sm:w-[168px] sm:h-[168px] md:w-[168px] md:h-[168px] `}
          onClick={handleFileSelectClick}
        >
          <img
            src={plus}
            alt="defaultImage"
            className={'w-[20%] h-[20%] absolute top-[38%] left-[41%]'}
          />
        </div>
      </div>

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
AddUserImageButton.propTypes = propTypes;
