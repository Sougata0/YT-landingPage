import { Mic, Search } from "lucide-react"
import { useState } from "react"

const Nav1Center = () => {

    const [search, setSearch] = useState("")
    // console.log(search);
    
    return(
        <div className="flex items-center gap-3 w-full max-w-160">
            <div className="flex items-center w-full">
                <input 
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}                    
                    className=" rounded-l-full bg-transparent px-3  py-2 border-neutral-700 border-r-0 border w-full outline-none text-sm text-neutral-200" placeholder="Search" type="text"/>
                <div className="rounded-r-full bg-neutral-800 border border-neutral-700 py-1.5 cursor-pointer px-5"><Search /></div>
            </div>
            
            <Mic className="bg-neutral-800 rounded-full h-10 min-w-10 p-2 cursor-pointer"/>
        </div>
    )
}

export default Nav1Center