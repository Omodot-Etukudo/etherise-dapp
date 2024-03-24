import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div className='w-full  flex md:flex lg:flex xl:flex justify-between items-center lg:bg-main lg:px-12 lg:py-5 bg-primary border-primary'>
        <div className='flex space-x-16 justify-center items-center'>
            <div className='flex justify-center items-center space-x-1 text-white'><Link href="/" className='font-bold  text-2xl text-white'>Etherise</Link></div>    
        </div>
        <div className={ 'flex space-x-8 justify-center items-center'}>
            <ul className={'lg:flex md:flex hidden flex-row space-x-8 justify-center items-center'}>

                <Link className='text-white font-medium text-sm' href="/a">Donate Now</Link>
                <Link className='text-white font-medium text-sm' href="/a">Start Campaign</Link>
                
            </ul>
            
        </div>
    
    </div>
)
}

export default Footer
