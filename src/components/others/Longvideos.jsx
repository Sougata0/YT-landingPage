import ContentBox from "../contents/ContentBox";
// grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
const LongVideos = ({ userData }) => {
  // console.log(userData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {userData?.map((elem, idx) => {

        // console.log(elem);
        // console.log(userData);
        
        
        if (elem.videos) {
          const video = elem.videos[0];
        //   console.log(video);

          return (
            <ContentBox
              key={idx}
              thumb={video.thumbnail}
              title={video.title}
              channelName={elem.channelName}
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
            profile={elem.profilePhoto}
          />
        );
      })}
    </div>
  );
};

export default LongVideos;
