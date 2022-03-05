import React from 'react'

import { MdNotificationsNone } from 'react-icons/md'
import userImage from '../../assets/img/default_user.png'
import realStateLogo from '../../assets/img/my_real_state.PNG'

import { Badge } from 'antd'

export const Navbar = () => {
    return (
        <div className='flex justify-between h-20 border-b-2 py-2'>
            <div className='mx-3 w-40 h-40 mt-4'>
                <img src={realStateLogo} alt='' />
            </div>
            <div className='flex mx-3 py-3 items-center relative'>

                <Badge count={11} offset={[-10, -4]} style={{ backgroundColor: '#701270' }} className='absolute -left-3'>
                    <MdNotificationsNone className='w-5 h-5 mr-3' />
                </Badge>
                <img src={userImage} alt='' className='profile_image' />
            </div>
        </div>
    )
}
