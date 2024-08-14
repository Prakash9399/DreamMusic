import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import songsData from '../assets/songs'; 
import Image from '../assets/Image.png'; 

const Content = () => {
    const [songs, setSongs] = useState(songsData);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(songs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setSongs(items);
    };

    return (
        <div className='w-full mt-8'>
           
            <div className='w-full mt-6 px-6'>
                <img
                    src={Image}
                    alt='Michael Jackson'
                    className='w-full h-44 rounded-xl'
                />
            </div>

          
            <div className='mt-8'>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="songs">
                        {(provided) => (
                            <table className='w-full text-left text-white bg-transparent' ref={provided.innerRef} {...provided.droppableProps}>
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
                                        <Draggable key={song.rank} draggableId={song.rank.toString()} index={index}>
                                            {(provided) => (
                                                <tr
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <td className='p-2'>{index + 1}</td>
                                                    <td className='p-2'>{song.title}</td>
                                                    <td className='p-2'>{song.playings}</td>
                                                    <td className='p-2'>{song.time}</td>
                                                    <td className='p-2'>{song.album}</td>
                                                </tr>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </tbody>
                            </table>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
}

export default Content;
