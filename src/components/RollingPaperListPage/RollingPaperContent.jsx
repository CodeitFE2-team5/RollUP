import RollingPaperCard from "./RollingPaperCard";

const RollingPaperCardContents = ({ rollingPaperList }) => {
  return(
    <div className="grid grid-cols-4 grid-flow-row mx-auto gap-10">
      {rollingPaperList.map((rollingPaper) => <RollingPaperCard key={rollingPaper.id} rollingPaper={rollingPaper}/>)}
    </div>
  )
}

export default RollingPaperCardContents;
