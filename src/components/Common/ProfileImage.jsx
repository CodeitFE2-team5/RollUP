import PropTypes from 'prop-types';
import { LEFT_VALUE, SIZE_VALUE } from '../../constants/constants';

const ProfileImage = ({ index='default', profileImage, size }) => {
  return(
    <div key={index} className={`avatar avatar-${index} rounded-full absolute ${LEFT_VALUE[index]} ${SIZE_VALUE[size]}`}>
      <img src={profileImage} alt="프로필" className=" rounded-full border"/>
    </div>
  )
};

ProfileImage.propTypes = {
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  profileImage: PropTypes.string,
  size: PropTypes.number
}

export default ProfileImage;
