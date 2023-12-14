import SenderName from './SenderName';
import MessageProfileImage from './MessageProfileImage';
import Relationships from './Relationships';
import EnterContent from './EnterContent';
import FontChange from './FontChange';
import PostButton from './postButton';

function PostMessagePage() {
  return (
    <div className="mt-14 mb-20 mx-auto max-w-[1080px] flex flex-col">
      <form>
        <SenderName></SenderName>
        <MessageProfileImage></MessageProfileImage>
        <Relationships></Relationships>
        <EnterContent></EnterContent>
        <FontChange></FontChange>
        <PostButton></PostButton>
      </form>
    </div>
  );
}

export default PostMessagePage;
