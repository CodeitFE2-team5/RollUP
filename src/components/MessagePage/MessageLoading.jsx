import loadingAnimation from '../../assets/loading.gif';

function MessageLoading() {
  return (
    <div className="fixed w-full z-50 left-0 bottom-20">
      <div className="flex justify-center items-center h-full">
        <img src={loadingAnimation} className="w-16" />
      </div>
    </div>
  );
}

export default MessageLoading;
