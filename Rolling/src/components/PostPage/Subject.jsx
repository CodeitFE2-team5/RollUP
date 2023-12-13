import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const Subject = ({ children }) => {
  return (
    <div className="font-Pretendard font-bold text-2xl leading-9 tracking-wide">{children}</div>
  );
};
Subject.propTypes = propTypes;
export default Subject;
