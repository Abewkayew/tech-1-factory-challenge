import React from 'react'
import { Navbar } from '.'
import { Sidebar } from './sidebar';


export const Home = (props) => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex w-full'>
                <div className='w-1/5'>
                    <Sidebar />
                </div>
                <div className='w-4/5 mr-5 ml-12'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

