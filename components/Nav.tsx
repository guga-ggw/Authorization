import Image from 'next/image'
import React from 'react'
import boat from '@/public/assets/boat.png'
import { useAppSelector } from '@/store/hooks'

const Nav = () => {
    const nextstep = useAppSelector(state => state.formReducer.firstStep)

  return (
    <div className='w-full flex h-[15vh] justify-around items-center'>
        <div className='w-full flex h-24 justify-around items-center lg:w-[500px]'>
        <div className="w-9 h-9 rounded-full bg-[#4A3AFF] flex items-center justify-center">
            <h5 className='text-white'>1</h5>
        </div>
        <div className="w-1/4 h-[6px] rounded-lg bg-gray-300">
            <div className={`w-${nextstep ? 'full' : "1/2"} h-full rounded-lg bg-[#4A3AFF] relative`}>
                {nextstep ? <></> : <Image className='absolute right-[-25px] top-[-30px] w-10 h-10 md:hidden' width={52} height={20} src={boat.src} alt='boat'/>}
            </div>
        </div>
        <div className={`w-9 h-9 rounded-full ${nextstep ? "bg-[#4A3AFF] text-white" : "bg-gray-300" } flex items-center justify-center`}>
            <h5>2</h5>
        </div>
        <div className="w-1/4 h-[6px] bg-gray-300 rounded-lg ">
            <div className={`${nextstep ? "w-1/2 bg-[#4A3AFF] rounded-xl h-full relative" : ""}`}>
            {nextstep !== true ? <></> : <Image className='absolute right-[-25px] top-[-30px] w-10 h-10 md:hidden' width={52} height={20} src={boat.src} alt='boat'/>}
            </div>
        </div>
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
            <h5>3</h5>
        </div>
        </div>
    </div>
  )
}

export default Nav