import PropTypes from 'prop-types';
import ProfileImage from './ProfileImage';

const MAX_DISPLAY = 3;

const Avatar = ({ profileImages }) => {

  const renderAvatars = () => {
    if (profileImages?.length <= MAX_DISPLAY) {
      return profileImages.map((profile, index) => (
        <ProfileImage key={index} index={index} profileImage={profile}/>
      ));
    } else {
      const overflowCount = profileImages?.length - MAX_DISPLAY;
      return (
        <>
          {profileImages?.slice(0, MAX_DISPLAY).map((profile, index) => (
            <ProfileImage key={index} index={index} profileImage={profile} size={28}/>
          ))}
          <div className={"avatar avatar-more w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs bg-white absolute left-12"}>{`+${overflowCount}`}</div>
        </>
      );
    }
  };
  return <div className="avatar-container flex relative w-20 h-7">{renderAvatars()}</div>;
};

Avatar.propTypes = {
  profileImages: PropTypes.array
}

export default Avatar;
