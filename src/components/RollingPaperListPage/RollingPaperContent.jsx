import RollingPaperCard from "./RollingPaperCard";

const RollingPaperCardContents = ({ rollingPaperList }) => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row mx-auto gap-10">
      {rollingPaperList?.map((rollingPaper) => <RollingPaperCard key={rollingPaper.id+rollingPaper.name} rollingPaper={rollingPaper}/>)}
    </div>
  )
}

export default RollingPaperCardContents;
