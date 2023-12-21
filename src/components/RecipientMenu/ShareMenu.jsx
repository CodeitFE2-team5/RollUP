import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastModal from './ToastModal';

const { Kakao } = window;

const ShareMenu = () => {
  const [isShareSuccess, setIsShareSuccess] = useState(false);
  const location = useLocation();

  const handleShareUrl = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsShareSuccess(true);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => setIsShareSuccess(false), 60000);
    }
  };

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling Paper',
        description: '나만의 롤링페이퍼',
        imageUrl:
          'https://private-user-images.githubusercontent.com/139199039/292135098-afe67a11-8251-42bf-a279-552e4e0f1fcc.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMxNjUxOTgsIm5iZiI6MTcwMzE2NDg5OCwicGF0aCI6Ii8xMzkxOTkwMzkvMjkyMTM1MDk4LWFmZTY3YTExLTgyNTEtNDJiZi1hMjc5LTU1MmU0ZTBmMWZjYy5zdmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIyMVQxMzIxMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MTc1ZDQ5MDg2MjJiYTI1ZjE1ZDIyYTI0MWE5OGZlYjQxMjNiNzkxNjY2OGNlY2IzODQ3NGEwM2ZiMDc3NmQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.2PipUobf7ko1-1ybLyKDrMaJjDgY1ViWDvOFklmpmZo',
        link: {
          mobileWebUrl: location.pathname,
          webUrl: location.pathname,
        },
      },
      buttons: [
        {
          title: '보러가기',
          link: {
            mobileWebUrl: location.pathname,
            webUrl: location.pathname,
          },
        },
      ],
    });
  }

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('dbe2d5520b7b431c84cd34e00872312c');
  },[])

  useEffect(() => {
    console.log(location.pathname);
  },[location.pathname]);

  return(
    <>
      <div className="flex flex-col py-2.5 px-px border border-gray-300 rounded-lg w-[140px] absolute top-11 right-0 z-10 bg-white">
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => shareKakao()}>카카오톡 공유</button>
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => handleShareUrl(location.pathname)}>URL 공유</button>
      </div>
      {isShareSuccess && <ToastModal />}
    </>
  )
};

export default ShareMenu;
