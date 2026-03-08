import { Settings } from "lucide-react";

const Setting = () => {
  return (
    <>
      <div className="flex gap-5 items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 cursor-pointer">
        <Settings strokeWidth={1.7} className="h-6 w-6 items-center flex" />
        <h2 className="flex">Settings</h2>
      </div>
      <hr className="mt-3 mb-3 opacity-30"></hr>
    </>
  );
};

export default Setting;
