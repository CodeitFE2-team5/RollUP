import PropTypes from 'prop-types';
const propTypes = {
  receiveUserName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  nameInputEmpty: PropTypes.bool.isRequired,
};
export const UserNameInput = ({ receiveUserName, onChange, nameInputEmpty }) => {
  return (
    <input
      type="text"
      name="receiveUserName"
      value={receiveUserName}
      onChange={onChange}
      placeholder={
        nameInputEmpty
          ? '받는 사람 이름을 입력해 주세요'
          : '필수입력 사항입니다 받는사람이름을 입력해주세요'
      }
      className={`p-4 border-2 border-solid  rounded-lg focus:border-2 focus:outline-none focus:border-purple-500 ${
        nameInputEmpty ? 'border-gray-300' : 'border-red-500'
      }`}
    />
  );
};

UserNameInput.propTypes = propTypes;
