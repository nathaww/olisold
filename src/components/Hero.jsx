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
    let glass = useRef(null)

    const timeline_intro = gsap.timeline();

    useEffect(() => {
        timeline_intro.from([h1, h2, h3],
            {
                delay: 3.4,
                duration: 1,
                skewY: 8,
                yPercent: 130,
                stagger: 0.2,
                ease: "back.out",
            }), timeline_intro.fromTo(glass, {
                y: -290,
                duration: .8,
            }, {
                y: 300,
                height: 0,
                duration: .8,
            }
            ), timeline_intro.from([vector1, vector2],
                {
                    delay: -1.4,
                    duration: 1,
                    autoAlpha: 0,
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
        <section className='bg-white relative'>
            <img className='absolute w-full -z-0 bottom-0' src={vectoralt} alt="olis vector" />
            <Navbar />
            <div className="pb-2 px-3 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-6">
                <img className='absolute top-20 left-10 w-22 h-20 hidden md:flex lg:flex xl:flex' src={vector} alt="olis vector" />

                <div className="flex flex-wrap items-center mx-auto max-w-7xl mb-5">
                    <div
                        className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-3 text-xs font-bold tracking-widest text-darkPrimary uppercase">
                            You knit me together
                        </span>
                        <div className="overflow-hidden relative">

                            <div ref={el => glass = el} className='absolute w-full h-[80%] skew-y-12 opacity-70 bg-primary z-10' />

                            <div className='overflow-hidden pt-2'>
                                <h1 ref={el => h1 = el} className="hometext text-5xl sm:text-6xl font-bold leading-none text-darkSecondary md:text-7xl lg:text-7xl">
                                    Oli's Is Ready
                                </h1>
                            </div>
                            <div className='overflow-hidden pt-2'>
                                <h1 ref={el => h2 = el} className="hometext text-5xl sm:text-6xl font-bold leading-none text-darkSecondary md:text-7xl lg:text-7xl">
                                    To Knit You
                                </h1>
                            </div>
                            <div className='overflow-hidden pt-2'>
                                <h1 ref={el => h3 = el} className="hometext text-5xl sm:text-6xl font-bold leading-none text-darkSecondary md:text-7xl lg:text-7xl">
                                    Together
                                </h1>
                            </div>
                        </div>

                        <p className="my-3 lg:mb-6 text-base leading-relaxed text-left w-[80%] text-gray-500">Oli's is a handmade product that has been in the work for over five years,
                            a product that we have put our blood sweat and tears into. After years of toiling and perfecting our product,
                            we have now come to the stage where we want to share this passion with the world. </p>


                        <div className="mt-3 lg:mt-3 max-w-7xl sm:flex">
                            <a href='#products'
                                className="items-center rounded px-10 py-4 text-base font-medium text-center text-secondary transition duration-500 ease-in-out shadow-lg transform bg-darkSecondary hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
                                Order now</a>
                        </div>

                    </div>
                    <div className="w-full lg:max-w-lg lg:w-1/2 flex justify-center rounded-xl mb-5">
                        <div>
                            <div className="w-full max-w-lg">
                                <div className="relative">

                                    <div className="absolute top-0 rounded-full bg-darkSecondary -left-4 w-40 h-40 lg:w-72 lg:h-72 mix-blend-multiply b opacity-60"></div>
                                    <div className="absolute hidden lg:flex rounded-full bg-darkSecondary -bottom-24 right-20 w-60 h-60 mix-blend-multiply b opacity-50"></div>

                                    <img ref={el => vector1 = el} className='absolute hidden lg:flex bottom-0 lg:-bottom-10 -left-10 w-22 h-20' src={vector} alt="" />
                                    <img ref={el => vector2 = el} className='absolute -top-10 right-0 lg:-right-10 w-22 h-20' src={vector} alt="" />
                                    <video className='rounded-bl-[4rem] w-full' muted autoPlay loop playsInline>
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