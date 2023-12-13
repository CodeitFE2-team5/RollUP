import { useState } from 'react';

function SenderName() {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleErrorMessage = () => {
    if (name.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="w-full h-24 flex-col justify-start items-start gap-3 inline-flex mx-auto">
      <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9 ">
        From.
      </div>
      <input
        className={`w-full px-4 py-3 bg-white rounded-lg border ${
          error ? 'border-red-500' : 'border-stone-300'
        } justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-gray-700 focus:border-[1px]`}
        placeholder="이름을 입력해 주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleErrorMessage}
      />
      {error && (
        <div className="text-red-500 font-Pretendard text-xs font-regular">값을 입력해 주세요.</div>
      )}
    </div>
  );
}

export default SenderName;
