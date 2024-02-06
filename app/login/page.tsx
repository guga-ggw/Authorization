'use client'
import { useAppDispatch } from '@/store/hooks'
import { finishRegistration } from '@/store/registration/registration.slice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Page = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(finishRegistration(false))
    },[])
  return (
    <div className="w-full h-[85vh] flex flex-col p-6 items-center">
    <div className='w-full flex flex-col md:w-[500px] h-full items-center'>
        <h2 className='text-2xl md:text-center'>Login into app</h2>
        <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='email' type="text" />
        <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='password' type="text" />
        <button className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Log in</button>
        <Link className='text-blue-800 mt-7' href={'/'}> Do not have an account ? </Link>
    </div>
  </div>
  )
}

export default Page