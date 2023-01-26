import React from 'react'

const Input = ({ label,type }) => {
    return (
        <div className='p-1'>
            <span>{label}</span>
            <br/>
            <input className='border' type={type}/>
            <br />
        </div>
    )
}

export default Input
