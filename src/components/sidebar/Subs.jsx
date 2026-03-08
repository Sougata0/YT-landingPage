import { CircleArrowDown, CircleChevronRight } from "lucide-react";
import { useState } from "react";

const Subs = () => {
  const [open, setOpen] = useState(true);
  const [more, setMore] = useState('45');

  const handleSubscriptionClick = () => {
    if (open) {
      setMore('45');
    }
    setOpen(!open);
  };

  return (
    <div>
      <div
        onClick={handleSubscriptionClick}
        className="flex hover:bg-neutral-700 rounded-xl py-1.5 px-3 h-10 font-semibold items-center justify-between pr-18 cursor-pointer"
      >
        <h2>Subscription</h2>
        <div className={`transition-transform ${open ? "rotate-90" : " "}`}>
          <CircleChevronRight className="h-5 w-5"/> 
        </div>
      </div>

      {open && (
        <div
          className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${open ? `max-h-${more}` : "max-h-0"} cursor-pointer`}
        >
          <div className="flex items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 min-w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <div className="justify-between flex-1 ml-4 flex">
              <h2 className="truncate">Harkirat Singh</h2>
              <span className="text-blue-500">!</span>
            </div>
          </div>
          <div className="flex items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 min-w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <div className="justify-between flex-1 ml-4 flex">
              <h2 className="truncate">Manu Arora</h2>
              <span className="text-blue-500">!</span>
            </div>
          </div>
          <div className="flex items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 min-w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <div className="justify-between flex-1 ml-4 flex">
              <h2 className="truncate">Manu Arora</h2>
              <span className="text-blue-500">!</span>
            </div>
          </div>
        </div>
      )}
      <button 
      onClick={()=>{
        setMore('100')
      }}
      className="hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-normal text-[15px] flex items-center w-full gap-6 cursor-pointer">
        <span>
          <CircleArrowDown  className="h-5 w-5"/>
        </span>
        Show more
      </button>
      <hr className="mt-3 mb-3 opacity-30"></hr>
    </div>
  );
};

export default Subs;
