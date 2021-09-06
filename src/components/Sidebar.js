import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './Data'
import {useGlobalContext} from './Context'


function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return <aside className={`${isSidebarOpen?'sidebar sidebar-show':'sidebar'}`}>
        <div className="sidebar-header">
            <p className="logo">Personal Profile</p>
            <button onClick={closeSidebar} className="close-btn"><FaTimes /></button>
        </div>
        <ul className="links">
            {links.map((link)=>{
                const {id, url, text, icon} = link
                return <li key={id}>
                    <a href={url}>
                        {icon} 
                        {text}
                    </a>
                </li>
            })}
        </ul>
        <ul className="social-icons">
            {social.map((item)=>{
                const {id, url, icon} = item
                return <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            })}
        </ul>
    </aside>
}

export default Sidebar
