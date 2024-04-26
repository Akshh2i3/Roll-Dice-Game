import React, { useEffect, useState } from 'react'


const ShowScore = ({ score, diff }) => {

    const [flag, setFlag] = useState(false)
    useEffect(() => {
        if (score == 0) return;
        setTimeout(() => {
            setFlag(false)
        }, 500);

        setFlag(true)
    }, [score])

    return (
        <div className='flex items-center justify-evenly'>
            <div className='flex flex-col items-center'>
                <p className='text-center px-3 font-semibold text-6xl'>
                    {score}
                </p>
                <p>Total Score</p>
            </div>
            <div className='pb-6 ml-4 text-xl'>
                {flag && <div className='animate-ping'>
                    {(diff != -1) && '+'}
                    {diff}
                </div>}
                {/* <div className='animate-ping'>{diff}</div> */}
            </div>
        </div>
    )
}

export default ShowScore