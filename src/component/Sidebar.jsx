import React from 'react';
import { FaHome, FaChartLine, FaMusic, FaCompass, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
    return (
        <>
        <div className='relative h-screen pl-16 pt-8'>
            <div className='flex flex-row gap-6 items-center'>
                <FaMusic size={50} color="red" />
                <h2 className='text-white text-3xl'>
                    <span className='text-red-600'>Dream</span><span>Music</span>
                </h2>
            </div>
            <div className='mt-16 flex flex-col gap-4 text-white'>
                <span className='text-sm'>Menu</span>
                <div className='flex items-center gap-2'>
                    <FaHome size={20} color="red" />
                    <span>Home</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaChartLine size={20} color="red" />
                    <span>Trends</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaMusic size={20} color="red" />
                    <span>Library</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaCompass size={20} color="red" />
                    <span>Discover</span>
                </div>
                <div className='absolute bottom-0  pb-8 flex flex-col gap-4 text-white'>
                    <div>
                        <span className=' text-sm'>GENERAL</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCog size={20} color="red" />
                        <span>Settings</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaSignOutAlt size={20} color="red" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>


        </div>
            
        </>
    );
}

export default Sidebar;
