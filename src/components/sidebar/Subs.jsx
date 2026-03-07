import { useState } from "react";

const Subs = () => {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState('45');

//   ${open ? "max-h-45" : "max-h-0"}

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
        className="flex gap-4 hover:bg-neutral-700 rounded-xl py-1.5 px-3 h-10 font-semibold"
      >
        <h2>Subscription</h2>
        <span className={`transition-transform ${open ? "rotate-90" : " "}`}>  ▶ </span>
      </div>

      {open && (
        <div
          className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${open ? `max-h-${more}` : "max-h-0"}`}
        >
          <div className="flex justify-between items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <h2 className="flex">Harkirat Singh</h2>
            <span className="text-blue-500">!</span>
          </div>
          <div className="flex justify-between items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <h2 className="flex">Harkirat Singh</h2>
            <span className="text-blue-500">!</span>
          </div>
          <div className="flex justify-between items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <h2 className="flex">Harkirat Singh</h2>
            <span className="text-blue-500">!</span>
          </div>
          <div className="flex justify-between items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <h2 className="flex">Harkirat Singh</h2>
            <span className="text-blue-500">!</span>
          </div>
          <div className="flex justify-between items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <h2 className="flex">Harkirat Singh</h2>
            <span className="text-blue-500">!</span>
          </div>
          <div className="flex justify-between items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px]">
            <div className="h-7 w-7 object-cover overflow-hidden bg-white rounded-full">
              <img
                className="size-8"
                src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp"
              />
            </div>
            <h2 className="flex">Harkirat Singh</h2>
            <span className="text-blue-500">!</span>
          </div>
        </div>
      )}
      <button 
      onClick={()=>{
        setMore('100')
      }}
      className="hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-semibold text-[15px] flex items-center w-full gap-7">
        <span>
          <img
            className="h-5 w-5 p-1  bg-white rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/6364/6364586.png"
          />
        </span>
        Show more
      </button>
      <hr className="mt-3 mb-3 opacity-30"></hr>
    </div>
  );
};

export default Subs;
