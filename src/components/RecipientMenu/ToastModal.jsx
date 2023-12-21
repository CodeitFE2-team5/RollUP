import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const ToastModal = () => {
  return(
    <div className="w-[320px] md:w-[524px] right-0 absolute h-16 md:right-[20vw] lg:right-25vw xl2:right-[15vw] top-[80vh] z-10">
      <div className="w-[320px] md:w-[524px] h-16 border flex bg-black/80 items-center justify-between mx-auto px-[30px] py-[19px] rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <IoIosCheckmarkCircle className="fill-green-600"/>
          <p className="text-white">URL이 복사되었습니다.</p>
        </div>
        <button><MdOutlineClose className="fill-white"/></button>
      </div>
    </div>
  )
};

export default ToastModal;
