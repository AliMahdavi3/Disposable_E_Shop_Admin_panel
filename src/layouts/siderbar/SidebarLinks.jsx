import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa'

const SidebarLinks = ({ icon, title, active, path }) => {
    return (
        <div className='hover:bg-teal-500 text-mgreen hover:text-white'>

            <NavLink to={path}
                className={({ isActive }) =>
                    isActive
                        ? `bg-mgreen text-white ${!active ? 'px-6' : 'px-3'} py-2 cursor-pointer flex items-center justify-between`
                        : `${!active ? 'px-6' : 'px-3'} py-2 cursor-pointer flex items-center justify-between`}>
                    
                    <div className='flex items-center text-2xl'>
                        {icon}
                        <span className={`ms-3 mt-1 text-sm ${active ? 'hidden' : 'block'}`}>{title}</span>
                    </div>
                    <div className={`flex items-center ${active ? 'hidden' : 'inline'}`}>
                        <FaAngleLeft className='text-xl' />
                    </div>
                    
            </NavLink>
        </div>
    )
}

export default SidebarLinks
