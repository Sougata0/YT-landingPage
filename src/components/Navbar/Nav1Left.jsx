import { Menu } from "lucide-react";

const Nav1Left = ({sidebar, setSidebar}) => {

  // console.log(setSidebar);
  
  console.log(sidebar);
  return (
    <div>
      <div className="flex gap-6 items-center">
        <div>
          <Menu size={25} strokeWidth={2} onClick={()=>{setSidebar(prev => !prev)}}/>
        </div>
        <div className="text-2xl font-semibold pr-3 flex mr-2">
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
