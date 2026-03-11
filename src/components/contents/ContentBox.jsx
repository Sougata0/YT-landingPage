import { EllipsisVertical } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ContentBox = ({ userData }) => {
  // const [useData] = useContext(AuthContext)
  // console.log(userData?.creators);
  // console.log(userData)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {userData?.videos.map((elem, idx) => (
        <div
          key={idx}
          className="p-2 rounded-xl hover:bg-neutral-900 transition-transform duration-300 hover:scale-102"
        >
          <img
            className="object-cover overflow-hidden rounded-xl w-full aspect-video mb-2 "
            src={elem.thumbnail}
          />
          <div className="flex hover:cursor-pointer pl-1 pt-1">
            <div className="bg-amber-50 overflow-hidden h-9 min-w-9 max-w-9 rounded-full">
              <img
                className="h-full w-full object-cover"
                src={userData.profilePhoto}
                alt=""
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="pl-2">
                <h3 className="text-[14px] font-medium leading-tight">
                  {elem.title}
                </h3>
                <p className="text-[12px] text-neutral-500 font-medium">
                  {userData.channelName}
                </p>
                <p className="text-[12px] text-neutral-500 font-medium">
                  33k views . 17 hours ago
                </p>
              </div>
              <div><EllipsisVertical /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentBox;
