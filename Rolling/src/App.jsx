import { useEffect } from 'react';
import { ListPage } from './ListPage';

function App() {
  // useEffect(() => {
  //   const emojis = ['👍', '🤣', '😍', '😂', '😊', '😁', '❤️', '👌'];

  //   const numRequests = Math.floor(Math.random() * (30 - 1)) + 10;

  //   for (let i = 0; i < numRequests; i++) {
  //     const emojiData = {
  //       emoji: emojis[i % emojis.length],
  //       type: 'increase',
  //     };

  //     fetch('https://rolling-api.vercel.app/2-5/recipients/846/reactions/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(emojiData),
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP 오류! 상태: ${response.status}`);
  //         }
  //         console.log(`POST 요청 성공 - ${i + 1}`);
  //       })
  //       .catch((error) => {
  //         console.error('오류:', error);
  //       });
  //   }
  // }, []); // useEffect는 컴포넌트 마운트 시 한 번만 실행

  return (
    <>
      <ListPage />
    </>
  );
}

export default App;
