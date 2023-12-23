import DOMPurify from 'dompurify';

const MessageContent = ({font, content}) => {
  return(
    <p
      className={`text-[#4A4A4A] text-lg leading-7 ${font}`}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    />
  )
};

export default MessageContent;
