import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    width: '320px',
    padding: '12px 16px',
    alignItems: 'center',
    gap: '189px',
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
    padding: '12px 16px',
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
    fontWeight: '400',
    lineHeight: '26px',
    letterSpacing: '-0.16px',
  }),
};

const options = [
  { value: '친구', label: '친구' },
  { value: '지인', label: '지인' },
  { value: '동료', label: '동료' },
  { value: '가족', label: '가족' },
];

function Relationships() {
  return (
    <>
      <div className="flex flex-col items-start gap-3 mt-[50px]">
        <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
          상대와의 관계
        </div>
        <div className="flex w-[320px]">
          <Select options={options} placeholder="지인" styles={customStyles} isSearchable={false} />
        </div>
      </div>
    </>
  );
}

export default Relationships;
