import React from 'react'
import Navbar from '../../components/base/Navbar'
import Image from 'next/image'
import Footer from '../../components/base/Footer'
import {CircleStackIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import Transaction from '../../components/Transaction'


function campaign() {
  return (
    <div>
      <Navbar/>

        <div className="lg:py-40 py-10 lg:px-12 px:8 bg-gray-50 flex flex-col space-y-10 justify-start items-start w-full">
          <div className='lg:grid lg:grid-flow-col lg:grid-cols-5 lg:gap-16 lg:justify-start lg:items-start flex flex-col justify-center items-center w-full'>
              <div className='lg:col-span-2 flex flex-col space-y-6 justify-start items-start w-full lg:sticky lg:top-28'>
                  <div className='flex w-full h-56 rounded-md'>
                    <Image src="/hero-image.jpg" className="w-full rounded-md h-full" width={300} height={1200} />
                  </div>
                  <div className='flex flex-col space-y-4 justify-start items-start w-full'>
                    <h3 className='font-heading text-xl text-gray-900 font-semibold'>
                      New Orleans Homeless Shelter Renovation
                    </h3>
                    <div className='px-3 py-3 bg-white border border-gray-200 flex flex-col space-y-2 justify-start items-start w-full rounded-md'>
                      <div className='flex space-x-2 justify-center items-center'> <CircleStackIcon className=' text-orange-400 w-4 h-4' /> <div className='flex space-x-1 justify-center items-center'><p className='text-sm font-semibold text-black'>Raised 1.9eth</p> <p className='text-sm font-medium text-gray-500'>(24 Donations)</p> </div></div>
                      <div className='bg-white w-full rounded-full h-1.5 flex justify-start items-center'>
                          <div className=' w-3/4 bg-green-500 rounded-full h-1.5'/>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex space-x-2 jusify-center items-center'>
                      <UserCircleIcon className=' text-primary w-6 h-6'/>             
                      <div className='flex flex-col space-y-1 w-full'>
                        <p className='text-sm text-gray-900 font-semibold'>Real Minders Trust Foundation</p>
                        <p className='text-xs text-gray-500'>0x5A...F2D4</p>                        
                      </div>
                  </div>                  
                  <div className='px-6 py-8 rounded-md border border-gray-200 bg-white w-full shadow-sm'>
                      <div className='flex flex-col space-y-6 justify-start items-start w-full'>
                        <div className='flex flex-col space-y-6 w-full'>
                          <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                            <label className='text-sm text-gray-800 font-medium'>Enter amount here (eth)</label>
                            <input name="business" type="text" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal'  />
                          </div>
                          <div className='flex flex-col justify-center items-center space-y-2 w-full'>
                            <button className='font-heading px-4 py-3 rounded-xl text-sm bg-primary border-2 border-blue-500 shadow-md w-full'>Send Donation</button>      
                            <p className='text-xs font-light text-gray-600'>Fund will be deducted from your ethereum wallet</p>  
                          </div>
                        </div>
                      </div>  
                  </div>                  
              </div>
              <div className='lg:col-span-3 flex flex-col space-y-6 justify-start items-start w-full'>
                  <div className='flex flex-col space-y-0 justify-start items-start w-full bg-white border border-gray-200 rounded-lg'>
                      <div className='flex justify-start items-start py-3 px-6 border-b border-gray-200 w-full'>
                          <h5 className='text-lg font-semibold text-gray-900'>About this campaign</h5>
                      </div>
                      <div className='px-6 py-6'>
                          <p className='text-sm text-gray-600'>
                            Be a cornerstone of compassion in the heart of New Orleans with our Homeless Shelter Renovation project. Your generosity revitalizes a local shelter, providing a sanctuary of warmth, safety, and dignity for those facing homelessness in this dynamic city. Build a foundation of compassion in the heart of New Orleans with the Homeless Shelter Renovation project. Your generosity breathes new life into a local shelter, offering a haven of warmth, safety, and dignity for individuals experiencing homelessness in this vibrant city.
                          </p>
                      </div>
                  </div>

                  <div className='flex flex-col space-y-0 justify-start items-start w-full bg-white border border-gray-200 rounded-lg'>
                      <div className='flex justify-start items-start py-3 px-6 border-b border-gray-200 w-full'>
                          <h5 className='text-lg font-semibold text-gray-900'>Transactions</h5>
                      </div>
                      <div className='flex justify-start items-start py-0 px-6 border-b border-gray-200 w-full'>
                        <div className="text-sm font-medium text-center text-gray-500 w-full">
                            <ul className="flex flex-wrap -mb-px">
                              <li className="me-2">
                                <a href="#" className="inline-block p-4 text-primary border-b-2 border-primary dark:text-blue-500">Money In</a>
                              </li>
                              <li className="me-2">
                                <a href="#" className="inline-block p-4 text-gray-300">Money Out</a>
                              </li>
                            </ul>
                        </div>
                      </div> 
                      <div className='flex flex-col space-y-0 justify-start items-start w-full'>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          <Transaction/>
                          
                      </div>                     
                  </div>
              </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default campaign