'use client'
import Nav from '@/components/Nav';
import React, { useEffect } from 'react';
import './style.scss';
import img_back from '@/public/assets/lg.svg';
import prv_back from '@/public/assets/det_bg.png';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { finishRegistration, nextStep } from '@/store/registration/registration.slice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = () => {
  const isDone = useAppSelector(state => state.formReducer.finish);
  const iscreated = useAppSelector(state => state.formReducer.createAccount);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    iscreated && router.push('/sign-up')
  },[])
  return (
    <div className='w-full min-h-full'>
      <Nav />
      <div className="w-full h-[85vh] flex flex-col p-6 items-center">
       
      </div>
    </div>
  );
}

export default Page;