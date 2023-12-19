import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

export const ToggleButton = ({ onClick, isActive, content }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[50%] p-[7px] px-[16px] border-2 border-gray-200 cursor-pointer rounded-md ${
        isActive ? 'bg-white-500 border-2 border-purple-500 text-purple-500' : ''
      }`}
    >
      <p className="transition-transform transform hover:scale-110">{content}</p>
    </div>
  );
};

ToggleButton.propTypes = propTypes;
