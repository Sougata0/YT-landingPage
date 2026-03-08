import { Copyright } from "lucide-react"

const Footer =()=> {
    return(
        <div className="text-[13px] px-3 flex flex-col gap-3 pb-5 cursor-pointer">
            <div className="flex gap-x-2 flex-wrap text-neutral-400 font-medium ">
                <a className="hover:text-neutral-200">About</a>
                <a className="hover:text-neutral-200">Press</a>
                <a className="hover:text-neutral-200">Copyright</a>
                <a className="hover:text-neutral-200">Contact us</a>
                <a className="hover:text-neutral-200">Creators</a>
                <a className="hover:text-neutral-200">Advertise</a>
                <a className="hover:text-neutral-200">Developers</a>
            </div>
            <div className="flex gap-x-2 flex-wrap text-neutral-400 font-medium">
                <a className="hover:text-neutral-200">Terms</a>
                <a className="hover:text-neutral-200">Privacy Policy & Sefety</a>
                <a className="hover:text-neutral-200">How YouTube works</a>
                <a className="hover:text-neutral-200">Tets new features</a>
            </div>
            <div className="flex items-center gap-1 text-neutral-600">
                <Copyright className="h-3 w-3"/>
                2026 Google LLC
            </div>
        </div>
    )
}

export default Footer