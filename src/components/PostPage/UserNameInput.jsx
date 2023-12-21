import PropTypes from 'prop-types';
import { useState } from 'react';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

export const UserNameInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 40) {
      setInputValue(value);
      setIsInputEmpty(value === '');
      onChange(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="receiveUserName"
        value={inputValue}
        onChange={handleChange}
        placeholder="받는 사람 이름을 입력해 주세요"
        maxLength={40}
        className={`w-full mb-1 p-4 border-2 border-solid rounded-lg focus:border-2 focus:outline-none ${
          isInputEmpty || inputValue.length >= 40
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-purple-500'
        }`}
      />
      <div className={`h-4 ${isInputEmpty || inputValue.length >= 40 ? 'hidden' : ''}`}>&nbsp;</div>
      {isInputEmpty && <div className="text-red-500 text-xs">필수입력 사항입니다.</div>}
      {inputValue.length >= 40 && (
        <div className="text-red-500 text-xs">최대 40자까지 입력 가능합니다.</div>
      )}
    </div>
  );
};

UserNameInput.propTypes = propTypes;
