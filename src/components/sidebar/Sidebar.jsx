import Explore from "./Explore";
import Manage from "./Manage";
import Subs from "./Subs";
import {Menu, House} from 'lucide-react';
 
const Sidebar = () => {
  return (
    <div className="bg-neutral-950 min-h-screen w-60 px-3 pb-3">
      <div className="flex justify-between items-center p-3 mb-5">
        <div><Menu size={25} strokeWidth={2} /></div>
        <div className="text-2xl font-semibold pr-3 flex">
          <img className="size-8" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"/>
          <h2 className="transform scale-x-70 -ml-3">Premium</h2>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-5 h-10 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 text-[15px] font-semibold">
          <img className="size-8" src="https://cdn-icons-png.flaticon.com/512/7543/7543165.png"/>
          <h1>Home</h1>
        </div>
        <div className="flex gap-5 h-10 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 text-[15px] font-semibold">
          <img className="size-7.5 h-full" src="https://freepngimg.com/icon/download/search/10417-youtube-shorts-white.png"/>
          <h1>Shorts</h1>
        </div>
      </div>
      <hr className="mt-3 mb-3 opacity-30"></hr>
      <div>
        <Subs />
        <Manage />
        <Explore />
      </div>
    </div>
  );
};

export default Sidebar;
