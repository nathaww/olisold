import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-primary'>
            <div className='py-6 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between'>
                <p className='font-bold text-xl lg:text-2xl text-darkPrimary'>Oli's Knitting</p>
                <div className='flex gap-1 lg:gap-5'>
                    <a href="#products" className='text-darkPrimary text-sm lg:text-lg font-semibold cursor-pointer border-transparent border-2 transition duration-150 hover:border-b-darkSecondary hover:text-darkSecondary'>Products</a>
                    <a href="#contact" className='text-darkPrimary text-sm lg:text-lg font-semibold cursor-pointer border-transparent border-2 transition duration-150 hover:border-b-darkSecondary hover:text-darkSecondary'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar