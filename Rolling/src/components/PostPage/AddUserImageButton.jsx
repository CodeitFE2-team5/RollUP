import plus from '../../assets/plus.svg';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { uploadImageIBB } from '../../api';
const propTypes = {
  selectedIndex: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
  handleSetImageArray: PropTypes.func.isRequired,
};
export const AddUserImageButton = ({ handleItemClick, handleSetImageArray }) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      try {
        setIsLoading(true); // API 요청 시작 시 로딩 상태 변경
        const imageUrl = await uploadImageIBB(selectedFile);
        if (imageUrl) {
          handleItemClick('image', imageUrl);
          handleSetImageArray(imageUrl);
        }
      } finally {
        setIsLoading(false); // API 요청 종료 시 로딩 상태 변경
      }
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
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* 로딩 중에 표시될 로딩 UI를 추가하세요 */}
              <span>Loading...</span>
            </div>
          )}
          {!isLoading && (
            <img
              src={plus}
              alt="defaultImage"
              className={'w-[20%] h-[20%] absolute top-[38%] left-[41%]'}
            />
          )}
        </div>
      </div>

      <div>
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          onChange={handleChange}
          ref={inputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};
AddUserImageButton.propTypes = propTypes;
