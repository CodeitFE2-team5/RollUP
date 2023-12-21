import { useEffect, useState, useCallback } from "react";
import CardSearchForm from "./CardSearchForm";
import RollingPaperCardContents from "./RollingPaperContent";
import getURL from "../../utils/getURL";
import { getData } from "../../api/api";
import { LIMIT } from "../../constants/constants";

const RollingPaperAllPage = () => {
  const [rollingPaperList, setRollingPaperList] = useState();
  const [sort, setSort] = useState('');
  const [url, setUrl] = useState(getURL('', '', 'GET', LIMIT, 0, sort));
  const [value, setValue] = useState('');
  const [filteredRollingPaperList, setFilteredRollingPaperList] = useState(null);
  
  const getRollingPaperList = useCallback(async() => {
    const { previous, next, results } = await getData(url);
    
    if(!previous) setRollingPaperList(results);
    else setRollingPaperList((prev) => [...prev, ...results]);
    
    if(next) setUrl(next);
  }, [url]);

  useEffect(() => {
    getRollingPaperList();
  }, [getRollingPaperList])

  const handleOrderButtonClick = (e) => {
    if(e.target.textContent === '최신순') setSort('');
    if(e.target.textContent === '인기순') setSort('like');
  };

  const handleSearchEvent = (searchValue) => {
    setValue(searchValue);
  }

  const filterRollingPapers = (rollingPapers, searchValue) => {
    if(searchValue === '') return rollingPapers;
    const regex = new RegExp(searchValue, 'i');
    const filteredRollingPapers = rollingPapers?.filter((rollingPaper) => regex.test(rollingPaper.name)); // title에 검색어가 포함된 롤링페이퍼 필터링
    return filteredRollingPapers;
  };

  useEffect(() => {
    setUrl(getURL('', '', 'GET', LIMIT, 0, sort));
  },[sort])

  useEffect(() => {
    if (value === '') {
      setFilteredRollingPaperList(null);
    } else {
      const filteredPapers = filterRollingPapers(rollingPaperList, value);
      setFilteredRollingPaperList(filteredPapers);
    }
  }, [value, rollingPaperList]);

  return(
    <div>
      <CardSearchForm onChange={handleSearchEvent}/>
      <div className="flex gap-2 mx-auto max-w-[70vw] mt-6 justify-end">
        <button className={`border border-purple-600 py-2 px-2 rounded-md ${sort === '' ? 'bg-purple-600 text-white font-semibold' : ''}`} onClick={handleOrderButtonClick}>최신순</button>
        <button className={`border border-purple-600 py-2 px-2 rounded-md ${sort === 'like' ? 'bg-purple-600 text-white font-semibold' : ''}`} onClick={handleOrderButtonClick}>인기순</button>
      </div>
      <div className='py-[40px] pl-5 md:py-[50px] flex flex-col'>
        <RollingPaperCardContents rollingPaperList={filteredRollingPaperList || rollingPaperList} />
      </div>
    </div>
  )
};

export default RollingPaperAllPage;
