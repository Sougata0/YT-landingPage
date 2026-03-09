import Nav1Center from "./Nav1Center"
import Nav1Left from "./Nav1Left"
import Nav1Right from "./Nav1Right"

const Nav1 = ({setSidebar}) => {
    return(
        <div className="px-7 h-14 z-50 flex justify-between items-center fixed top-0 bg-black left-0 w-full">
            <Nav1Left setSidebar= {setSidebar}/>
            <Nav1Center/>
            <Nav1Right/>
        </div>
    )
}

export default Nav1