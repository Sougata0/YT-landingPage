import { useState } from "react";
import { CircleArrowDown, CircleChevronRight, Clock, Download, History, ListVideo, ThumbsUp, TvMinimalPlay } from "lucide-react";

const Manage = () => {
  const [open, setOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const maxHeightClass = isExpanded ? "max-h-[260px]" : "max-h-[80px]";

  const handleSubscriptionClick = () => {
    if (open) {
      setOpen(false);
      setIsExpanded(false);
      return;
    }

    setOpen(true);
  };

  return (
    <div className="cursor-pointer">
      <div
        onClick={handleSubscriptionClick}
        className="flex gap-2 hover:bg-neutral-700 rounded-xl py-1.5 px-3 h-10 font-semibold items-center pr-18"
      >
        <h2>You</h2>
        <div className={`transition-transform ${open ? "rotate-90" : " "}`}>
          <CircleChevronRight className="h-5 w-5"/> 
        </div>
      </div>

      <div
        className={`flex flex-col gap-1 overflow-hidden font-normal transition-all duration-300 ${open ? maxHeightClass : "max-h-0"}`}
      >
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <History strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">History</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <ListVideo strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Playlists</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Clock strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Watch later</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <ThumbsUp strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Liked videos</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <TvMinimalPlay strokeWidth={1.7}  className="h-6 w-6 items-center flex" />
          <h2 className="flex">Your videos</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Download strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Downloads</h2>
        </div>
      </div>
      <button
        onClick={() => {
          setOpen(true);
          setIsExpanded(true);
        }}
        className="hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-normal text-[15px] flex items-center w-full gap-6 cursor-pointer"
      >
        <span>
          <CircleArrowDown  className="h-5 w-5"/>
        </span>
        Show more
      </button>
      <hr className="mt-3 mb-3 opacity-30"></hr>
    </div>
  );
};

export default Manage;
