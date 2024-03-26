import React from 'react'
import {CircleStackIcon, UserCircleIcon, ArrowsRightLeftIcon} from '@heroicons/react/24/solid'

function Transaction() {
  return (
    <div className='px-6 py-4 flex justify-between items-center w-full border-b border-gray-100'>
        <div className='flex justify-center items-center space-x-4'>
            <div className='bg-green-50 flex justify-center items-center w-12 h-12 rounded-full'>
                <CircleStackIcon  className='text-green-600 w-5 h-5'  />
            </div>
            <div className='flex flex-col space-y-1 justify-start items-start'>
                <div className='flex justify-center items-center space-x-2'><p className='text-base text-gray-900 font-semibold'>3.9eth</p><p className='text-xs text-gray-600 font-semibold'>(399200402)</p></div>
                <div className='flex justify-center items-center space-x-3'>
                    <div className='flex justify-center items-center space-x-1'>
                          <UserCircleIcon className='text-primary w-4 h-4'/>
                          <p className='text-sm text-gray-700 '>0x5A...F2D4</p>
                    </div>
                    <div className='flex justify-center items-center space-x-1'>
                          <ArrowsRightLeftIcon className='text-primary w-5 h-5'/>
                          <p className='text-sm text-gray-700 '>0x5A...F2D4</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='font-heading px-4 py-3 rounded-xl text-sm bg-gray-50 text-gray-900 border-2 border-gray-100 shadow-sm'>
              Copy tx address
            </button>
        </div>
    </div>
  )
}

export default Transaction