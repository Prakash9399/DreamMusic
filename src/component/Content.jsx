import React from 'react';
import songs from '../assets/songs'; // Correct the path and spelling
import Image from '../assets/Image.png'; // Import the image as default

const Content = () => {
    return (
        <div className='w-full mt-8'>
            {/* Full Width Image */}
            <div className='w-full  mt-6 px-6 '>
                <img
                    src={Image} // Use the imported image here
                    alt='Michael Jackson'
                    className='w-full h-44 rounded-xl '
                />
            </div>

            {/* Table of Songs */}
            <div className='mt-8'>
                <table className='w-full text-left text-white bg-transparent'>
                    <thead>
                        <tr>
                        <th className='p-2'>#</th>
                            <th className='p-2'>Title</th>
                            <th className='p-2'>Playings</th>
                            <th className='p-2'>Time</th>
                            <th className='p-2'>Album</th>
                        </tr>
                    </thead>
                    <tbody className='bg-transparent'>
                        {songs.map((song, index) => (
                            <tr key={index}>
                                 <td className='p-2'>{song.rank}</td>
                                <td className='p-2'>{song.title}</td>
                                <td className='p-2'>{song.playings}</td>
                                <td className='p-2'>{song.time}</td>
                                <td className='p-2'>{song.album}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content;
