import React, { useEffect, useRef } from 'react'
import about from '../assets/about.webp'
import olis from '../assets/oli.jpg'
import vector from '../assets/vector.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const About = () => {


  let h1 = useRef(null);
  let sec = useRef(null);
  let p = useRef(null);


  useEffect(() => {
    const animation = gsap
      .timeline({
        defaults: {
          ease: 'expo.Out',
        },
        scrollTrigger: {
          trigger: sec,
          start: 'top center',
          markers: false
        }
      }).from(h1, {
        y: 40,
      }).from(p, {
        y: 40,
        autoAlpha: 0,
      })
  }, [])


  return (
    <section ref={el => sec = el} className="body-font">
      <div className="container mx-auto flex px-5 py-8 sm:py-8 md:py-12 lg:py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-12 md:mb-0 relative">
          <img src={vector} className="absolute w-24 h-24 -top-2 lg:-top-10 -right-10 -z-10" alt="" />
          <img className="object-cover object-center rounded-tl-[4rem]" alt="logo" src={about} />
          <img src={olis} className="absolute object-cover object-center w-40 h-36 -bottom-10 -left-10 z-10" alt="" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className='overflow-hidden my-4'>
            <h1 ref={el => h1 = el} className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold">A few things about Oli's</h1>
          </div>
          <p ref={el => p = el} className="px-2 leading-relaxed text-lg text-left">
            Oli's is a handmade product that has been in the work for over five years, a product that we have put our blood sweat and tears into.
            After years of toiling and perfecting our product, we have now come to the stage where we want to share this passion with the world.
            Oli's wants you all to know that our homemade products are ready to dress you in homemade love.
            After five years of knitting alone, now oli's is officially ready to knit you together.
          </p>
        </div>
      </div>
    </section>

  )
}

export default About