import img01 from '../../assets/landing-img01.svg';
import img02 from '../../assets/landing-img02.svg';

function Article() {
  return (
    <>
      <div className="mt-[56px] mb-[56px]">
        <div className="flex justify-between gap-[30px] mx-auto mb-[30px] py-[60px] pl-[60px] w-[1070px] h-[324px] rounded-[16px] bg-Surface">
          <div className="flex-col justify-start items-start gap-4 inline-flex ">
            <div className="px-3 py-1.5 bg-purple-600 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-bold font-['Pretendard'] leading-tight">
                Point. 01
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </div>
              <div className="text-neutral-600 text-lg font-normal font-['Pretendard'] leading-7">
                로그인 없이 자유롭게 만들어요.
              </div>
            </div>
          </div>
          <img src={img01} />
        </div>
        <div className="flex items-center py-[60px] mx-auto w-[1070px] h-[324px] rounded-[16px] bg-Surface">
          <img src={img02} />
          <div className="left-[720px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="px-3 py-1.5 bg-purple-600 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-bold font-['Pretendard'] leading-tight">
                Point. 02
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </div>
              <div className="text-neutral-600 text-lg font-normal font-['Pretendard'] leading-7">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
