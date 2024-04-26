import React from 'react'
import Link from 'next/link'
import Button from '@/components/Button'

const page = () => {
  return (
    <div className='h-screen flex justify-center items-center px-32'>
      <img className='rounded-3xl' src='https://media.istockphoto.com/id/481511661/vector/dice-on-white-background.jpg?s=612x612&w=0&k=20&c=5nUCyd_fUCBB3i1KGHqhHZ_g_ly3KpmNGz4UUpaAx_Q=' alt='dice img' />

      <div className='w-1/2 flex flex-col items-end'>
        <p className='font-bold text-8xl uppercase mb-5'>dice game</p>
        <Link href='/Pages/Playground'>
          <Button theme='Dark' content='Play Now'></Button>
        </Link>
      </div>

    </div>
  )
}

export default page