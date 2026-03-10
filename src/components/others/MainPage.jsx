import ContentBox from "../contents/ContentBox"
import LongVideos from "./Longvideos"
import ShortVideos from "./ShortVideos"

const MainPage = ({shorts , userData}) => {
    return(
        (shorts ? <ShortVideos/> : <LongVideos userData={userData}/>)
    )
}

export default MainPage