import React from 'react'
import Navbar from "@/components/base/Navbar.js"
import Footer from "@/components/base/Footer.js"
import Campaign from "@/components/Campaign.js"
function myCampaigns() {

  return (
    
    <div>
        <Navbar/>
        <div className="lg:py-40 py-10 lg:px-12 px:8 bg-gray-50 flex flex-col space-y-10 justify-start items-start">
				<div className="flex flex-col space-y-8 justify-start items-start w-full">
				<div className="flex justify-start items-center w-full">
					<div className=' flex flex-col space-y-2 justify-start items-start'>
            <h2 className=" text-3xl text-black font-semibold font-heading">My Profile</h2>
            <p className=' text-base text-gray-600'>Campaigns created by you. Open a campign to view transactions</p>
          </div>
				</div>
						
				<div className="flex justify-start items-start w-full">
					<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
							<ul className="flex flex-wrap -mb-px">
								<li className="me-2">
									<a href="#" className="inline-block p-4 text-primary border-b-2 border-primary rounded-t-lg  dark:text-blue-500">My Campaigns</a>
								</li>
							</ul>
					</div>
				</div>
			</div>
			<div className='flex flex-col space-y-8 lg:space-y-0 md:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16 md:grid md:grid-cols-3 md:gap-8 w-full'>
				<Campaign/>
				<Campaign/>
				<Campaign/>
				<Campaign/>
				<Campaign/>
				<Campaign/>
				<Campaign/>
				<Campaign/>
				
			</div>
					
			</div>
			{/* CAMPAIGNS YOU MAY LIKE END*/}
			<Footer/>
      </div>
  )
}

export default myCampaigns