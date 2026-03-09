import ContentBox from "./ContentBox";
import TopTopics from "./TopTopics";

const Content = ({sidebar}) => {
  return (
    <div className={ ` ${sidebar? "pl-62" : "pl-4"} transition-all duration-100 pt-14 pr-2 w-fit`}>
      <div className="flex gap-3 sticky top-14 z-40 p-3 backdrop-blur-md bg-neutral-950/60">
        <TopTopics />
        <TopTopics />
        <TopTopics />
        <TopTopics />
        <TopTopics />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
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
