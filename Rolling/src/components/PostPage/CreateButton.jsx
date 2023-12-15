import PropTypes from 'prop-types';
const propTypes = {
  children: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export const CreateButton = ({ children, onSubmit, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      disabled={disabled}
      className={`min-w-full ga- px-[24px] py-[14px] my-[69px] text-center font-Pretendard font-bold text-white text-18 rounded-xl tracking-tighter
      ${disabled ? 'bg-gray-500' : 'bg-purple-500'}`}
    >
      {children}
    </button>
  );
};
CreateButton.propTypes = propTypes;
