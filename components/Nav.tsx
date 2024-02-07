import Image from 'next/image'
import React from 'react'
import boat from '@/public/assets/boat.png'
import { useAppSelector } from '@/store/hooks'
import { motion } from 'framer-motion'

const Nav = () => {
    const nextstep = useAppSelector(state => state.formReducer.firstStep)
    return (
        <div className='w-full flex h-[15vh] justify-around items-center'>
            <div className='w-full flex h-24 justify-around items-center lg:w-[500px]'>
                <motion.div 
                    initial={{ y: -20, opacity: 0 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.1 }} 
                    className="w-9 duration-100 h-9 rounded-full bg-[#4A3AFF] flex items-center justify-center"
                >
                    <h5 className='text-white'>1</h5>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.2, duration: 1 }} 
                    className="w-1/4 h-[6px] rounded-lg bg-gray-300"
                >
                    <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: nextstep ? '100%' : '50%' }} 
                        transition={{ ease: 'easeIn', duration: 1, delay: 0.2 }}  
                        className={`w-${nextstep ? '500px' : '20px'} h-full rounded-lg bg-[#4A3AFF] relative`}
                    >
                        {!nextstep && <Image className='absolute right-[-25px] top-[-30px] w-10 h-10 md:hidden' width={52} height={20} src={boat.src} alt='boat'/>}
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ y: -20, opacity: 0 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.2 }} 
                    className={`w-9 h-9 rounded-full ${nextstep ? 'bg-[#4A3AFF] text-white duration-100' : 'bg-gray-300 transition-all duration-100'} flex items-center justify-center`}
                >
                    <motion.h5>2</motion.h5>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.4, duration: 1 }} 
                    className="w-1/4 h-[6px] bg-gray-300 rounded-lg "
                >
                    {nextstep && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '50%' }}
                            transition={{ ease: 'easeIn', duration: 1, delay: 0.5 }}
                            className="w-1/2 bg-[#4A3AFF] rounded-xl h-full relative"
                        >
                            <Image className='absolute right-[-25px] top-[-30px] w-10 h-10 md:hidden' width={52} height={20} src={boat.src} alt='boat'/>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div 
                    initial={{ y: -20, opacity: 0 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.4 }} 
                    className="w-9 h-9 duration-100 rounded-full bg-gray-300 flex items-center justify-center"
                >
                    <motion.h5>3</motion.h5>
                </motion.div>
            </div>
        </div>
    )
}

export default Nav