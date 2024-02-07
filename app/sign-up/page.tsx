'use client'
import Nav from '@/components/Nav';
import React, { useEffect } from 'react';
import '@/app/style.scss';
import img_back from  '@/public/assets/lg.svg';
import prv_back from '@/public/assets/det_bg.png';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { finishRegistration, nextStep } from '@/store/registration/registration.slice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {motion} from 'framer-motion'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = () => {
  const isdone = useAppSelector((state) => state.formReducer.finish);
  const nextstep = useAppSelector((state) => state.formReducer.firstStep);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleFinishRegistration = () => {
    dispatch(finishRegistration(true));
    dispatch(nextStep(false))
    router.push('/login');
  }

  type TsignUpSchema = z.infer<typeof KnownAsSchema>

  const KnownAsSchema = z.object({
    name : z.string(),
    NickName : z.string().min(5, 'NickName must be at least 5 characters'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignUpSchema>({
    resolver : zodResolver(KnownAsSchema),
  })

  const Fsubmit = () => {

  }

  return (
    <div className='w-full min-h-full'>
        <Nav/>
        {nextstep ? 
        <div className="w-full h-[85vh] flex flex-col p-6 items-center">
          <div className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <h2 className='text-2xl md:text-center'>Your private details</h2>
                <Image width={400} height={305} className='sm:w-[90%] mt-6 rounded-xl  w-full h-80 md:hidden' src={prv_back.src} alt="" />
                <motion.input initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .2}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Email' type="text" />
                <motion.input 
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .5}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='passwprd' type="password" />
                <motion.input 
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .7}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Confirm passwprd' type="password" />
                <motion.button initial={{scale : .9, opacity : 0, y : -5}} animate={{scale : 1, opacity : 1, y : 0}} transition={{duration : 1, delay : .5}} onClick={handleFinishRegistration} className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</motion.button>
            </div>
        </div>
        : (
          <div className="w-full h-[85vh] flex flex-col p-6 items-center">
            <form onSubmit={handleSubmit(Fsubmit)} className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <motion.h2 initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .6}} className='text-2xl md:text-center'>How you want to be known as</motion.h2>
                <Image width={5} height={2} className='sm:w-[90%] mt-6 rounded-xl  w-full h-80 md:hidden' src={img_back.src} alt="" />
                <motion.input 
                {...register('name')}
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .2}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Name' type="text" />
                {errors.name && (
                  <p className={`text-red-500 text-[12px] sm:text-base`}>
                    {errors.name.message}
                  </p>
                )}
                <motion.input {...register('NickName')} initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .5}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Nick Name' type="text" />
                {errors.NickName && (
                  <p className={`text-red-500 text-[12px] sm:text-base`}>
                    {errors.NickName.message}
                  </p>
                )}
                <motion.button onClick={() => {
                  dispatch(nextStep(true))
                  }} initial={{scale : .9, opacity : 0, y : -5}} animate={{scale : 1, opacity : 1, y : 0}} transition={{duration : 1, delay : .5}}  className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</motion.button>
                <motion.div initial={{opacity :0}} animate={{opacity : 1}} transition={{delay : .8, duration : 1}} className='text-blue-800 mt-7'>
                  <Link href='/login'>
                    Already have an account?
                  </Link>
                </motion.div>
            </form>
          </div>
        )}
        
    </div>
  )
}

export default Page