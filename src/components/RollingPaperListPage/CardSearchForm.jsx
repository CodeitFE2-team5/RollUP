import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const CardSearchForm = () => {
  return(
    <div className='max-w-[1160px] mx-auto'>
      <form className='flex justify-between items-center mt-6 px-6 mx-auto gap-5'>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-3xl" />
        <Link to={'/list/all'}>
          <button className='mx-auto flex justify-end items-center'><FaArrowRight />전체보기</button>
        </Link>
      </form>
    </div>
  )
};

export default CardSearchForm;
