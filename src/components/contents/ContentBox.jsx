import { EllipsisVertical } from "lucide-react";

const ContentBox = () => {
  return (
    <div className="">
      <div className="p-2 rounded-xl transition-transform duration-300 hover:scale-103">
        <img
          className="object-cover overflow-hidden rounded-xl w-full aspect-video mb-2"
          src="https://i.pinimg.com/736x/2e/dd/5a/2edd5adb88565814d654e1e58289fddc.jpg"
        />
        <div className="flex hover:cursor-pointer">
          <div className='bg-amber-50 overflow-hidden h-7 min-w-7 max-w-7 rounded-full'>
            <img className="h-full w-full" src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp" alt="" />
          </div>
          <div className="pl-2">
            <h3 className="text-[14px] font-medium leading-tight">Video title goes here Lorem ipsum dolor sit amet consectetu</h3>
            <p className="text-[12px] text-neutral-500 font-medium">Channel name</p>
            <p className="text-[12px] text-neutral-500 font-medium">33k views . 17 hours ago</p>
          </div>
          <div><EllipsisVertical/> </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
