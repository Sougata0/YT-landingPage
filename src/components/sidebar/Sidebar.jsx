import { useState } from "react";
import Explore from "./Explore";
import Footer from "./Footer";
import Manage from "./Manage";
import Setting from "./Setting";
import Subs from "./Subs";
import {Menu, House} from 'lucide-react';

//sm md lg xl
//  screens: {
//       xs: '480px',   // custom extra small
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',
//       '2xl': '1536px',
//     },


const Sidebar = ({sidebar}) => {
  console.log(sidebar);
  return (
    <div id="subscription" className= {`h-screen  transition-all duration-100 ${sidebar ? "w-60 px-4" : "w-0 px-0"}  pt-14 overflow-auto fixed pb-5 `}>
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
