import React from "react"
import SearchInput from "./SearchInput"
import ConversationInput from "./ConversationInput"
const Sidebar = () => {
    return (
        <div>
        
            <SearchInput />
                <div className="divider px-3"></div>
            <ConversationInput />
            {/* <LogoutButton /> */}
        </div>
    )
}

export default Sidebar