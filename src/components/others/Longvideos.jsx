import ContentBox from "../contents/ContentBox"

const LongVideos = () => {
    return(
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
            </div>
        </div>
    )
}

export default LongVideos