import { NavLink } from "./NavLink"
import { LinkTypes } from "../helpers/types"

export const MenuOverlay = ({links}:{links:LinkTypes[]}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
        {
            links.map((link, index)=>(
                <li key={index}>
                    <NavLink path={link.path} title={link.title}/>
                </li>
            ))
        }
    </ul>
  )
}