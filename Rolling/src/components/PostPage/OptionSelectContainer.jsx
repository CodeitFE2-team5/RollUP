import PropTypes from 'prop-types';
import ImageOption from './ImageOption';
import ColorOption from './ColorOption';

const propTypes = {
  optionArray: PropTypes.array.isRequired,
  selectedIndex: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
  selectOption: PropTypes.string,
};
const OptionSelectContainer = ({ optionArray, selectedIndex, selectOption, handleItemClick }) => {
  return (
    <div className="min-x-[100%] h-auto grid grid-cols-2 gap-3 mx-auto sm:grid-cols-4  sm:max-x-[720px]">
      {optionArray.map((option, index) => (
        <div key={index}>
          {selectOption === 'color' ? (
            <ColorOption
              color={option}
              isSelected={selectedIndex === option}
              handleItemClick={handleItemClick}
            />
          ) : (
            <ImageOption
              image={option}
              isSelected={selectedIndex === option}
              handleItemClick={handleItemClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};
OptionSelectContainer.propTypes = propTypes;
export default OptionSelectContainer;
