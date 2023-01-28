import React, { useState } from 'react'
import Input from './Input'
import PasswordInput from './PasswordInput';
import { useDispatch } from 'react-redux';
import { authReducer } from '../../redux/auth';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signup, isSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [warning, setWarning] = useState(false);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        repeatPassword: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signup) {
            setWarning(false);
            const result = await api.signUp(formData);
            if (result?.status >= 400 && result?.status < 500) {
                setWarning("Couldn't create user!");
                return;
            }
            dispatch(authReducer(result));
            navigate('/');
        } else {
            setWarning(false);
            const result = await api.signIn(formData);
            if (result?.status >= 400 && result?.status < 500) {
                setWarning('Username or password incorrect!');
                return;
            }
            dispatch(authReducer(result));
            navigate('/');
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <div className='m-auto p-2 w-max'>
            <div className='bg-white h-max w-max p-3 rounded-md'>
                <form onSubmit={handleSubmit}>

                    {
                        signup && <>
                            <Input label="First Name" name='fname' onChange={handleChange} />
                            <Input label="Last name" name='lname' onChange={handleChange} />
                        </>
                    }

                    <Input label="Email Address" name='email' onChange={handleChange} type='email' />

                    <PasswordInput
                        showPassword={showPassword}
                        setShowPassword={setShowPassword} label="Password" name='password'
                        onChange={handleChange}
                    />

                    {
                        signup &&
                        <PasswordInput
                            showPassword={showPassword}
                            setShowPassword={setShowPassword} label="Repeat Password" name='repeatPassword'
                            onChange={handleChange}
                        />
                    }

                    <div className='text-red-700'>
                        {warning}
                    </div>
                    <button className='text-white bg-teal-700 p-2 rounded-md w-full my-2' type='submit'>
                        {signup ? 'Sign Up' : 'Sign In'}
                    </button>

                    <div className='flex flex-col items-center p-2'>
                        <p className='italic text-sm'>{signup ? "Have an account?" : "Don't have an account?"}</p>
                        <button className='w-full' onClick={(e) => { e.preventDefault(); isSignup(!signup) }}>
                            {signup ? 'Log In' : 'Create One'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth