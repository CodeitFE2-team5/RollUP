import PropTypes from 'prop-types';

const CardSearchForm = ({ onChange }) => {
  const handleInputValueChange = (e) => {
    onChange(e.target.value);
  };

  return(
    <form className='mt-10 px-6 mx-auto max-w-3xl relative'>
      <input type="text" placeholder="롤링페이퍼를 찾아보세요." onChange={handleInputValueChange} className="bg-[url('/Users/82105/Documents/GitHub/Rolling/src/assets/searchIcon.svg')] bg-no-repeat bg-[left_8px_top_14px] indent-8 border rounded-lg border-purple-600 w-full mx-auto max-w-3xl h-12 focus:outline-none focus:border-2" />
      <button type="submit" className="h-10 w-20 bg-purple-600 text-white rounded-lg absolute top-1 right-7">검색하기</button>
    </form>
  )
};

CardSearchForm.propTypes = {
  onChange:PropTypes.func
}

export default CardSearchForm;
