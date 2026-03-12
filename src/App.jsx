import { useContext, useEffect, useState } from 'react'
import './App.css'
import Content from './components/contents/Contents'
import Nav1 from './components/Navbar/Nav1'
import Sidebar from './components/sidebar/Sidebar'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [creator] = useContext(AuthContext)
  const [userData, setUserData] = useState([])
  const [sidebar, setSidebar] = useState(true)
  // console.log(creator)
  useEffect(()=>{
    setUserData(creator?.creators || [])
  },[creator])
  // const data = creator?.creators;
  // console.log(data);
  // setUserData(data)
  


  return (
    <div>
      <Nav1 setSidebar= {setSidebar}/>
      <Sidebar sidebar = {sidebar} setUserData={setUserData}/>
      <Content sidebar = {sidebar} userData={userData}/>
    </div>
  )
}

export default App