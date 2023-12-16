import SenderName from './SenderName';
import MessageProfileImage from './MessageProfileImage';
import Relationships from './Relationships';
import EnterContent from './EnterContent';
import FontChange from './FontChange';
import PostButton from './postButton';
import { useState } from 'react';

function PostMessagePage() {
  const [formData, setFormData] = useState({
    sender: '',
    profileImageURL: 'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg',
    relationship: '지인',
    content: '',
    font: 'Noto Sans',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출됨', formData);
  };

  return (
    <div className="mt-14 mb-20 mx-auto max-w-[1080px] flex flex-col">
      <form onSubmit={handleSubmit}>
        <SenderName value={formData.sender} setFormData={setFormData} />
        <MessageProfileImage value={formData.profileImageURL} setFormData={setFormData} />
        <Relationships value={formData.relationship} setFormData={setFormData} />
        <EnterContent value={formData.content} setFormData={setFormData} />
        <FontChange value={formData.font} setFormData={setFormData} />
        <PostButton></PostButton>
      </form>
    </div>
  );
}

export default PostMessagePage;
