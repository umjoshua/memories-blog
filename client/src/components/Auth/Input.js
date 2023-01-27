import React from 'react'

const Input = ({ label, type, name, onChange }) => {
    return (
        <div className='p-1'>
            <span>{label}</span>
            <br />
            <input className='border' type={type} name={name} onChange={onChange} />
            <br />
        </div>
    )
}

export default Input
