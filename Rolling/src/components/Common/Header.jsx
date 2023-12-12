import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <div className="flex items-center justify-between flex-shrink-0 py-[12px] px-[222px] mx-auto border-b-[1px] border-zinc-100">
      <Link to={'/'}>
        <img src={logo} />
      </Link>
      <Link to={'/post'}>
        <button
          className="hover:bg-neutral-100 w-40 px-4 py-2 bg-white rounded-md border border-gray-300 justify-center items-center gap-2.5 flex text-center text-neutral-900 text-base font-bold font-pre"
        >
          롤링 페이퍼 만들기
        </button>
      </Link>
    </div>
  );
}

export default Header;