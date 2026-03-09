import ContentBox from "../contents/ContentBox"
import LongVideos from "./Longvideos"
import ShortVideos from "./ShortVideos"

const MainPage = ({shorts}) => {
    return(
        (shorts ? <ShortVideos/> : <LongVideos/>)
    )
}

export default MainPage