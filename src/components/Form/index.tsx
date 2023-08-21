import React, {useRef, useContext} from 'react';
import FormWrapper from './FormWrapper';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { UserContext } from '../../context/userContext';
import { userType } from '../../context/userContextTypes';
import { getUser } from '../../utils/getUsers';

const Form = ()=> {
    const inputRef = useRef<HTMLInputElement>(null);
    const {setUser, setLoading, setStatus} = useContext(UserContext) as userType;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current?.value) {
            const username = inputRef.current?.value;
            setLoading(true);
            const userData = await getUser(username);
            setUser(userData?.data);
            setStatus(userData?.status);
            setLoading(false);
            console.log(userData?.status);
        }
    }

    return (
        <FormWrapper handleSubmit={handleSubmit}>
            <Input type='text' id='search' ref={inputRef} />
            <Button type='submit'>Search</Button>
        </FormWrapper>
    )
}

export default Form;