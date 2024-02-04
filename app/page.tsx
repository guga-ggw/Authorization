import Nav from '@/components/Nav'
import React from 'react'
import './style.scss'
import img_back from  '@/public/assets/lg.svg'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

const page = () => {
  return (
    <Provider store={store}> 
    <div className='w-full min-h-full'>
        <Nav/>
        <div className="w-full h-[85vh] flex flex-col p-6 items-center">
            <div className='w-full flex flex-col md:w-[500px] h-full items-center'>
                <h2 className='text-2xl md:text-center'>How you want to be known as</h2>
                <img className='sm:w-[90%] mt-6 rounded-xl h-52 w-full h-96 md:hidden' src={img_back.src} alt="" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-5 h-12 pl-3 outline-none md:w-[80%] md:mt-14' placeholder='Name' type="text" />
                <input className='border-b-[2px]  sm:w-96 border-[#4A3AFF] w-full mt-12 h-12 pl-3 outline-none md:w-[80%]' placeholder='Nick Name' type="text" />
                <button className='w-full h-12 text-white mt-8 md:w-[80%] rounded-2xl bg-[#4A3AFF] sm:w-96 md:mt-16 cursor-pointer'>Next</button>
            </div>
        </div>
    </div>
    </Provider>
  )
}

export default page