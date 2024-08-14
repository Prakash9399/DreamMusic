import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Image from '../assets/Image.png';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const seekTime = (e.target.value / 100) * duration;
        audio.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='w-full bg-red-950 rounded-lg text-white h-[40%] flex flex-col p-2'>
            {/* Song Banner */}
            <div className='w-full mb-2'>
                <img src={Image} alt='Song Banner' className='w-full rounded-lg h-[100px]' />
            </div>

            {/* Song Name */}
            <div className='text-center text-lg font-semibold mb-2'>
                Beat It
            </div>

            {/* Music Player Controls */}
            <div className='flex flex-col items-center'>
                <div className='flex items-center w-full'>
                    {/* Play/Pause Button */}
                    <button onClick={handlePlayPause} className='mr-4 p-2 rounded-full'>
                        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>

                    {/* Timeline */}
                    <input
                        type='range'
                        value={(currentTime / duration) * 100}
                        onChange={handleSeek}
                        className='w-full h-1 rounded-lg'
                    />
                </div>

                {/* Time Display */}
                <div className='w-full flex justify-between mt-2 text-white'>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} src='../assets/song.mp3' preload='metadata' />
        </div>
    );
};

export default Player;
