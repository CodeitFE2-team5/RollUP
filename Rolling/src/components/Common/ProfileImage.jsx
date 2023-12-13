import PropTypes from 'prop-types';

const leftValue = {
  0 : 'left-0',
  1 : 'left-4',
  2 : 'left-8'
}

const ProfileImage = ({ index, profileImage }) => {
  return(
    <div key={index} className={`avatar avatar-${index} w-7 rounded-full absolute ${leftValue[index]} left`}>
      <img src={profileImage} alt="프로필" className=" rounded-full border"/>
    </div>
  )
};

ProfileImage.propTypes = {
  index: PropTypes.number,
  profileImage: PropTypes.string
}

export default ProfileImage;
