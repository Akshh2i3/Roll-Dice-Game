import React, { useState } from 'react'

const Box = ({ num, isSelected, setSelected }) => {
    return (
        <div
            className={`h-14 w-14 border-2 text-xl border-black flex justify-center items-center cursor-pointer rounded-md ${isSelected && ' bg-black text-white '}`}
            onClick={() => setSelected(num)}>
            {num}
        </div >
    )
}

const NumberSelector = ({ selected, setSelected }) => {
    let numsArr = [1, 2, 3, 4, 5, 6]


    return (
        <div className='pr-10'>
            <div className='flex gap-4'>
                {numsArr.map((num) =>
                    <Box
                        key={num}
                        num={num}
                        isSelected={num === selected}
                        setSelected={setSelected}
                    />
                )}
            </div>
            <p className='pt-5 text-right text-xl font-semibold'>
                {!selected
                    ? <span className='text-red-500'>No Number Selected Yet</span>
                    : 'Select Number'
                }
            </p>
        </div>
    )
}

export default NumberSelector