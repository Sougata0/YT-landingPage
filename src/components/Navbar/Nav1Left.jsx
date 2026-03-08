import { Menu } from "lucide-react";

const Nav1Left = () => {
  return (
    <div>
      <div className="flex gap-6 items-center">
        <div>
          <Menu size={25} strokeWidth={2} />
        </div>
        <div className="text-2xl font-semibold pr-3 flex">
          <img
            className="size-8"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          />
          <h2 className="transform scale-x-70 scale-y-110 -ml-3">Premium</h2>
        </div>
      </div>
    </div>
  );
};

export default Nav1Left;
