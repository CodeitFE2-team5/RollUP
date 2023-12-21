import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastModal from './ToastModal';

const { Kakao } = window;

const ShareMenu = ({onChange}) => {
  const [isShareSuccess, setIsShareSuccess] = useState(false);
  const url = window.location.href;

  const handleShareUrl = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsShareSuccess(true);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() =>{ 
        setIsShareSuccess(false)
        onChange();
      }, 5000);
    }
  };

  const shareKakao = () => {
    onChange();
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling Paper',
        description: '나만의 롤링페이퍼',
        imageUrl:'https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '보러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('dbe2d5520b7b431c84cd34e00872312c');
  },[])

  return(
    <>
      <div className="flex flex-col py-2.5 px-px border border-gray-300 rounded-lg w-[140px] absolute top-11 right-0 z-10 bg-white">
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => shareKakao()}>카카오톡 공유</button>
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => handleShareUrl(url)}>URL 공유</button>
      </div>
      {isShareSuccess && <ToastModal />}
    </>
  )
};

export default ShareMenu;
