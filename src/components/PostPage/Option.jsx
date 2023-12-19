import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  selectValue: PropTypes.string.isRequired,
  selectOption: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

const Option = ({ selectValue, selectOption, isSelected, handleItemClick }) => {
  const valueDivCss = `relative min-w-[154px] h-[154px] rounded-2xl cursor-pointer ${
    selectOption === 'color' ? selectValue : ''
  }   md:w-[168px] md:h-[168px] `;

  return (
    <div className={`overflow-hidden rounded-2xl  `}>
      <div onClick={() => handleItemClick('image', selectValue)} className={`${valueDivCss}`}>
        {isSelected === 'image' && (
          <img src={selectValue} alt="defaultImage" className="w-full h-full " />
        )}
        {isSelected && (
          <div className="absolute top-0 left-0 min-w-full h-full bg-gray-400 opacity-50 rounded-2xl">
            <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] " />
          </div>
        )}
      </div>
    </div>
  );
};
Option.propTypes = propTypes;
export default Option;
