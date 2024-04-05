import React from 'react'
import Navbar from "@/components/base/Navbar.js"
import Image from "next/image";
import {PrimaryButton, SecondaryButton} from "@/components/base/Button.js"

function createSuccess() {
  return (
    <div className='h-full w-full'>
    <Navbar/>
    
    <div className='flex justify-center items-center h-full w-full bg-white'>
        <div className='flex flex-col space-y-8 justify-center items-center h-full'>
            <Image src="/success.png" className="w-40 rounded-xl" width={300} height={200} />
            <div className='flex flex-col justify-center items-center space-y-2 text-center'>
                    <h1 className='font-semibold text-3xl text-black text-center'>Campaign created</h1>
                    <p className='text-gray-800 text-base font-medium text-center w-2/3'>Your campaign is now listed publicly for backers to donate</p>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
              <PrimaryButton linkto="/" text="Copy campaign link" />
              <SecondaryButton linkto="/" text="Go to campaign" />
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default createSuccess