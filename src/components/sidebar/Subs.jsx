import { CircleArrowDown, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import Channel from "./Channel";

const Subs = ({setUserData}) => {
  const [open, setOpen] = useState(true);
  const [isExpended, setIsExpended] = useState(false);
  const maxHeight = isExpended ? "max-h-65" : "max-h-20";

  // console.log(open);
  // console.log(maxHeight);

  const handleSubscriptionClick = () => {
    if (open) {
      setOpen(false);
      setIsExpended(false);
      return;
    }
    setOpen(true);
  };

  return (
    <div>
      <div
        onClick={handleSubscriptionClick}
        className="flex hover:bg-neutral-700 rounded-xl py-1.5 px-3 h-10 font-semibold items-center justify-between pr-18 cursor-pointer"
      >
        <h2>Subscription</h2>
        <div className={`transition-transform ${open ? "rotate-90" : " "}`}>
          <CircleChevronRight className="h-5 w-5" />
        </div>
      </div>

      <div
        id="subscription"
        className={`flex flex-col gap-1 transition-all duration-300 ${open ? maxHeight : "max-h-0"} cursor-pointer overflow-auto`}
      >
        <Channel setUserData={setUserData}/>
      </div>
      <button
        onClick={() => {
          setOpen(true);
          setIsExpended(true);
        }}
        className="hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-normal text-[15px] flex items-center w-full gap-6 cursor-pointer"
      >
        <span>
          <CircleArrowDown className="h-5 w-5" />
        </span>
        Show more
      </button>
      <hr className="mt-3 mb-3 opacity-30"></hr>
    </div>
  );
};

export default Subs;
