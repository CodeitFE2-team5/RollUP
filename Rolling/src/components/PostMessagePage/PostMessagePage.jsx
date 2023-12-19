import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SenderName from './SenderName';
import MessageProfileImage from './MessageProfileImage';
import Relationships from './Relationships';
import EnterContent from './EnterContent';
import FontChange from './FontChange';
import PostButton from './PostButton';

const PostMessagesAPIData = {
  sender: '',
  profileImageURL: 'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg',
  relationship: '지인',
  content: '',
  font: 'Noto Sans',
};

function PostMessagePage() {
  const [formData, setFormData] = useState(PostMessagesAPIData);
  const { id } = useParams();
  const navigate = useNavigate();
  const isButtonEnabled = formData.sender.trim() !== '' && formData.content.trim() !== '';

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      await axios.post(
        `https://rolling-api.vercel.app/2-5/recipients/${id}/messages/`,
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate(`/post/${id}`);
    } catch (error) {
      throw new Error('데이터를 보내는데 실패했습니다.');
    }
  };

  return (
    <div className="mt-14 mb-20 mx-4 xl:mx-auto max-w-[1080px] flex flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <SenderName value={formData.sender} setFormData={setFormData} />
        <MessageProfileImage value={formData.profileImageURL} setFormData={setFormData} />
        <Relationships value={formData.relationship} setFormData={setFormData} />
        <EnterContent value={formData.content} setFormData={setFormData} />
        <FontChange value={formData.font} setFormData={setFormData} />
        <PostButton isButtonEnabled={isButtonEnabled} onSubmit={handleSubmit}></PostButton>
      </form>
    </div>
  );
}

export default PostMessagePage;
