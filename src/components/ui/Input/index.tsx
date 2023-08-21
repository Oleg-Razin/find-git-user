import React, { forwardRef } from 'react';
import { inputProps } from './types';
import iconPath from '../../../assets/icons/git.svg';

const Input = forwardRef<HTMLInputElement, inputProps>(({type, id, ...props}, ref) => {
    return (
        <label htmlFor={id} className='flex-grow relative rounded-sm bg-gray-100 border-2 border-gray-200 focus-within:ring-blue-200'>
            <img src={iconPath} alt="icon" className='w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2'/>
            <input id={id} {...props} ref={ref} className='py-4 pr-6 pl-12 rounded-tr-sm rounded-br-sm w-full text-base text-gray-900 placeholder:text-base placeholder:text-gray-700 focus:ring-0 bg-gray-100'/>
        </label>
    )
})

export default Input;