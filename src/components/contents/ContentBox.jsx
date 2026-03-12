import { EllipsisVertical } from "lucide-react";
const ContentBox = ( props ) => {
  // const [useData] = useContext(AuthContext)
  // console.log(userData?.creators);
  // console.log(userData)
  // console.log(props.thumb);
  

  return (
    <div >
      {/* {userData?.videos.map((elem, idx) => ( */}
        <div
          // key={idx}
          className="p-2 rounded-xl hover:bg-neutral-900 transition-transform duration-300 hover:scale-102"
        >
          <img
            className="object-cover overflow-hidden rounded-xl w-full aspect-video mb-2 "
            src={props.thumb}
          />
          <div className="flex hover:cursor-pointer pl-1 pt-1">
            <div className="bg-amber-50 overflow-hidden h-9 min-w-9 max-w-9 rounded-full">
              <img
                className="h-full w-full object-cover"
                src={props.profile}
                alt=""
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="pl-2">
                <h3 className="text-[14px] font-medium leading-tight">
                  {props.title}
                </h3>
                <p className="text-[12px] text-neutral-500 font-medium">
                  {props.channelName}
                </p>
                <p className="text-[12px] text-neutral-500 font-medium">
                  33k views . 17 hours ago
                </p>
              </div>
              <div><EllipsisVertical /></div>
            </div>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default ContentBox;
