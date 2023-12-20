import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MessageButtons({ postId, removeMessagePape, showConfirmModal, disabled }) {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('edit') ? (
        <Link to={`/post/${postId}/edit`}>
          <button className="hover:bg-purple-700 w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7">
            편집하기
          </button>
        </Link>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={removeMessagePape}
            className="hover:bg-orange-700 w-44 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
          >
            페이지 삭제하기
          </button>

          <button
            onClick={showConfirmModal}
            className={`${
              !disabled ? 'cursor-not-allowed' : ''
            } sm:w-full sm:fixed sm:left-0 sm:bottom-6 hover:bg-purple-700 lg:static lg:w-32 px-6 py-3.5 bg-purple-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7`}
            disabled={!disabled}
          >
            저장하기
          </button>
        </div>
      )}
    </>
  );
}

MessageButtons.propTypes = {
  postId: PropTypes.node,
  removeMessagePape: PropTypes.func,
  showConfirmModal: PropTypes.func,
  disabled: PropTypes.node,
};

export default MessageButtons;
