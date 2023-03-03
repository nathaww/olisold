import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-darkSecondary">

            <div className="px-5 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center justify-center lg:px-20">

                <div className="mt-8 md:mt-0 md:order-1 flex justify-center">
                    <span className="mt-2 text-sm font-light text-white">
                        Copyright © 2023
                        <a href="#" className="mx-2 text-primary hover:text-gray-500" rel="noopener noreferrer">Oli's.</a> <br />
                        <p className='text-center'>
                            Since 2018
                        </p>
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer