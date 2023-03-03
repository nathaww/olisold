import React, { useEffect, useRef } from 'react'
import imgs1 from '../assets/Slider/1.jpg'
import imgs4 from '../assets/Slider/4.jpg'
import imgs8 from '../assets/Slider/8.jpg'
import imgs12 from '../assets/Slider/12.jpg'
import imgs13 from '../assets/Slider/13.jpg'
import rect from '../assets/Rectangle 144.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
import { useStateContext } from '../contexts/ContexProvider'
import Detail from './Detail'
gsap.registerPlugin(ScrollTrigger);

const Products = () => {

    const { productNo, setproductNo, detail, handleDetail } = useStateContext();

    let h1 = useRef(null);
    let sec = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);


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
            }).from([box1, box2, box3], {
                y: 40,
                autoAlpha: 0,
                stagger: 0.2
            })

        const animation2 = gsap
            .timeline({
                defaults: {
                    ease: 'expo.Out',
                },
                scrollTrigger: {
                    trigger: box4,
                    start: 'top center',
                    markers: false
                }
            }).from([box4, box5], {
                y: 40,
                autoAlpha: 0,
                stagger: 0.2
            })
    }, [])


    return (
        <section ref={el => sec = el} id='products'>

            {detail && <Detail />}

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col justify-center items-center gap-4 mb-8">
                        <div className='overflow-hidden'>
                            <h2 ref={el => h1 = el} className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold">Product collection</h2>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:gap-6 lg:mb-3">

                        <div onClick={() => { setproductNo(0), handleDetail() }} className='flex flex-col justify-center my-2 cursor-pointer'>
                            <div ref={el => box1 = el} className="group h-[500px] w-[420px] overflow-hidden flex justify-center relative mb-2 lg:mb-3 rounded">
                                <img src={imgs1} alt="olis product" className="absolute w-full h-full rounded object-cover object-center group-hover:scale-110 transition duration-200" />
                            </div>
                            <h1 className='text-darkSecondary font-semibold'>Lily</h1>
                            <p className='text-gray-600'>This is new</p>
                        </div>

                        <div onClick={() => { setproductNo(1), handleDetail() }} className='flex flex-col justify-center my-2 cursor-pointer'>
                            <div ref={el => box2 = el} className="group h-[500px] w-[420px] flex justify-center overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img src={imgs4} alt="Photo by Galina N" className="absolute w-full h-full rounded object-cover object-top group-hover:scale-110 transition duration-200" />
                            </div>
                            <h1 className='text-darkSecondary font-semibold'>Lily</h1>
                            <p className='text-gray-600'>This is new</p>
                        </div>

                        <div onClick={() => { setproductNo(2), handleDetail() }} className='flex flex-col justify-center my-2 cursor-pointer'>
                            <div ref={el => box3 = el} className="group h-[500px] w-[420px] flex justify-center  overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img src={imgs8} alt="olis product" className="absolute w-full h-full rounded object-cover object-center group-hover:scale-110 transition duration-500" />
                            </div>
                            <h1 className='text-darkSecondary font-semibold'>Lily</h1>
                            <p className='text-gray-600'>This is new</p>
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:gap-6">

                        <div onClick={() => { setproductNo(3), handleDetail() }} className='flex flex-col justify-center my-2 cursor-pointer'>
                            <div ref={el => box4 = el} className="group h-[500px] w-[420px] flex justify-center overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img src={imgs12} alt="olis product" className="absolute w-full h-full rounded object-cover object-center group-hover:scale-110 transition duration-200" />
                            </div>
                            <h1 className='text-darkSecondary font-semibold'>Lily</h1>
                            <p className='text-gray-600'>This is new</p>
                        </div>

                        <div onClick={() => { setproductNo(4), handleDetail() }} className='flex flex-col justify-center my-2 cursor-pointer'>
                            <div ref={el => box5 = el} className="group h-[500px] w-[420px] flex justify-center overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img src={imgs13} alt="olis product" className="absolute w-full h-full rounded object-cover object-top group-hover:scale-110 transition duration-200" />
                            </div>
                            <h1 className='text-darkSecondary font-semibold'>Lily</h1>
                            <p className='text-gray-600'>This is new</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Products