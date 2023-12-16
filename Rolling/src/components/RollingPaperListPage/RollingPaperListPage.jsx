import RollingPaperList from './RollingPaperList';
import Button from '../Common/Button';
import { useRollingPaperList } from '../../hooks/hooks';

const RollingPaperListPage = () => {
  const [createdSortRollingPaper] = useRollingPaperList();
  const [likeSortRollingPaper] = useRollingPaperList('like');

  return (
    <div className='pt-[50px] flex flex-col gap-[50px]'>
      <RollingPaperList title={'인기 롤링 페이퍼 10 🔥'} rollingPaperList={likeSortRollingPaper}/>
      <RollingPaperList title={'최근에 만든 롤링 페이퍼 10 ⭐️️'} rollingPaperList={createdSortRollingPaper}/>
      <Button to="/post">나도 만들어보기</Button>
    </div>
  );
};

export default RollingPaperListPage;
