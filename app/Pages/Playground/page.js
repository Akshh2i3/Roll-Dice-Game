'use client'
import React, { useState } from 'react'
import ShowScore from '@/components/ShowScore';
import NumberSelector from '@/components/NumberSelector';
import Button from '@/components/Button';
import Rules from '@/components/Rules';

const Page = () => {
    const [score, setScore] = useState(0)
    const [selected, setSelected] = useState(0)
    const [curr, setCurr] = useState(2)
    const [show, setShow] = useState(false);
    const [diff, setDiff] = useState(-1);

    const randomFace = () => {
        return Math.floor((Math.random() * 6) + 1)
    }

    return (
        <div className='h-screen p-10'>
            <div className='flex justify-between'>
                <ShowScore score={score} diff={diff} />
                <NumberSelector selected={selected} setSelected={setSelected} />
            </div>

            <div className='w-fit mx-auto py-10 flex flex-col items-center gap-3'>
                <img src={`/images/dice_${curr}.png`} alt={curr}
                    onClick={() => {
                        if (!selected) return;

                        let randomm = randomFace()
                        setCurr(randomm);

                        (randomm === selected)
                            ? (() => {
                                setScore(score + randomm)
                                setDiff(randomm)
                            })()
                            : (() => {
                                setScore(score - 1)
                                setDiff(-1)
                            })()
                        // curr and score is not yet updated, they will update in mean time until that save them in another variable and use to compare
                    }
                    } />

                <div className='font-bold text-2xl'>Click On Dice To Roll</div>
                <div onClick={() => {
                    setScore(0)
                    setSelected(0)
                }}>
                    <Button content='Reset Score' />
                </div>

                <div onClick={() => setShow(!show)}>
                    <Button content='Show Rules' theme='dark' />
                </div>
                {show && <Rules />}
            </div>
        </div>
    )
}

export default Page