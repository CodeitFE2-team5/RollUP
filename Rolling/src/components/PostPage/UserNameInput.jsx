import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  nameInputEmpty: PropTypes.bool.isRequired,
};

export const UserNameInput = ({ value, onChange, nameInputEmpty }) => {
  return (
    <input
      type="text"
      name="receiveUserName"
      value={value}
      onChange={onChange}
      onBlur={onChange}
      placeholder={nameInputEmpty ? '받는 사람 이름을 입력해 주세요' : '필수입력 사항입니다'}
      className={`p-4 border-2 border-solid  rounded-lg focus:border-2 focus:outline-none  ${
        nameInputEmpty
          ? 'border-gray-300 focus:border-purple-500'
          : 'border-red-500  focus:border-red-500'
      }`}
    />
  );
};

UserNameInput.propTypes = propTypes;
