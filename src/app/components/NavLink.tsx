import Link from "next/link"
import { LinkTypes } from "../helpers/types"

export const NavLink = ({path, title}:LinkTypes) => {
  return (    
    <Link 
        href={path} 
        className="block py-2 pl-3 pr-4 text-base sm:text-xl rounded md:p-0 hover:text-white">
            {title}
    </Link>
  )
}