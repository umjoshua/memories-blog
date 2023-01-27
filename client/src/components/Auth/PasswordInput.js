import React from 'react'
import Input from './Input'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordInput = ({ showPassword, setShowPassword, label, name, onChange }) => {
    return (
        <div className='relative'>
            <Input label={label} type={showPassword ? "text" : "password"} name={name} onChange={onChange} />
            {showPassword ? <VisibilityOffIcon
                className='cursor-pointer absolute right-1 top-1'
                onClick={() => setShowPassword(!showPassword)}
            /> : <VisibilityIcon
                className='cursor-pointer absolute right-1 top-1'
                onClick={() => setShowPassword(!showPassword)}
            />}
        </div>
    )
}


export default PasswordInput
