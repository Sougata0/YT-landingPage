import {Bell, Mic, Plus} from 'lucide-react'
const Nav1Right = () => {
    return(
        <div className="flex items-center gap-5">
            
            <div className="bg-neutral-800 border-0 py-1.5 px-3 pr-4 gap-2 items-center rounded-full flex">
                <Plus /> 
                <h2>Create</h2>
            </div>
            <Bell/>
            <div className='bg-white h-8 w-8 rounded-full '></div>
        </div>
    )
}

export default Nav1Right