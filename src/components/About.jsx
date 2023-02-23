import React, { useEffect, useRef } from 'react'
import imgs1 from '../assets/Slider/1.jpg'
import oli from '../assets/oli.png'
import vector from '../assets/vector.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const About = () => {


  let img1 = useRef(null);
  let sec = useRef(null);
  let vec1 = useRef(null);
  let vec2 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);

  useEffect(() => {
    const animation = gsap
      .timeline({
        scrollTrigger: {
          trigger: sec,
          start: 'top bottom',
          toggleActions: 'restart pause none pause',
          markers: false
        }
      }).from(img1, {
        y: 60,
        duration: 1,
        ease: 'expo.Out'
      })
    animation.timeScale(1)

  }, [])


  return (
    <section className='bg-white'>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-12">
        <div ref={el => sec = el} className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2">
          
              <div className="relative w-full max-w-lg flex justify-start">
                <div className="absolute rounded-full bg-secondary bottom-0 right-36 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70"></div>

                {/* <img ref={el => vec1 = el} className='absolute -top-5 right-10 w-22 h-20 -z-10' src={vector} alt="" />
                <div ref={el => vec2 = el} className='hidden md:flex lg:flex absolute w-[100px] h-[100px] left-10 bottom-0 -z-10 bg-primary items-start justify-start' /> */}

                <div className='w-[80%] relative'>
                  <img ref={el => img1 = el} className='rounded-tl-[4rem] w-full h-full' src={oli} alt="" />
                </div>

              </div>
          </div>
          <div className="flex flex-col items-start text-left pt-8 lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-secondary uppercase"> Quality something something </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-darkPrimary md:text-7xl lg:text-5xl">About us</h1>
            <p className="mb-1 text-base leading-relaxed text-left text-gray-500">We have you in mind as we make high-end, classy products tailored to your measurements, it’s simply couture with the word beauty imprinted on all our crafter's minds.</p>
            <p className="mb-1 text-base leading-relaxed text-left text-gray-500">Oli’s prides itself on the quality we provide. We not only select the best materials to work with but all of our products are also inspected to maintain high standards. Our standards ensure our unique products can last you a lifetime.</p>
            <p className="text-base leading-relaxed text-left text-gray-500">All of Oli’s products are unique creations, each design different, much like a snowflake falling from the sky, or like the fingerprints on all of our hands.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About