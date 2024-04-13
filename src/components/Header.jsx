import Link from "next/link"
import Menuitem from "./Menuitem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4 ">
            <Menuitem title="Home" address="/" Icon={AiFillHome} />
            <Menuitem title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
    <div className="flex items-center gap-4 ">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center">
             <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">Reel</span>
             <span className="text-xl hidden sm:inline">Ratings</span>
        </Link>
    </div> 
        
        
        
    </div>
  )
}
