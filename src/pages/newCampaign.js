import { PrimaryButton, SecondaryButton } from '@/components/base/Button'
import Footer from '@/components/base/Footer'
import Navbar from '@/components/base/Navbar'
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid'
import React from 'react'

function newCampaign() {
  return (
    <div>
        <Navbar/>
          <div className="lg:py-40 py-10 lg:px-12 px:8 bg-gradient-radial from-gray-50 via-indigo-50 to-gray-50 flex flex-col space-y-10 justify-center items-center">
            <div className=' flex flex-col space-y-2 justify-center items-center'>
              <h1 className=" text-3xl text-black font-semibold font-heading">Create new campaign</h1>
              <p className=' text-base text-gray-900'>Enter your details below to create a new etherise campaign</p>
            </div>

            <div className='flex flex-col space-y-8 justify-center items-center lg:w-3/6 w-full'>
              <div className='px-6 pb-10 pt-2 rounded-md border border-gray-200 bg-white w-full shadow-sm'>
                  <div className='flex flex-col space-y-6 justify-start items-start'>
                    <div className='px-0 py-3 border-b border-gray-w00 w-full'>
                      <h2 className='text-md text-black font-semibold'>Business Details</h2>
                    </div>
                    <div className='flex flex-col space-y-6 w-full'>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Business Name</label>
                        <input name="business" type="text" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal'  />
                      </div>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Ethereum Address</label>
                        <input name="address" type="text" disabled className='shadow-sm w-full rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-sm text-black font-normal' value="0x991...729e" />         
                      </div>
                    </div>
                  </div>  
              </div>

              <div className='px-6 pb-10 pt-2 rounded-md border border-gray-200 bg-white w-full shadow-sm'>
                  <div className='flex flex-col space-y-6 justify-start items-start'>
                    <div className='px-0 py-3 border-b border-gray-w00 w-full'>
                      <h2 className='text-md text-black font-semibold'>Campaign Details</h2>
                    </div>
                    <div className='flex flex-col space-y-6 w-full'>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Campaign title</label>
                        <input name="title" type="text" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal'  />
                      </div>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Campaign category</label>
                        <select name="category" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal' >
                            <option value="Sustainability">Sustainability</option>
                            <option value="Art & Culture">Art & Culture</option>
                            <option value="Business or Venture">Business or Venture</option>
                            <option value="Community">Community</option>
                            <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Campaign goal</label>
                        <div className='flex flex-col space-y-0.5 justify-start items-start w-full'>
                          <input name="goal" type="text" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal'/>
                          <p className='text-xs font-light text-gray-500'>How much are you raising for this campaign?</p>
                        </div>             
                      </div>
                      
                    </div>
                  </div>  
              </div>

              <div className='px-6 pb-10 pt-2 rounded-md border border-gray-200 bg-white w-full shadow-sm'>
                  <div className='flex flex-col space-y-6 justify-start items-start'>
                    <div className='px-0 py-3 border-b border-gray-w00 w-full'>
                      <h2 className='text-md text-black font-semibold'>Campaign Description</h2>
                    </div>
                    <div className='flex flex-col space-y-6 w-full'>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Campaign description</label>
                        <input name="description" type="textarea" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal'/>
                      </div>
                      <div className='flex flex-col space-y-1 justify-start items-start w-full'>
                        <label className='text-sm text-gray-800 font-medium'>Cover image - Enter a link</label>
                        <div className='flex flex-col space-y-0.5 justify-start items-start w-full'>
                          <input name="image" type="text" className='shadow-sm w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-black font-normal'/>
                          <p className='text-xs font-light text-gray-500'>Copy the image url and paste it here</p>
                        </div> 
                      </div>
                    </div>
                  </div>  
              </div>
            </div>
          </div>
          <div className='px-8 py-5 bg-white flex justify-center items-center fixed bottom-0 left-0 w-full border-t border-gray-200'>
            <div className='w-1/2 flex justify-between items-center'>
              <SecondaryButton text="Cancel" linkto="/" />
              <PrimaryButton text="Create campaign" linkto="/" />
            </div>
          </div>
    </div>
  )
}

export default newCampaign
