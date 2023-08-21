import React from 'react';
import { gitUserInterface } from '../../../context/userContextTypes';

function UserCard({user}:{user: gitUserInterface}) {

    if (!user) {
        return (
            <h2 className='text-2xl text-gray-200'>User not found</h2>
        )
    }

    const {avatar_url, html_url, bio, login} = user;
    return (
        <div className='w-full max-w-4xl p-4 md:p-6 bg-gray-800 rounded-lg border border-gray-950 flex flex-wrap gap-6 justify-center sm:justify-start'>
            <div className=' w-24 h-24 flex-shrink-0 overflow-hidden'>
                <img src={avatar_url} alt="avatar" className=' object-cover w-full h-full' />
            </div>
            <div className=' space-y-4'>
                <h2 className='text-2xl text-gray-200'>{login}</h2>
                <p className='text-base text-gray-300 font-thin font-mono'>{bio}</p>
                <a className='block px-6 py-4 rounded-sm text-base bg-blue-700 border-2 border-blue-500 text-gray-200 hover:bg-blue-600 active:ring-blue-400 transition-all duration-300' href={html_url} target="_blank" rel="noopener noreferrer">
                    Visit profile
                </a>
                
            </div>
        </div>
    )
}

export default UserCard;