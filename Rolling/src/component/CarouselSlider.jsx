// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import arrow_left from '../assets/arrow_left.svg';
// import arrow_right from '../assets/arrow_right.svg';
// import styled from 'styled-components';

// const Styled_Slide = styled(Slider)`
//   .slick-track {
//     display: flex;
//   }
//   .slick-track > div {
//     margin: 0px 10px;
//   }
// `;
// const CustomPrevArrow = (props) => {
//   const { currentSlide } = props;

//   // 처음 슬라이드일 때는 버튼을 숨김
//   if (currentSlide === 0) {
//     return null;
//   }

//   return (
//     <button
//       {...props}
//       className="absolute bottom-[43%] left-[-0.7%] z-10 border-2 border-black-400 bg-white rounded-full w-[40px] h-[40px] hover:bg-gray-200 hover:border-violet-600"
//     >
//       <img src={arrow_left} alt="" className="w-[50%] h-[50%] mx-auto" />
//     </button>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { currentSlide, slideCount } = props;

//   // 마지막 슬라이드이거나 더 이상 가져올 것이 없을 때 버튼을 숨김
//   if (currentSlide === slideCount - 1) {
//     return null;
//   }

//   return (
//     <button
//       {...props}
//       className="absolute bottom-[43%] right-[-0.7%] z-10 border-2 border-black-400 bg-white rounded-full w-[40px] h-[40px] hover:bg-gray-200 hover:border-yellow-600"
//     >
//       <img src={arrow_right} alt="" className="w-[50%] h-[50%] mx-auto" />
//     </button>
//   );
// };

// export const CarouselSlider = ({ latestList, popularList }) => {
//   console.log(latestList, '넘어온값확인 lates');
//   console.log(popularList, '넘어온값확인 popularList');
//   // Added parentheses here
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   const TopReactions = ({ topReactions }) => {
//     return topReactions.map((reaction, index) => (
//       <div
//         key={index}
//         className="py-[8px] px-[12px] rounded-3xl p-2 gap-10  bg-black bg-opacity-40"
//       >
//         {reaction.emoji}
//         {reaction.count}
//       </div>
//     ));
//   };
//   const Card = (lists) => {
//     if (!lists) {
//       return null;
//     }
//     console.log(lists, 'lists');

//     return lists.map((list, index) => {
//       const bgCss = 'h-auto rounded-2xl border-solid border-2 py-7 px-6 shadow-md';
//       const bgColors = {
//         blue: `bg-blue ${bgCss}`,
//         beige: `bg-beige ${bgCss} `,
//         green: `bg-green ${bgCss}`,
//         purple: `bg-purple ${bgCss}`,
//       };
//       const bgColor = bgColors[list.backgroundColor];

//       return (
//         <div key={index} className={bgColor}>
//           <div className="flex flex-col gap-5 mb-7">
//             <div className="font-bold text-pretendard font-extrabold text-2xl leading-10 tracking-tight">
//               To. {list.name}
//             </div>
//             <span>그림들어갈자리</span>
//             <div className=" font-normal text-pretendard text-base leading-6 tracking-tight">
//               <span className="font-bold text-pretendard text-base leading-6 tracking-tight">
//                 {list.messageCount}
//               </span>
//               명이 작성했어요
//             </div>
//           </div>
//           <div className="flex items-center  border-t border-slate-400 gap-3 pt-4">
//             <TopReactions topReactions={list.topReactions} />
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="flex flex-col justify-between mx-auto gap-[20px]">
//       <h2 className="mx-[20px] font-bold text-pretendard font-semibold text-2xl leading-9 tracking-tighter">
//         {latestList && latestList.length > 0
//           ? '최근에 만든 롤링 페이퍼 ⭐️'
//           : '인기 롤링 페이퍼 🔥'}
//       </h2>

//       <Styled_Slide {...settings}>
//         {/* <Card lists={popularList} />
//         <Card lists={latestList} />
//         Card(popularList) Card(latestList) */}
//         {popularList && popularList.length > 0 && Card(popularList)}
//         {latestList && latestList.length > 0 && Card(latestList)}
//       </Styled_Slide>
//     </div>
//   );
// };
