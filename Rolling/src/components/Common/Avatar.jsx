const MAX_DISPLAY = 3;

const leftValue = {
  0 : 'left-0',
  1 : 'left-4',
  2 : 'left-8'
}

const Avatar = ({ profiles }) => {

  const renderAvatars = () => {
    if (profiles.length <= MAX_DISPLAY) {
      return profiles.map((profile, index) => (
        <div key={index} className={`avatar avatar-${index} w-7 rounded-full absolute ${leftValue[index]} left`}>
          <img src={profile} alt="프로필" className=" rounded-full border"/>
        </div>
      ));
    } else {
      const overflowCount = profiles.length - MAX_DISPLAY;
      return (
        <>
          {profiles.slice(0, MAX_DISPLAY).map((profile, index) => (
            <div key={index} className={`avatar avatar-${index} w-7 rounded-full absolute ${leftValue[index]}`}>
            <img src={profile} alt="프로필" className=" rounded-full border border-white"/>
            </div>
          ))}
          <div className={"avatar avatar-more w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs bg-white absolute left-12"}>{`+${overflowCount}`}</div>
        </>
      );
    }
  };
  //   if (profiles.length <= MAX_DISPLAY) {
  //     return profiles.map((profile, index) => (
  //       <div key={index} className={`avatar avatar-${index} w-7 rounded-full absolute ${leftValue[index]}`}>
  //         <img src={profile} alt="프로필" className=" rounded-full border"/>
  //       </div>
  //     ));
  //   } else {
  //     const overflowCount = profiles.length - MAX_DISPLAY;
  //     return (
  //       <>
  //         {profiles.slice(0, MAX_DISPLAY).map((profile, index) => (
  //           <div key={index} className={`avatar avatar-${index} w-7 rounded-full absolute ${leftValue[index]}`}>
  //           <img src={profile} alt="프로필" className=" rounded-full border border-white"/>
  //           </div>
  //         ))}
  //         <div className={"avatar avatar-more w-7 rounded-full border border-gray-200 flex items-center justify-center text-xs absolute h-7 left-12 z-40 bg-white"}>{`+${overflowCount}`}</div>
  //       </>
  //     );
  //   }
  // };

  return <div className="avatar-container flex relative w-20">{renderAvatars()}</div>;
};
export default Avatar;
