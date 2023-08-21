import React from 'react';

function SearchCard({children}:{children: React.ReactNode}) {

    return (
        <div className='w-full max-w-4xl p-4 md:p-6 bg-gray-800 rounded-lg border border-gray-950 flex-shrink-0 min-h-[50vh] flex items-center'>
            {children}
        </div>
    )
}

export default SearchCard;