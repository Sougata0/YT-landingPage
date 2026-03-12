import LongVideos from "./Longvideos"

const MainPage = ({userData}) => {
    return(
        // (shorts ? <ShortVideos userData={userData}/> : <LongVideos userData={userData}/>)
        // <div>{userData?.videos.map((elem)=>(console.log(elem)))}</div>
        <LongVideos userData={userData?.videos || userData}/>
    )
}

export default MainPage