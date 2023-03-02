import React, { useEffect, useRef } from 'react'
import about from '../assets/about.webp'
import olis from '../assets/oli.jpg'
import rect from '../assets/Rectangle 144.png'
import vector from '../assets/vector.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const About = () => {


  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let sec = useRef(null);


  // useEffect(() => {
  //   const animation = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: sec,
  //         start: 'top 60%',
  //         toggleActions: 'restart pause none pause',
  //         markers: false
  //       }
  //     }).from([img1, img2, img3], {
  //       x: 40,
  //       y: -40,
  //       autoAlpha: 0,
  //       duration: 1,
  //       ease: 'expo.Out',
  //       stagger: .2,
  //     })
  //   animation.timeScale(0.8)
  // }, [])


  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-6 sm:py-8 md:py-12 lg:py-16 md:flex-row flex-col items-center">
        <div ref={el => sec = el} className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-12 md:mb-0 relative">
          <img ref={el => img1 = el} src={vector} className="absolute w-24 h-24 -top-2 lg:-top-10 -right-10 -z-10" alt="" />
          <img ref={el => img2 = el} className="object-cover object-center rounded-tl-[4rem]" alt="hero" src={about} />
          <img ref={el => img3 = el} src={olis} className="absolute w-40 h-36 -bottom-10 -left-10 z-10" alt="" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className='overflow-hidden my-4'>
            <h1 className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold">A few things about Oli's</h1>
          </div>
          <p className="px-2 leading-relaxed text-lg text-left">
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