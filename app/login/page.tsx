'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { finishRegistration } from '@/store/registration/registration.slice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const Page = () => {
    const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.formReducer.User)

    type TsignInSchema = z.infer<typeof LoginSchema>

  const LoginSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8, 'password must be at least 8 characters'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignInSchema>({
    resolver : zodResolver(LoginSchema),
  })

  const Fsubmit = (data : TsignInSchema) => {
    console.log(data); 
  }


  return (
    <div className="w-full h-[85vh] flex flex-col p-6 items-center">
    <form onSubmit={handleSubmit(Fsubmit)} className='w-full flex flex-col md:w-[500px] h-full items-center'>
        <motion.h2 initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .6}} className='text-2xl md:text-center'>Login into app</motion.h2>
        <motion.input {...register('email')} initial={{y : -5, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .2}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='email' type="text" />
        {errors.email && (
          <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
            {errors.email.message}
          </motion.p>
        )}
        <motion.input {...register('password')} initial={{y : -5, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .2}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='password' type="password" />
        {errors.password && (
          <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
            {errors.password.message}
          </motion.p>
        )}
        <motion.button initial={{scale : .9, opacity : 0, y : -5}} animate={{scale : 1, opacity : 1, y : 0}} transition={{duration : 1, delay : .5}} className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Log in</motion.button>
        <motion.div initial={{opacity :0}} animate={{opacity : 1}} transition={{delay : .8, duration : 1}} className='mt-7'>
          <Link  className='text-blue-800 mt-7' href={'/'}> Do not have an account ? </Link>
        </motion.div>
        
    </form>
  </div>
  )
}

export default Page