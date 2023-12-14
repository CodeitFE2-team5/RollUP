import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EnterContent() {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    },
  };

  return (
    <div className="flex flex-col items-start gap-3 mt-[50px]">
      <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
        내용을 입력해 주세요
      </div>
      <ReactQuill
        theme="snow"
        className="w-full h-[300px] mb-[50px]"
        modules={modules}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default EnterContent;
