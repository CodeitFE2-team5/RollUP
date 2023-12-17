import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaperRemoveModal({ recipient, setOpenRemoveModal }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navigate = useNavigate();

  const handleCancelRemove = () => {
    setOpenRemoveModal(false);
  };

  const handleConfirmRemove = async () => {
    try {
      await axios.delete(`https://rolling-api.vercel.app/2-5/recipients/${recipient.id}/`);
      setShowConfirmModal(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {!showConfirmModal && (
        <>
          <div className="flex flex-col justify-between gap-5 p-8 bg-white fixed -translate-x-2/4 -translate-y-2/4 left-2/4 w-96 h-56 rounded-3xl top-2/4 z-10">
            <p className="text-center text-lg font-bold">
              <span className="text-2xl">{recipient?.name} 님</span>
              <br />의 롤링 페이퍼를 삭제하시겠습니까?
            </p>
            <div className="flex justify-center gap-5">
              <button
                onClick={handleConfirmRemove}
                className="hover:bg-orange-700 w-24 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
              >
                확인
              </button>
              <button
                onClick={handleCancelRemove}
                className="hover:bg-gray-700 w-24 px-6 py-3.5 bg-gray-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
              >
                취소
              </button>
            </div>
          </div>
          <div
            onClick={handleCancelRemove}
            className="fixed bg-[black] opacity-[60%] inset-0"
          ></div>
        </>
      )}
      {showConfirmModal && (
        <>
          <div className="flex flex-col justify-end gap-9 p-8 bg-white fixed -translate-x-2/4 -translate-y-2/4 left-2/4 w-96 h-56 rounded-3xl top-2/4 z-10">
            <p className="text-center text-xl font-bold">삭제가 완료되었습니다.</p>
            <div className="flex justify-center gap-5">
              <button
                onClick={() => {
                  navigate('/list');
                }}
                className="hover:bg-orange-700 w-24 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
              >
                확인
              </button>
            </div>
          </div>
          <div
            onClick={() => {
              navigate('/list');
            }}
            className="fixed bg-[black] opacity-[60%] inset-0"
          ></div>
        </>
      )}
    </>
  );
}

PaperRemoveModal.propTypes = {
  recipient: PropTypes.object,
  setOpenRemoveModal: PropTypes.func,
};

export default PaperRemoveModal;
