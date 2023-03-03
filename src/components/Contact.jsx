import React, { useEffect, useRef } from 'react'
import { AiFillPhone, AiFillInstagram, AiOutlineMail, AiFillFacebook } from 'react-icons/ai'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Contact = () => {

  let h1 = useRef(null);
  let p = useRef(null);
  let sec = useRef(null);

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
    <section ref={el => sec = el} id='contact' className='px-4 lg:px-20 pb-10 md:py-10 lg:py-10'>
      <h1 ref={el => h1 = el} className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold ">Get in contact with us</h1>
      <p ref={el => p = el} className='mb-8 text-center'>Call or contact us to order</p>

      <div className="grid grid-cols-2 gap-4 mx-auto place-items-stretch h-56">
        <div className='bg-darkSecondary rounded flex items-center justify-center'>
          <a className='text-secondary' href="tel:+251935757519" aria-label="call">
            <AiFillPhone className="h-8 w-8" />
          </a>
        </div>
        <div className='bg-darkSecondary rounded flex items-center justify-center'>
          <a className='text-secondary' href="https://instagram.com/_olis_?igshid=YmMyMTA2M2Y=" aria-label="call">
            <AiFillInstagram className="h-8 w-8" />
          </a>
        </div>
        <div className='bg-darkSecondary rounded flex items-center justify-center'>
          <a className='text-secondary' href="olis.knitting@gmail.com" aria-label="call">
            <AiOutlineMail className="h-8 w-8" />
          </a>
        </div>
        <div className='bg-darkSecondary rounded flex items-center justify-center'>
          <a className='text-secondary' href="tel:+251911391392" aria-label="call">
            <AiFillFacebook className="h-8 w-8" />
          </a>
        </div>
      </div>


    </section>
  )
}

export default Contact