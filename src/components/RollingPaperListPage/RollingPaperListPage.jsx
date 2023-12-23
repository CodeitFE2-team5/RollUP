import Button from '../Common/Button';
import { useRollingPaperList } from '../../hooks/hooks';
import { Suspense, lazy } from 'react';
import RollingPaperListSkeleton from './RollingPaperListSkeleton';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const RollingPaperList = lazy(() => import('./RollingPaperList'));

const RollingPaperListPage = () => {
  const [createdSortRollingPaper] = useRollingPaperList();
  const [likeSortRollingPaper] = useRollingPaperList('like');

  return (
    <div>
      <div className="mt-10 overflow-hidden">
        <Link to={'/list/all'} className="flex justify-end px-5 max-w-[1160px] mx-auto">
          <button className="flex justify-end items-center bg-purple-600 text-white text-xl rounded-lg py-3 px-5 gap-2">
            <FaArrowRight className="fill-white" />
            전체보기
          </button>
        </Link>
      </div>
      <Suspense fallback={<RollingPaperListSkeleton />}>
        <div className="py-[40px] pl-5 md:py-[50px] flex flex-col gap-[50px]">
          <RollingPaperList title={'인기 롤링 페이퍼 🔥'} rollingPaperList={likeSortRollingPaper} />
          <RollingPaperList
            title={'최근에 만든 롤링 페이퍼 ⭐️️'}
            rollingPaperList={createdSortRollingPaper}
          />
          <Button to="/post">나도 만들어보기</Button>
        </div>
      </Suspense>
    </div>
  );
};

export default RollingPaperListPage;
