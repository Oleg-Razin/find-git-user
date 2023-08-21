import * as React from 'react';
import { formInterface } from './types';

function FormWrapper({children, handleSubmit}:formInterface) {
    
    return (
        <form onSubmit={handleSubmit} className="flex items-center flex-wrap gap-2 flex-grow">
            {children}
        </form>
    )
}

export default FormWrapper;