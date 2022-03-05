import React from 'react'

import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineUsergroupAdd,
    AiOutlineBook,
    AiOutlineQuestionCircle,
    AiOutlineNotification,
    AiOutlineSetting,
    AiOutlineLogout
} from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'

import { NavLink } from 'react-router-dom'

export const SidebarItems = () => {


    const sidebarList = [
        {
            id: 1,
            name: "Dashboard",
            link: '/dashboard',
            icon: <AiOutlineHome />
        },
        {
            id: 2,
            name: "Users",
            link: '/users',
            icon: <AiOutlineUser />
        },
        {
            id: 3,
            name: "Team",
            link: '/team',
            icon: <FiUsers />
        },
        {
            id: 4,
            name: "Membership",
            link: '/membership',
            icon: <AiOutlineUsergroupAdd />
        },
        {
            id: 5,
            name: "Library",
            link: '/library',
            icon: <AiOutlineBook />
        },
        {
            id: 6,
            name: "Quizes",
            link: '/quizes',
            icon: <AiOutlineQuestionCircle />
        },
        {
            id: 7,
            name: "Notifications",
            link: '/notifications',
            icon: <AiOutlineNotification />
        }
    ]



    const bottomItems = [
        {
            id: 1,
            name: "Settings",
            link: '/settings',
            icon: <AiOutlineSetting />
        },
        {
            id: 2,
            name: "logout",
            link: '/logout',
            icon: <AiOutlineLogout />
        }
    ]


    return (
        <div className='relative border-r-2 border-t-2 h-screen flex flex-col'>
            <ul className='ml-4 mr-1'>
                {
                    sidebarList.map((sidebar, index) => {
                        return (
                            <NavLink to={sidebar.link} key={sidebar.id}
                                className="sidebarItem relative py-10" activeClassName="active">
                                <span className="w-4 h-4 mr-5 mt-1 items-center">
                                    {sidebar.icon}
                                </span>
                                <span className="z-20">{sidebar.name}</span>
                            </NavLink>
                        )
                    })
                }
            </ul>

            {/* bottom items  */}

            <ul className='ml-4 absolute bottom-20 right-0 w-full'>
                {
                    bottomItems.map((sidebar, index) => {
                        return (
                            <NavLink to={sidebar.link} key={sidebar.id}
                                className="sidebarItem relative py-10" activeClassName="active">
                                <span className="w-4 h-4 mr-5 mt-1 items-center">
                                    {sidebar.icon}
                                </span>
                                <span className="z-20">{sidebar.name}</span>
                            </NavLink>
                        )
                    })
                }
            </ul>

        </div>
    )
}

