import Home from "../../pages/Home"
import ContentBox from "../contents/ContentBox"
// grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
const LongVideos = ({userData}) => {
    return(
        <Home userData={userData}/>
    )
}

export default LongVideos