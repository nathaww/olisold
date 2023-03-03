import React, { useEffect, useRef } from 'react'
import vector from '../assets/vector.png'
import vector2 from '../assets/vector2.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Testimonial = () => {

  let h1 = useRef(null);
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
        autoAlpha: 0,
      })
  }, [])

  return (
    <section ref={el => sec = el}>
      <div className="container px-5 py-24 mx-auto">
        <div className='overflow-hidden'>
          <h1 ref={el => h1 = el} className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold mb-8">
            What our cutomers had to say
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full relative">
            <div className="h-full bg-primary border-2 border-darkPrimary  p-8 rounded">
              <img src={vector} className="absolute w-24 h-24 top-[2px] left-[2px] -z-10" alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#132026" className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036">
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              <p className="leading-relaxed mb-6">I absolutely adore the trendy styles oli’s store offers.
                The sweater fits so well and it looks amazing. I really appreciate this option and the quality of the
                goods is so great that I will order product in the future.
                Thank you for knitting me together😊</p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="font-bold text-darkSecondary">Yordi</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-darkPrimary p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#132026" className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036">
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              <p className="leading-relaxed mb-6 text-white">When I think of Oli’s, I think of the process behind the product.
                From the yarn farms to the knitting room, so much time and care is put into such a product.
                I see it as a long term investment in a natural and beautiful piece of clothing.
                The touch of nature is unique, and I feel Oli’s maintains that touch through keeping its products
                handmade.
                I wan to thank the Oli’s brand for being authentic, natural and innovative.</p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="font-bold text-darkSecondary">Kolu Ketema</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full lg:bg-darkPrimary lg:text-white bg-primary border-2 border-darkPrimary p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#132026" className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036">
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              <p className="leading-relaxed mb-6">Oli’s knit 🧶, I see an amazing potential that can make a change in a fashion industry,
                me and my families are so grateful for making you a #1 choice for a Christmas outfit,
                specially the beautiful sweater you made for my baby boy (Hayyuu) was phenomenal. Keep up the good work.</p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="font-bold text-darkSecondary">Milkesa Takele</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full relative">
            <div className="h-full lg:bg-primary lg:border-2 lg:border-darkPrimary lg:text-black text-white bg-darkPrimary p-8 rounded">
              <img src={vector} className="absolute w-24 h-24 bottom-[2px] right-[2px] z-10" alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#132026" className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036">
                <path
                  d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              <p className="leading-relaxed mb-6">I want to thank Oli’s for dressing me in “Lily” which was one of my faviorite since it got posted.
                And am very happy to own one of the most exclusive and unique contour which is fully done by hand, that gave it extra credit to the cloth.
                I can’t wait for my next order!</p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="font-bold text-darkSecondary">Naomi Tamrat</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Testimonial