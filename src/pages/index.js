import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/base/Navbar.js"
import Footer from "@/components/base/Footer.js"
import Campaign from "@/components/Campaign.js"
import {PrimaryButton, SecondaryButton} from "@/components/base/Button.js"

export default function Home() {
	const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
		useState(false);
	const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

	const closeAll = () => {
		setIsNetworkSwitchHighlighted(false);
		setIsConnectHighlighted(false);
	};
	return (
		<>
			<Navbar/>
			{/* HERO SECTION */}
				<div className="w-full bg-white lg:py-48 py-40 lg:px-12 px:8 flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-2 lg:gap-12 justify-center items-center">

					<div className="flex flex-col space-y-10 justify-start items-start bg-white lg:col-span-1">
					<div className="flex flex-col space-y-6">
						<div className="flex justify-start items-start">
						<div className="bg-blue-50 px-3 py-1 text-primary flex justify-start items-start rounded-full shadow-sm">
							<p className="text-sm">Raise on the Ethereum Blockchain</p>
						</div>
						</div>
						
						<div className="flex flex-col space-y-4">
						<h1 className=" text-5xl text-black font-bold font-heading">Find help & fund trustless projects ~ on-chain.</h1>
						<p className="text-gray-500 text-base">Welcome to Etherise. Experience the future of fundraising, where every campaign is embraced with openness and possibility.</p>
						</div>
					</div>
					<div className='flex justify-start items-start space-x-4 text-xs font-medium'>
						<PrimaryButton linkto="/newCampaign" text="Start Campaign" />     
						<SecondaryButton linkto="/activeCampaigns" text="Donate Now" />    
					</div>
					</div> 
					
						<Image src="/hero-image.jpg" className="w-full h-full rounded-xl" width={300} height={200} />
					
     		 	</div>
			{/* HERO SECTION END*/}	 

			{/* CAMPAIGNS YOU MAY LIKE */}
			<div className="lg:py-20 py-10 lg:px-12 px:8 bg-gray-50 flex flex-col space-y-10 justify-start items-start">
				<div className="flex flex-col space-y-8 justify-start items-start w-full">
					<div className="flex justify-between items-center w-full">
					<div><h2 className=" text-3xl text-black font-semibold font-heading">Campaigns you may like</h2></div>
					<div><Link href="/activeCampaigns" className="text-base font-semibold text-primary">See all campaigns</Link></div>
				</div>
						
				<div className="flex justify-start items-start w-full">
					<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
							<ul className="flex flex-wrap -mb-px">
								<li className="me-2">
									<a href="#" className="inline-block p-4 text-primary border-b-2 border-primary rounded-t-lg  dark:text-blue-500">All Categories</a>
								</li>
								<li className="me-2">
									<a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Sustainability</a>
								</li>
								<li className="me-2">
									<a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" aria-current="page">Humanity</a>
								</li>
								<li className="me-2">
									<a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Business</a>
								</li>
								<li className="me-2">
									<a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Art & Culture</a>
								</li>
							</ul>
					</div>
				</div>
			</div>
			<div className='flex flex-col space-y-8 lg:space-y-0 md:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16 md:grid md:grid-cols-3 md:gap-8 w-full'>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				<Campaign linkTo="id-goes-here"/>
				
			</div>
					
			</div>
			{/* CAMPAIGNS YOU MAY LIKE END*/}
			<Footer/>
		</>
	);
}
