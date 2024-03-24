import React from 'react'
import Image from 'next/image'
import {CircleStackIcon, UserCircleIcon} from '@heroicons/react/24/solid'

function Campaign() {
  return (
    <div className="w-full bg-white rounded-md px-5 py-6 flex flex-col space-y-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-100 cursor-pointer">
        <Image width={1000} height={1000} className='rounded-md w-full h-48' src="https://img.freepik.com/free-photo/happy-young-company-smiling-friends-sitting-park-grass-man-women-having-fun-together_285396-8812.jpg?t=st=1711149734~exp=1711153334~hmac=4b61bd23cf7cbdc35b1ff926ba964c32e74fe40969a93b38ddc2167621b5dae6&w=1800"/>
        <div className='flex flex-col space-y-4 justify-start items-start'>
            <div className='flex justify-start items-start flex-col space-y-2'>
              <span className='px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs'>Sustainability</span>
              <h4 className='text-lg font-semibold text-black text-left'>New Orleans Homeless Shelter Renovation</h4>
            </div>
            <div className='px-3 py-3 bg-gray-100 flex flex-col space-y-2 justify-start items-start w-full rounded-md'>
              <div className='flex space-x-2 justify-center items-center'> <CircleStackIcon className=' text-orange-400 w-4 h-4' /> <div className='flex space-x-1 justify-center items-center'><p className='text-sm font-semibold text-black'>Raised 1.9eth</p> <p className='text-sm font-medium text-gray-500'>($3200)</p> </div></div>
              <div className='bg-white w-full rounded-full h-1.5 flex justify-start items-center'>
                  <div className=' w-3/4 bg-green-500 rounded-full h-1.5'/>
              </div>
            </div>
            <div className='py-2 border-t border-gray-100 w-full flex space-x-2 jusify-center items-center'>
             
              <UserCircleIcon className=' text-primary w-6 h-6'/>
              
              <div className='flex flex-col space-y-1 w-full'>
                <p className='text-xs text-gray-500'>Created by</p>
                <p className='text-sm text-gray-900 font-semibold'>0x5A...F2D4</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Campaign