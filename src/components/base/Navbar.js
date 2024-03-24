import { React, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

function Navbar() {
    const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
    useState(false);
const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
};

  return (
    <div>
        
        <Head>
				<title>WalletConnect | Next Starter Template</title>
				<meta
					name="description"
					content="Generated by create-wc-dapp"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="bg-white bg-opacity-95 border-b border-gray-200">
				<div
					className={styles.backdrop}
					style={{
						opacity:
							isConnectHighlighted || isNetworkSwitchHighlighted
								? 1
								: 0,
					}}
				/>
			<div className={styles.header}>
                <div className='flex space-x-16 justify-center items-center'>
                    <div className='flex justify-center items-center space-x-1 text-white'><Link href="/" className='font-bold  text-2xl text-primary'>Etherise</Link></div>              
                    <ul className={'lg:flex md:flex hidden flex-row justify-center items-center'}>                     
                        <Link className='text-gray-900 font-medium text-sm' href="/activeCampaigns">Active Campaigns</Link>         
                    </ul>
                        
                </div>					
                    <div className={ 'flex space-x-8 justify-center items-center'}>
                    <ul className={'lg:flex md:flex hidden flex-row justify-center items-center'}>


                        <Link className='text-gray-900 font-medium text-sm' href="/myCampaigns">My Campaigns</Link>
                        
                    </ul>
                    <div className='flex space-x-2 justify-center items-center'>
                    <div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isNetworkSwitchHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							<w3m-network-button />
						</div>
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isConnectHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							<w3m-button />
						</div>
                    </div>
                </div>
				</div>
			</header>


    </div>
  )
}

export default Navbar