import React from 'react'

const Rules = () => {
    return (
        <div className='absolute right-24 top-56 w-1/4 p-10 rounded-md bg-slate-200'>
            <p className='font-semibold text-xl pb-6'>How to play dice game</p>
            <ul className='list-inside list-disc'>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>After click on dice if the selected number is equal to dice number you will get same point as dice</li>
                <li>If you get wrong guess then 1 point will be dedcuted</li>
            </ul>
        </div>
    )
}

export default Rules