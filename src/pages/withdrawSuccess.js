import React from 'react'
import Navbar from "@/components/base/Navbar.js"
import Image from "next/image";
import {PrimaryButton, SecondaryButton} from "@/components/base/Button.js"

function withdrawSuccess() {
  return (
    <div className='h-full w-full'>
    <Navbar/>
    
    <div className='flex justify-center items-center h-full w-full bg-white'>
        <div className='flex flex-col space-y-8 justify-center items-center h-full'>
            <Image src="/success.png" className="w-40 rounded-xl" width={300} height={200} />
            <div className='flex flex-col justify-center items-center space-y-2 text-center'>
                    <h1 className='font-semibold text-3xl text-black text-center'>Withdrawal Successful</h1>
                    <p className='text-gray-800 text-base font-medium text-center w-2/3'>Funds have now been withdrawn from your campaign into your wallet.</p>
            </div>
            <PrimaryButton linkto="/" text="Back to campaign" />
            
        </div>
    </div>
    </div>
  )
}

export default withdrawSuccess