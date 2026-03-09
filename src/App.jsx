import { useState } from 'react'
import './App.css'
import Content from './components/contents/Contents'
import Nav1 from './components/Navbar/Nav1'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  const [sidebar, setSidebar] = useState(true)

  const [shorts, setShorts] = useState(false)
  return (
    <div>
      <Nav1 setSidebar= {setSidebar}/>
      <Sidebar sidebar = {sidebar} setShorts = {setShorts}/>
      <Content sidebar = {sidebar} shorts = {shorts}/>
    </div>
  )
}

export default App
