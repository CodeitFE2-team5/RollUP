import Article from './Article';
import LinkButton from '../Common/LinkButton';

function LandingPage() {
  return (
    <>
      <Article />
      <LinkButton to="/list">구경해보기</LinkButton>
    </>
  );
}

export default LandingPage;
