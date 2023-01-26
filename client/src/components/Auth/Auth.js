import React, { useState } from 'react'
import Input from './Input'
import PasswordInput from './PasswordInput';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { authReducer } from '../../redux/auth';
import jwt_decode from 'jwt-decode';

const Auth = () => {
    const dispatch = useDispatch();
    const [signup, isSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const googleSuccess = async (res) => {
        const credential = jwt_decode(res?.credential);
        dispatch(authReducer(credential));
    }
    const googleError = () => {
        console.log('Error')
    }

    return (
        <div className='m-auto p-2 w-max'>
            <div className='bg-white h-max w-max p-3 rounded-md'>

                {
                    signup && <>
                        <Input label="First Name" />
                        <Input label="Last name" />
                    </>
                }

                <Input label="Email Address" />

                <PasswordInput showPassword={showPassword} setShowPassword={setShowPassword} label="Password" />

                {
                    signup &&
                    <PasswordInput showPassword={showPassword} setShowPassword={setShowPassword} label="Repeat Password" />
                }

                <div className='flex flex-col items-center p-2'>
                    <h6>{signup ? "Have an account?" : "Don't have an account?"}</h6>
                    <button className='bg-teal-500 text-white rounded-md w-full p-2'
                        onClick={() => isSignup(!signup)}>{signup ? 'Log In' : 'Create One'}
                    </button>

                </div>
                <div className='p-2'>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleError}
                    />
                </div>
            </div>
        </div>
    )
}

export default Auth