import RollingPaperCard from "./RollingPaperCard";
import PropTypes from 'prop-types';

const RollingPaperCardContents = ({ rollingPaperList }) => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row mx-auto gap-10">
      {rollingPaperList?.map((rollingPaper) => <RollingPaperCard key={rollingPaper.id+rollingPaper.name} rollingPaper={rollingPaper}/>)}
      {(rollingPaperList?.length === 0 && <div>검색 결과가 없습니다.</div>)}
    </div>
  )
}

RollingPaperCardContents.propTypes = {
  rollingPaperList: PropTypes.array
}

export default RollingPaperCardContents;
