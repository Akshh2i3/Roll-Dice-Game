import React from 'react'

const Button = ({ theme, content }) => {
    return (
        <div>
            <div className={`w-fit px-16 py-3 border-2 border-black font-semibold text-xl rounded-xl cursor-pointer ${theme?.toLowerCase() === 'dark' && ' text-white bg-black '} `}>{content}</div>
        </div>
    )
}

export default Button