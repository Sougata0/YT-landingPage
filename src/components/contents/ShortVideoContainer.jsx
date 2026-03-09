import { EllipsisVertical } from "lucide-react";

const ShortVideosContainer = () => {
  return (
    <div className="">
      <div className="p-2 rounded-xl">
        <img
          className="object-cover overflow-hidden rounded-xl w-[90%] mb-2"
          src="https://i.pinimg.com/1200x/47/be/28/47be284c67f8a05102f5b9a23bdfaef3.jpg"
        />
        <div className="flex hover:cursor-pointer px-1">
          <div className='bg-amber-50 overflow-hidden h-7 min-w-7 max-w-7 rounded-full'>
            <img className="h-full w-full" src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp" alt="" />
          </div>
          <div className="pl-2">
            <h3 className="text-[14px] font-medium leading-tight">Video title goes here Lorem ipsum dolor sit</h3>
            <p className="text-[12px] text-neutral-500 font-medium">Channel name</p>
            <p className="text-[12px] text-neutral-500 font-medium">33k views . 17 hours ago</p>
          </div>
          <div><EllipsisVertical/> </div>
        </div>
      </div>
    </div>
  );
};

export default ShortVideosContainer;