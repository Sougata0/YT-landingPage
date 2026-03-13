import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Home from "../../pages/Home";
import Explore from "./Explore";
import Footer from "./Footer";
import Manage from "./Manage";
import Setting from "./Setting";
import Subs from "./Subs";
import { Menu, House } from "lucide-react";

const Sidebar = ({ sidebar, setUserData, setActivePage }) => {
  const [creator] = useContext(AuthContext);
  
  return (
    <div
      id="subscription"
      className={`h-screen transition-all duration-100 ${sidebar ? "w-60 px-4" : "w-0 px-0"} bg-black pt-14 overflow-auto fixed pb-5 `}
    >
      <div className="flex flex-col gap-1">
        <div
          onClick={() => {
            // console.log("home clicked");
            const data = creator?.creators;
            setUserData(data)
            setActivePage('home')
            // console.log(data); //array of 10 objects
          }}
          className="flex gap-5 h-10 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 text-[15px] font-semibold"
        >
          <House />
          <h1>Home</h1>
        </div>
        <div
          onClick={() => {
            console.log("shots clicked");
          }}
          className="flex gap-5 h-10 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 text-[15px] font-semibold"
        >
          <img
            className="h-6"
            src="https://freepngimg.com/icon/download/search/10417-youtube-shorts-white.png"
          />
          <h1>Shorts</h1>
        </div>
      </div>
      <hr className="mt-3 mb-3 opacity-30"></hr>
      <div>
        <Subs setUserData={setUserData} setActivePage={setActivePage} />
        <Manage />
        <Explore />
        <Setting />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
