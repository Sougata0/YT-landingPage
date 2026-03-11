import MainPage from "../others/MainPage";
import ContentBox from "./ContentBox";
import TopTopics from "./TopTopics";

const Content = ({sidebar, userData}) => {

  return (
    <div className={` ${sidebar? "pl-62" : "pl-4"} transition-all duration-100 pt-14 pr-2 w-fit`}>
      <div className="flex gap-3 sticky top-14 z-40 p-3 backdrop-blur-md bg-black/60">
        <TopTopics />
      </div>
      <MainPage userData={userData}/>
    </div>
  );
};

export default Content;
