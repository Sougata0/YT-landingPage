import Explore from "./Explore";
import Footer from "./Footer";
import Manage from "./Manage";
import Setting from "./Setting";
import Subs from "./Subs";
import {Menu, House} from 'lucide-react';
 
const Sidebar = () => {
  return (
    <div className="bg-neutral-950 h-screen w-60 px-4">
      <div className="flex flex-col gap-1">
        <div className="flex gap-5 h-10 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 text-[15px] font-semibold">
          <House/>
          <h1>Home</h1>
        </div>
        <div className="flex gap-5 h-10 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 text-[15px] font-semibold">
          <img className="h-6" src="https://freepngimg.com/icon/download/search/10417-youtube-shorts-white.png"/>
          <h1>Shorts</h1>
        </div>
      </div>
      <hr className="mt-3 mb-3 opacity-30"></hr>
      <div>
        <Subs />
        <Manage />
        <Explore />
        <Setting/>
        <Footer/>
      </div>
    </div>
  );
};

export default Sidebar;
