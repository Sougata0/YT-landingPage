import { useState } from 'react'
import './App.css'
import Content from './components/contents/Contents'
import Nav1 from './components/Navbar/Nav1'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  const [sidebar, setSidebar] = useState(true)

//   const sidebarOpen = () => {
//  if (sidebar) {
//     setSidebar(false)
//     return
//   } setSidebar(true)
  
//   }

  console.log(sidebar);
  // console.log(setSidebar)
  

 
  return (
    <div>
      <Nav1 setSidebar= {setSidebar} sidebar = {sidebar}/>
      <Sidebar sidebar = {sidebar}/>
      <Content sidebar = {sidebar}/>
    </div>
  )
}

export default App
