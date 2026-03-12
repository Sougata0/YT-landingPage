import ContentBox from "../contents/ContentBox";
// grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
const LongVideos = ({ userData }) => {
  console.log(userData);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {userData?.map((elem, idx) => {
        if (elem.videos) {
          const video = elem.videos[0];
        //   console.log(video);

          return (
            <ContentBox
              key={idx}
              thumb={video.thumbnail}
              title={video.title}
              channelName={userData.channelName}
              profile={elem.profilePhoto}
            />
          );
        }

        return (
          <ContentBox
            key={idx}
            thumb={elem.thumbnail}
            title={elem.title}
            channelName={userData.channelName}
            profile={userData.profilePhoto}
          />
        );
      })}
    </div>
  );
};

export default LongVideos;
