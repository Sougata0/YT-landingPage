import { Mic, Search } from "lucide-react"

const Nav1Center = () => {
    return(
        <div className="flex items-center gap-3 ">
            <div className="flex items-center">
                <input className=" rounded-l-full bg-transparent px-3 py-2 border-neutral-700 border" placeholder="Search" />
                <div className="rounded-r-full bg-neutral-800  py-2.25 px-3"><Search /></div>
            </div>
            
            <Mic className="bg-neutral-800 rounded-full h-9 w-9 p-2"/>
        </div>
    )
}

export default Nav1Center