import PropTypes from 'prop-types';
const propTypes = {
  children: PropTypes.string.isRequired,
};
export const CreateButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-[100%] ga- px-[24px] py-[14px] my-[69px] bg-purple-500 text-center font-Pretendard font-bold text-white text-18 rounded-xl tracking-tighter"
    >
      {children}
    </button>
  );
};
CreateButton.propTypes = propTypes;
