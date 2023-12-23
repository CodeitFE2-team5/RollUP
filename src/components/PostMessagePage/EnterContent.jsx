import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import Subject from '../Common/Subject';

const propTypes = {
  setFormData: PropTypes.func,
};

function EnterContent({ setFormData }) {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    },
  };

  const handleChange = (content) => {
    setValue(content);
    setFormData((prevData) => ({
      ...prevData,
      content: content,
    }));
  };

  return (
    <div className="flex flex-col items-start gap-3">
      <Subject>내용을 입력해주세요</Subject>
      <ReactQuill
        theme="snow"
        className="w-full h-[300px] mb-[50px] "
        modules={modules}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

EnterContent.propTypes = propTypes;

export default EnterContent;
