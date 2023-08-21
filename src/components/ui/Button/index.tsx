import React from 'react';

function Button({children, classes, ...props}:{children?: React.ReactNode | string, classes?: string, [x:string]:any}){
    return (
        <button {...props} className={`px-6 py-4 rounded-sm text-base bg-blue-700 border-2 border-blue-500 text-gray-200 hover:bg-blue-600 active:ring-blue-400 transition-all duration-300 ${classes}`}>
            {children}
        </button>
    )
}

export default Button;