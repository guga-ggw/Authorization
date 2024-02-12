'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' // Correct import statement for useRouter

const Dashboard = () => {
    const {data}  = useSession()


    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className="flex items-center justify-center w-60 h-60 bg-pink-600 text-white rounded-3xl flex-col gap-8">
            <h1>{data?.user?.name}</h1>
            <h2>{data?.user?.email}</h2>
            <button onClick={() => signOut()}>Sign out</button>
            </div>

        </div>
    )
}

export default Dashboard