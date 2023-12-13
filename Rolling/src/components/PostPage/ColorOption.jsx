import PropTypes from 'prop-types';
const ColorOption = ({ color, isSelected, handleItemClick }) => {
  return (
    <div
      onClick={() => handleItemClick('color', color)}
      className={`w-[168px] h-[168px]  cursor-pointer ${color} ${
        isSelected ? 'border-2 border-blue-500' : ''
      }`}
    >
      서브 디브
    </div>
  );
};
ColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};
export default ColorOption;
