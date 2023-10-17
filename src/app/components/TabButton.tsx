import { TabButtonTypes } from "../helpers/types"

export const TabButton = ({active, selectTab, children}:TabButtonTypes) => {
    const buttonClases = active ? "text-white border-b border-blue-500" : "text-base";
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClases}`}>
            {children}                
            </p>
        </button>
    )
}
