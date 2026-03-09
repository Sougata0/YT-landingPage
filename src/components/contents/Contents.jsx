import ContentBox from "./ContentBox";
import TopTopics from "./TopTopics";

const Content = () => {
  return (
    <div className="pl-65 pt-2 pr-5">
      <div className="flex gap-3 pb-5">
        <TopTopics />
        <TopTopics />
        <TopTopics />
        <TopTopics />
        <TopTopics />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </div>
    </div>
  );
};

export default Content;
