import Nav1Center from "./Nav1Center"
import Nav1Left from "./Nav1Left"
import Nav1Right from "./Nav1Right"

const Nav1 = () => {
    return(
        <div className="px-7 py-2 flex justify-between items-center bg-neutral-950">
            <Nav1Left/>
            <Nav1Center/>
            <Nav1Right/>
        </div>
    )
}

export default Nav1