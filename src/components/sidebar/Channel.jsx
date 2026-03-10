import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Channel = ({setUserData}) => {
  const [userData] = useContext(AuthContext);
  // console.log(creators?.creators);
  // {creators?.creators.map((elem)=>{
  //     console.log(elem.channelName)
  // })}
  // console.log(setUserData);
  
  return (
    <div>
      {userData?.creators?.map((elem) => (
        <div
          onClick={(e)=>{
            e.preventDefault()
            setUserData(elem)
            
          }}
          key={elem.channelName}
          className="flex items-center hover:bg-neutral-700  rounded-xl py-1.5 px-3 h-10 font-normal text-[15px]"
        >
          <div className="h-6 w-6 min-w-6 object-cover overflow-hidden rounded-full">
            <img src="https://passport-photo-software.com/img/content/4x4-photo-size-before.webp" />
          </div>
          <div className="justify-between flex-1 ml-4 flex">
            <h2 className="truncate">{elem.channelName}</h2>
            <span className="text-blue-500">!</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Channel;
