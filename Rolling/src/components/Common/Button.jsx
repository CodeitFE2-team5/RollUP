import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function Button({ children, to }) {
  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
      <Link to={to} className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
        <button className=" hover:bg-purple-700 w-72 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7">
          {children}
        </button>
      </Link>
    </div>
  );
}

Button.propTypes = propTypes;

export default Button;
