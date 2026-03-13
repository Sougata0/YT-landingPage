import LongVideos from "./Longvideos"

const MainPage = ({userData, activePage}) => {
    return(
        // (shorts ? <ShortVideos userData={userData}/> : <LongVideos userData={userData}/>)
        // <div>{userData?.videos.map((elem)=>(console.log(elem)))}</div>
        // <LongVideos userData={userData?.videos || userData}/>
        <LongVideos userData={userData} activePage={activePage}/>
        
    )
}

export default MainPage