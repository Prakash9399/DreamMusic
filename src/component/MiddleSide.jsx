import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Content from './Content';

const MiddleSide = () => {
    return (
        <div className='pl-8 pt-8 flex flex-col'>
            {/* Top Section: Navigation Links and Search Bar */}
            <div className='w-full flex'>
                {/* Navigation Links */}
                <div className='w-1/2 flex items-center justify-evenly text-white'>
                    <span>Music</span>
                    <span>Podcast</span>
                    <span>Live</span>
                    <span>Radio</span>
                </div>

                {/* Search Bar */}
                <div className='w-1/2 flex items-center justify-end'>
                    <div className='flex items-center bg-neutral-600 p-2 rounded-2xl w-full max-w-md'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='bg-transparent text-white ml-2 outline-none w-full pl-2 pr-8'
                        />
                        <FaSearch size={20} color="white" className=' right-2' />
                    </div>
                </div>
            </div>

            {/* Michael Jackson Section */}
            <Content />
        </div>
    );
}

export default MiddleSide;
