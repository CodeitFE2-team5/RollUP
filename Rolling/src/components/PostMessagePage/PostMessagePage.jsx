import SenderName from './SenderName';

function PostMessagePage() {
  return (
    <div className="mt-14 mb-14 mx-auto md:w-[1080px] flex flex-col gap-20">
      <form className="">
        <SenderName />
      </form>
    </div>
  );
}

export default PostMessagePage;
