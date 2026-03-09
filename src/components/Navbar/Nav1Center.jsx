import { Mic, Search } from "lucide-react"

const Nav1Center = () => {
    return(
        <div className="flex items-center gap-3 w-full max-w-160">
            <div className="flex items-center w-full">
                <input className=" rounded-l-full bg-transparent px-3  py-2 border-neutral-700 border-r-0 border w-full" placeholder="Search" type="text"/>
                <div className="rounded-r-full bg-neutral-800 border border-neutral-700 py-2 px-5"><Search /></div>
            </div>
            
            <Mic className="bg-neutral-800 rounded-full h-10 min-w-10 p-2"/>
        </div>
    )
}

export default Nav1Center