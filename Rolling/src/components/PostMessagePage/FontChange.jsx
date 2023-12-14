import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    width: '320px',
    padding: '7px 15px',
    alignItems: 'center',
    borderRadius: '8px',
    border: state.isFocused ? '2px solid #555' : '1px solid #CCC',
    boxShadow: state.isFocused ? 'none' : 'none',
    fontSize: '17px',
    '&:focus-within': {
      border: '1px solid #555',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    display: 'flex',
    width: '320px',
    padding: '7px 15px',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: state.isSelected ? '#F6F6F6' : 'white',
    color: '#181818',
    fontFamily: 'Pretendard',
    fontSize: '17px',
    outline: 'none',
    '&:active': {
      backgroundColor: '#F6F6F6',
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    fontFamily: 'Pretendard',
    fontSize: '17px',
    fontStyle: 'normal',
    lineHeight: '26px',
    letterSpacing: '-0.16px',
    height: 'auto',
  }),
};

const options = [
  { value: 'NotoSans', label: 'NotoSans' },
  { value: 'Pretendard', label: 'Pretendard' },
  { value: 'NanumHandWriting', label: 'NanumHandWriting' },
  { value: 'NanumMyeongjo', label: 'NanumMyeongjo' },
];

function FontChange() {
  return (
    <div className="flex flex-col items-start gap-3 mt-[50px]">
      <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
        폰트 선택
      </div>
      <div className="w-full sm:w-[320px]">
        <Select
          options={options}
          placeholder="NotoSans"
          styles={customStyles}
          isSearchable={false}
        />
      </div>
    </div>
  );
}

export default FontChange;
