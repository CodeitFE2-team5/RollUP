import { useRollingPaperList } from "../../hooks/hooks";
import RollingPaperCardContents from "./RollingPaperContent";

const RollingPaperAllPage = () => {
  const [createdSortRollingPaperList] = useRollingPaperList();
  const [likeSortRollingPaper] = useRollingPaperList('like');

  return(
    <div className='py-[40px] pl-5 md:py-[50px] flex flex-col'>
      <RollingPaperCardContents rollingPaperList={createdSortRollingPaperList} />
    </div>
  )
};

export default RollingPaperAllPage;
