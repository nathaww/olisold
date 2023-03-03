import React from 'react'
import { AiFillPhone, AiFillInstagram, AiOutlineMail, AiFillFacebook } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact' className='px-4 lg:px-20 pb-10 md:py-10 lg:py-10'>
      <h1 className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold ">Get in contact with us</h1>
      <p className='mb-8 text-center'>Call or contact us to order</p>

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