import React, { useState } from 'react'
import Input from './Input'
import PasswordInput from './PasswordInput';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { authReducer } from '../../redux/auth';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signup, isSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const googleSuccess = async (res) => {
        const credential = res?.credential;
        dispatch(authReducer(credential));
        navigate('/');
    }
    const googleError = () => {
        console.log('Error')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await api.signUp(formData);
        console.log(result);
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

                    <button className='text-white bg-teal-700 p-2 rounded-md w-full my-2' type='submit'>
                        {signup ? 'Sign Up' : 'Sign In'}
                    </button>

                    <div className='flex flex-col items-center p-2'>
                        <p className='italic text-sm'>{signup ? "Have an account?" : "Don't have an account?"}</p>
                        <button className='w-full' onClick={() => isSignup(!signup)}>
                            {signup ? 'Log In' : 'Create One'}
                        </button>

                    </div>
                    <div className='p-2'>
                        <GoogleLogin
                            onSuccess={googleSuccess}
                            onError={googleError}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth