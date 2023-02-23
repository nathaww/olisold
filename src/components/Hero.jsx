import React, { useEffect, useRef } from 'react'
import Olisvid2 from '../assets/Olisvid2.mp4'
import vector from '../assets/vector.png'
import vectoralt from '../assets/vector2.png'
import gsap from 'gsap'
import Navbar from './Navbar'

const Hero = () => {


    let h1 = useRef(null)
    let h2 = useRef(null)
    let h3 = useRef(null)
    let vector1 = useRef(null)
    let vector2 = useRef(null)
    let vector3 = useRef(null)

    const timeline_intro = gsap.timeline();

    useEffect(() => {
        timeline_intro.from([h1, h2, h3],
            {
                delay: 4.4,
                duration: 2,
                y: 100,
                ease: 'expo.inOut',
                stagger:
                {
                    amount: .3
                }
            }), timeline_intro.from([vector1, vector2, vector3],
                {
                    delay: -1.4,
                    duration: 1.5,
                    opacity: 0,
                    x: 20,
                    ease: 'expo.inOut',
                    stagger:
                    {
                        amount: .3
                    }
                })
        timeline_intro.timeScale(0.8);
    })

    return (
        <section className='bg-primary relative'>
            <img className='absolute w-full -z-0 bottom-0' src={vectoralt} alt="olis vector" />
            <Navbar />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-16">
                <img ref={el => vector3 = el} className='absolute top-20 left-10 w-22 h-20 hidden md:flex lg:flex xl:flex' src={vector} alt="olis vector" />

                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-3 text-xs font-bold tracking-widest text-darkPrimary uppercase"> You knit me together </span>
                        <div className='overflow-hidden p-1'>
                            <h1 ref={el => h1 = el} className="text-6xl font-bold leading-none tracking-tighter text-darkSecondary md:text-7xl lg:text-7xl">
                                Find The Best
                            </h1>
                        </div>
                        <div className='overflow-hidden p-1'>
                            <h1 ref={el => h2 = el} className="text-6xl font-bold leading-none tracking-tighter text-darkSecondary md:text-7xl lg:text-7xl">
                                Fashion Style
                            </h1>
                        </div>
                        <div className='overflow-hidden p-1'>
                            <h1 ref={el => h3 = el} className="lg:mb-3 text-6xl font-bold leading-none tracking-tighter text-darkSecondary md:text-7xl lg:text-7xl">
                                For You
                            </h1>
                        </div>
                        <p className="mb-3 lg:mb-6 text-base leading-relaxed text-left w-[80%] text-gray-600">We hope to grow the business from making clothes for clients in Ethiopia to exporting our beautiful creative attires to other countries in Africa and the world at large.</p>
                        <div className="mt-0 lg:mt-3 max-w-7xl sm:flex">
                            <div className="mt-3 rounded-lg z-10 sm:mt-0">
                                <a href='#products' className="items-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out shadow-lg transform bg-darkSecondary hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-offset-2">Order now</a>
                            </div>

                        </div>
                    </div>
                    <div className="w-full lg:max-w-lg lg:w-1/2 flex justify-center rounded-xl">
                        <div>
                            <div className="relative w-full max-w-lg">
                                <div className="absolute -top-10 lg:top-0 rounded-full bg-secondary -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute rounded-full bg-primary -bottom-12 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animation-delay-4000"></div>

                                <div className="relative py-4">
                                    <img ref={el => vector1 = el} className='absolute hidden lg:flex bottom-0 lg:-bottom-10 -left-10 w-22 h-20' src={vector} alt="" />
                                    <img ref={el => vector2 = el} className='absolute -top-10 right-0 lg:-right-10 w-22 h-20' src={vector} alt="" />
                                    <video className='rounded-bl-[4rem] w-full' muted autoPlay loop>
                                        <source src={Olisvid2} type="video/mp4" />
                                    </video>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero