import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastModal from './ToastModal';

const { Kakao } = window;

const ShareMenu = () => {
  const [isShareSuccess, setIsShareSuccess] = useState(false);
  const location = useLocation();

  const realUrl = location.pathname;

  const handleShareUrl = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsShareSuccess(true);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => setIsShareSuccess(false), 5000);
    }
  };

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling Paper',
        description: '나만의 롤링페이퍼',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '보러가기',
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
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
      <div className="flex flex-col py-2.5 px-px border border-gray-300 rounded-lg absolute top-11 right-0 z-10 bg-white">
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => shareKakao()}>카카오톡 공유</button>
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => handleShareUrl(location.pathname)}>URL 공유</button>
      </div>
      {isShareSuccess && <ToastModal />}
    </>
  )
};

export default ShareMenu;
