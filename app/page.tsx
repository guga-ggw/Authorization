'use client'
import Nav from '@/components/Nav';
import React from 'react';
import './style.scss';
import img_back from  '@/public/assets/lg.svg';
import prv_back from '@/public/assets/det_bg.png';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { finishRegistration, nextStep } from '@/store/registration/registration.slice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
  const isdone = useAppSelector((state) => state.formReducer.finish);
  const nextstep = useAppSelector((state) => state.formReducer.firstStep);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleFinishRegistration = () => {
    dispatch(finishRegistration(true));
    dispatch(nextStep(false))
    router.push('/login');
  };
  console.log(nextstep)
  return (
    <div className='w-full min-h-full'>
        <Nav/>
        {nextstep ? 
        <div className="w-full h-[85vh] flex flex-col p-6 items-center">
          <div className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <h2 className='text-2xl md:text-center'>Your private details</h2>
                <Image width={400} height={305} className='sm:w-[90%] mt-6 rounded-xl  w-full h-80 md:hidden' src={prv_back.src} alt="" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Email' type="text" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='passwprd' type="password" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Confirm passwprd' type="password" />
                <button onClick={handleFinishRegistration} className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</button>
            </div>
        </div>
        : (
          <div className="w-full h-[85vh] flex flex-col p-6 items-center">
            <div className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <h2 className='text-2xl md:text-center'>How you want to be known as</h2>
                <Image width={5} height={2} className='sm:w-[90%] mt-6 rounded-xl  w-full h-80 md:hidden' src={img_back.src} alt="" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Name' type="text" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Nick Name' type="text" />
                <button onClick={() => dispatch(nextStep(true))} className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</button>
                <Link className='text-blue-800 mt-7' href={'/login'}> Already have an account ? </Link>
            </div>
          </div>
        )}
        
    </div>
  )
}

export default Page