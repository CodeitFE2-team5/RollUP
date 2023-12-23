import { useState } from 'react';
import PropTypes from 'prop-types';
import Subject from './Subject';

const propTypes = {
  onChange: PropTypes.func,
};

function NameInput({ onChange }) {
  const [name, setName] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 40) {
      setName(value);
      setIsInputEmpty(value === '');
      onChange(value);
    }
  };

  return (
    <div className="w-full h-24 flex-col justify-start items-start gap-3 inline-flex mx-auto ">
      <input
       className={`w-full p-4 border-2 border-solid rounded-lg focus:border-2 focus:outline-none ${
          isInputEmpty || name.length >= 40
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-purple-500'
        }`}
        placeholder="이름을 입력해 주세요."
        maxLength={40}
        value={name}
        onChange={(e) => handleChange(e)}
      />
      {isInputEmpty && (
        <div className="text-red-500 font-Pretendard text-xs font-regular">값을 입력해 주세요.</div>
      )}
      {name.length >= 40 && (
        <div className="text-red-500 text-xs">최대 40자까지 입력 가능합니다.</div>
      )}
    </div>
  );
}

NameInput.propTypes = propTypes;

export default NameInput;
