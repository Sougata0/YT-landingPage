import ContentBox from "../contents/ContentBox"
import LongVideos from "./Longvideos"
import ShortVideos from "./ShortVideos"

const MainPage = ({userData}) => {
    return(
        // (shorts ? <ShortVideos userData={userData}/> : <LongVideos userData={userData}/>)
        <LongVideos userData={userData}/>
    )
}

export default MainPage