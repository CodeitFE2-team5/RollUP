import PropTypes from 'prop-types';

const propTypes = {
  css: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

const Subject = ({ css, subject }) => {
  return <div className={`${css}`}>{subject}</div>;
};
Subject.propTypes = propTypes;
export default Subject;
