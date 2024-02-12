'use client'
import Nav from '@/components/Nav';
import React, { useEffect } from 'react';
import '@/app/style.scss';
import img_back from  '@/public/assets/lg.svg';
import prv_back from '@/public/assets/det_bg.png';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { finishRegistration, nextStep, setUser, setUserInfo } from '@/store/registration/registration.slice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {motion} from 'framer-motion'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = () => {
  const isdone = useAppSelector((state) => state.formReducer.finish);
  const nextstep = useAppSelector((state) => state.formReducer.firstStep);
  const name = useAppSelector((state) => state.formReducer.userInfo.name)
  const NickName = useAppSelector((state) => state.formReducer.userInfo.NickName)
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleFinishRegistration = () => {
    dispatch(finishRegistration(true));
    dispatch(nextStep(false))
    // router.push('/login');
  }

  type TPrivateDetailsSchema = z.infer<typeof PrivateDetailsSchema>
  type TKnownAsSchema = z.infer<typeof KnownAsSchema>

  const PrivateDetailsSchema = z.object({
    email: z.string().email('enter valid email'),
    password: z.string().min(8, 'passwords must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'confirm passwords must be at least 8 characters')
  }).refine((data) => data.confirmPassword == data.password, {
    message : "Passwords doesn't match",
    path : ['confirmPassword']
  })

  const KnownAsSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    NickName: z.string().min(5, 'NickName must be at least 5 characters'),
  })

  const validationSchema = nextstep ? PrivateDetailsSchema : KnownAsSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TPrivateDetailsSchema>({
    resolver : zodResolver(validationSchema),
  })

  const Fsubmit = (data: TPrivateDetailsSchema | TKnownAsSchema) => {
    dispatch(setUserInfo(data))
    dispatch(nextStep(true))
    reset()
  }

  const Psubmit = async (data: TPrivateDetailsSchema | TKnownAsSchema) => {
    if (typeof data === 'object' && 'email' in data) {
      const { email } = data
      try {
        const isExist = await fetch('api/alreadyExist', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });
  
        const { user } = await isExist.json();
  
        if (user) {
          setError('email', {
            type: "manual",
            message: "User with this email already exists"
          })
          return
        }
  
        await fetch('api/registration', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            NickName,
            email: data,
            password: data.password
          })
        });
      } catch (error) {
      }
    } else {
      
    }
    handleFinishRegistration();
  }

  return (
    <div className='w-full min-h-full'>
        <Nav/>
        {nextstep ? 
        <div className="w-full h-[85vh] flex flex-col p-6 items-center">
          <form key={10} onSubmit={handleSubmit(Psubmit)} className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <h2 className='text-2xl md:text-center'>Your private details</h2>
                <Image width={400} height={305} className='sm:w-[90%] mt-6 rounded-xl  w-full h-80 md:hidden' src={prv_back.src} alt="" />
                <motion.input 
                key={2}
                {...register('email')}
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .2}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Email' type="text" />
                 {errors.email && (
                  <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
                    {errors.email.message}
                  </motion.p>
                )}
                <motion.input 
                key={1}
                {...register('password')}
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .5}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='password' type="password" />
                 {errors.password && (
                  <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
                    {errors.password.message}
                  </motion.p>
                )}
                <motion.input 
                key={3}
                {...register('confirmPassword')}
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .7}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Confirm password' type="password" />
                 {errors.confirmPassword && (
                  <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
                    {errors.confirmPassword.message}
                  </motion.p>
                )}
                <motion.button initial={{scale : .9, opacity : 0, y : -5}} animate={{scale : 1, opacity : 1, y : 0}} transition={{duration : 1, delay : .5}}  className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</motion.button>
            </form>
        </div>
        : (
          <div className="w-full h-[85vh] flex flex-col p-6 items-center">
        <form key={11} onSubmit={handleSubmit(Fsubmit)} className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <motion.h2 initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .6}} className='text-2xl md:text-center'>How you want to be known as</motion.h2>
                <Image width={5} height={2} className='sm:w-[90%] mt-6 rounded-xl  w-full h-80 md:hidden' src={img_back.src} alt="" />
                <motion.input 
                {...register('name')}
                key={5}
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .2}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Name' type="text" />
                {errors?.name && (
                  <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
                    {errors.name.message}
                  </motion.p>
                )}
                <motion.input 
                key={6}
                {...register('NickName')} 
                initial={{y : -10, x : -30, opacity : 0}} animate={{y : 0, x : 0, opacity : 1}} transition={{duration : 1, delay : .5}} className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Nick Name' type="text" />
                {errors?.NickName && (
                  <motion.p initial={{opacity : 0, y : -5}} animate={{opacity : 1, y : 0}} transition={{duration : 1, delay : .1}} className={`text-red-500 text-[12px] sm:text-base mt-2`}>
                    {errors.NickName.message}
                  </motion.p>
                )}
                <motion.button  initial={{scale : .9, opacity : 0, y : -5}} animate={{scale : 1, opacity : 1, y : 0}} transition={{duration : 1, delay : .5}}  className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</motion.button>
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