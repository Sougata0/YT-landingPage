import { useContext, useState } from 'react'
import './App.css'
import Content from './components/contents/Contents'
import Nav1 from './components/Navbar/Nav1'
import Sidebar from './components/sidebar/Sidebar'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [creator] = useContext(AuthContext)
  const [userData, setUserData] = useState(creator)
  // console.log(userData)
  const [sidebar, setSidebar] = useState(true)
  const [shorts, setShorts] = useState(false)
  return (
    <div>
      <Nav1 setSidebar= {setSidebar}/>
      <Sidebar sidebar = {sidebar} setShorts = {setShorts} setUserData={setUserData}/>
      <Content sidebar = {sidebar} shorts = {shorts} userData={userData}/>
    </div>
  )
}

export default App
