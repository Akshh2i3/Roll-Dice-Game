import React from 'react'
import Link from 'next/link'
import Button from '@/components/Button'

const page = () => {
  return (
    <div className='h-screen flex justify-center items-center px-32'>
      <img className='rounded-3xl' src='/images/dices.png' alt='dice img' />

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