import ContentBox from "../components/contents/ContentBox"

const Home = ({userData}) => {
    return (
        <div>
            <ContentBox userData={userData}/>
        </div>
    )
}

export default Home