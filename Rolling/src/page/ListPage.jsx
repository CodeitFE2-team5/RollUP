// import React, { useEffect, useState } from 'react';

// import { getLatestLists, getPopularLists } from '../api';
// import '../slick.css';

// import { CarouselSlider } from '../component/CarouselSlider';

// export function ListPage() {
//   const [latestList, setLatestList] = useState([]);
//   const [popularList, setPopularList] = useState([]);
//   const rollingPaperListLoad = async () => {
//     try {
//       const { results: setlatestList } = await getLatestLists({ offset: 4, limit: 100 });
//       const { results: setpopularList } = await getPopularLists({ offset: 4, limit: 100 });
//       setLatestList(setlatestList);
//       setPopularList(setpopularList);
//       console.log(setlatestList, 'dflist');
//       console.log(setpopularList, 'zslist');
//     } catch (error) {
//       console.error('롤링 페이퍼 목록을 불러오는 중 오류 발생:', error);
//     }
//   };

//   useEffect(() => {
//     rollingPaperListLoad();
//   }, []);

//   return (
//     <>
//       <div class="w-[100%]">
//         <div class="w-[1160px] mx-auto my-0 flex flex-col gap-[45px]">
//           <div>{popularList.length > 0 && <CarouselSlider popularList={popularList} />}</div>
//           <div>{latestList.length > 0 && <CarouselSlider latestList={latestList} />}</div>
//         </div>
//       </div>
//     </>
//   );
// }
