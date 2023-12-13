import RollingPaperList from './RollingPaperList';
import Button from '../Common/Button';

const RollingPaperListPage = () => {
  return (
    <div>
      <RollingPaperList />
      <RollingPaperList />
      <Button to="/post">나도 만들어보기</Button>
    </div>
  );
};

export default RollingPaperListPage;
