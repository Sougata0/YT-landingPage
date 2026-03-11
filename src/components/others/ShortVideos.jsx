import ShortVideosContainer from "../contents/ShortVideoContainer"


const ShortVideos = ({userData}) => {
    return(
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
                <ShortVideosContainer userData={userData}/>
            </div>
        </div>
    )
}

export default ShortVideos