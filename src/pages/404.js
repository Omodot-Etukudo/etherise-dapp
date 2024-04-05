import React from 'react'
import Navbar from "@/components/base/Navbar.js"
import {PrimaryButton, SecondaryButton} from "@/components/base/Button.js"

function NotFound() {
  return (
    <div className='h-full w-full'>
    <Navbar/>
    
    <div className='flex justify-center items-center h-full w-full bg-white'>
        <div className='flex flex-col space-y-8 justify-center items-center h-full'>
            <h2 className=' text-9xl font-bold text-blue-200'>404</h2>
            <div className='flex flex-col justify-center items-center space-y-2 text-center'>
                    <h1 className='font-semibold text-3xl text-black text-center'>Page not found</h1>
                    <p className='text-gray-800 text-base font-medium text-center w-2/3'>The page you are looking for has either been moved or does not exist</p>
            </div>
            <PrimaryButton linkto="/" text="Go back home" />
        </div>
    </div>
    </div>
  )
}

export default NotFound