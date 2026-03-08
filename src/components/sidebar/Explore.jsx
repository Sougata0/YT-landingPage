import { CircleArrowDown, CircleChevronRight, Gamepad2, Music, Podcast, Radio, ShoppingBag, Trophy, Tv } from "lucide-react";
import { useState } from "react";

useState;

const Explore = () => {
  const [open, setOpen] = useState(true);
  const [isExpand, setIsExpand] = useState(false);

  const maxHeight = isExpand ? "max-h-[300px]" : "max-h-[80px]"

  const handleSubscriptionClick = () => {
    if (open) {
      setOpen(false)
      setIsExpand(false);
      return;
    }
    setOpen(true);
  };

  return (
    <div className="cursor-pointer">
      <div
        onClick={handleSubscriptionClick}
        className="flex gap-4 hover:bg-neutral-700 rounded-xl py-1.5 px-3 h-10 font-semibold items-center justify-between pr-18"
      >
        <h2>Explore</h2>
        <div className={`transition-transform ${open ? "rotate-90" : " "}`}>
          <CircleChevronRight className="h-5 w-5"/> 
        </div>
      </div>

      <div
        className={`flex flex-col gap-1 overflow-hidden font-normal transition-all duration-300 ${open ? maxHeight : "max-h-0"}`}
      >
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Podcast strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Podcast</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Music strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Music</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Tv strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Movies</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10">
          <ShoppingBag strokeWidth={1.7} className="h-6 w-6 items-center flex"/>
          <h2 className="flex">Shopping</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Radio strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Live</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Gamepad2 strokeWidth={1.7} className="h-6 w-6 items-center flex" />
          <h2 className="flex">Gaming</h2>
        </div>
        <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 text-[15px]">
          <Trophy strokeWidth={1.7} className="h-6 w-6 items-center flex"/>
          <h2 className="flex">Sports</h2>
        </div>
      </div>
      <button
        onClick={() => {
          setOpen(true)
          setIsExpand(true);
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

export default Explore;
