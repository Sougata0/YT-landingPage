import ShortVideosContainer from "../contents/ShortVideoContainer"


const ShortVideos = () => {
    return(
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
                <ShortVideosContainer/>
                <ShortVideosContainer/>
                <ShortVideosContainer/>
                <ShortVideosContainer/>
            </div>
        </div>
    )
}

export default ShortVideos