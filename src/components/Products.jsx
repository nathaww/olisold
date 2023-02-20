import React, { useEffect, useRef } from 'react'
import imgs1 from '../assets/Slider/1.jpg'
import imgs2 from '../assets/Slider/2.jpg'
import imgs3 from '../assets/Slider/3.jpg'
import imgs4 from '../assets/Slider/4.jpg'
import imgs5 from '../assets/Slider/5.jpg'
import imgs6 from '../assets/Slider/6.jpg'
import imgs7 from '../assets/Slider/7.jpg'
import imgs8 from '../assets/Slider/8.jpg'
import imgs9 from '../assets/Slider/9.jpg'
import imgs10 from '../assets/Slider/10.jpg'
import imgs11 from '../assets/Slider/11.jpg'
import imgs12 from '../assets/Slider/12.jpg'
import imgs13 from '../assets/Slider/13.jpg'
import imgs14 from '../assets/Slider/14.jpg'
import imgs15 from '../assets/Slider/15.jpg'
import vector from '../assets/vector.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Products = () => {

    let img1 = useRef(null);
    let img2 = useRef(null);
    let img3 = useRef(null);
    let img4 = useRef(null);
    let img5 = useRef(null);
    let img6 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);

    useEffect(() => {
        const animation = gsap
            .timeline({
                scrollTrigger: {
                    trigger: img1,
                    start: 'top center',
                    toggleActions: 'restart pause none pause',
                    markers: false
                }
            }).from(box1, {
                width: 0,
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.inOut',
            })
        animation.timeScale(0.6)

        const animation2 = gsap
            .timeline({
                scrollTrigger: {
                    trigger: img2,
                    start: 'top center',
                    toggleActions: 'restart pause none pause',
                    markers: false
                }
            }).from(box2, {
                width: 0,
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.inOut',
            })
        animation2.timeScale(0.6)

        const animation3 = gsap
            .timeline({
                scrollTrigger: {
                    trigger: img3,
                    start: 'top center',
                    toggleActions: 'restart pause none pause',
                    markers: false
                }
            }).from(box3, {
                width: 0,
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.inOut',
            })
        animation3.timeScale(0.6)

        const animation4 = gsap
            .timeline({
                scrollTrigger: {
                    trigger: img4,
                    start: 'top center',
                    toggleActions: 'restart pause none pause',
                    markers: false
                }
            }).from(box4, {
                width: 0,
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.inOut',
            })
        animation4.timeScale(0.6)

        const animation5 = gsap
            .timeline({
                scrollTrigger: {
                    trigger: img5,
                    start: 'top center',
                    toggleActions: 'restart pause none pause',
                    markers: false
                }
            }).from(box5, {
                width: 0,
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.inOut',
            })
        animation5.timeScale(0.6)

        const animation6 = gsap
            .timeline({
                scrollTrigger: {
                    trigger: img6,
                    start: 'top center',
                    toggleActions: 'restart pause none pause',
                    markers: false
                }
            }).from(box6, {
                width: 0,
                autoAlpha: 0,
                duration: 1,
                ease: 'expo.inOut',
            })
        animation6.timeScale(0.6)


    }, [])


    return (
        <div id='products' className="2xl:container 2xl:mx-auto">

            <div className="lg:px-20 md:px-6 px-4 md:py-16 py-12">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-darkSecondary text-center">Products</h1>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">

                    <div className='hidden md:flex lg:flex absolute w-[285px] h-[285px] -left-5 -top-5 bg-primary pb-5 pr-5 p-5 items-start justify-start'>
                        <img className='flex' src={vector} alt="olis vector" />
                    </div>

                    <img className='lg:hidden md:hidden flex absolute left-[.1px] top-[.1px]' src={vector} alt="olis vector" />

                    <div className="relative items-center flex justify-center p-8">
                        <div className="flex justify-center items-center">
                            <img ref={el => img1 = el} src={imgs1} alt="A chair with designed back" role="img" />
                        </div>
                        <button ref={el => box1 = el} className='absolute w-[70%] py-4 bottom-16 text-lg font-semibold bg-white text-darkSecondary z-10'>Lily</button>
                    </div>

                    <div className="relative items-center flex justify-center p-8">
                        <div className="flex justify-center items-center">
                            <img ref={el => img2 = el} src={imgs4} alt="A chair with designed back" role="img" />
                        </div>
                        <button ref={el => box2 = el} className='absolute w-[70%] py-4 bottom-16 text-lg font-semibold bg-white text-darkSecondary z-10'>Josephine</button>
                    </div>

                    <div className="relative items-center flex justify-center p-8">
                        <div className="flex justify-center items-center">
                            <img ref={el => img3 = el} src={imgs8} alt="A chair with designed back" role="img" />
                        </div>
                        <button ref={el => box3 = el} className='absolute w-[70%] py-4 bottom-16 text-lg font-semibold bg-white text-darkSecondary z-10'>Ruby</button>
                    </div>
                </div>

                <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">

                    <div className="relative items-center flex justify-center p-8">
                        <div className="flex justify-center items-center">
                            <img ref={el => img4 = el} src={imgs12} alt="A chair with designed back" role="img" />
                        </div>
                        <button ref={el => box4 = el} className='absolute w-[70%] py-4 bottom-16 text-lg font-semibold bg-white text-darkSecondary z-10'>Peaches</button>
                    </div>

                    <div className="relative items-center flex justify-center p-8">
                        <div className="flex justify-center items-center">
                            <img ref={el => img5 = el} src={imgs13} alt="A chair with designed back" role="img" />
                        </div>
                        <button ref={el => box5 = el} className='absolute w-[70%] py-4 bottom-16 text-lg font-semibold bg-white text-darkSecondary z-10'>Mercy</button>
                    </div>

                    <div className="relative items-center flex justify-center p-8">
                        <div className="flex justify-center items-center">
                            <img ref={el => img6 = el} src={imgs1} alt="A chair with designed back" role="img" />
                        </div>
                        <button ref={el => box6 = el} className='absolute w-[70%] py-4 bottom-16 text-lg font-semibold bg-white text-darkSecondary z-10'>Lily</button>
                    </div>

                    <div className='hidden md:flex lg:flex absolute w-[285px] h-[285px] -right-5 -bottom-5 items-center justify-center p-5 pt-[11rem] pl-36 bg-primary -z-10'>
                        <img className='flex' src={vector} alt="olis vector" />
                    </div>
                    <img className='lg:hidden md:hidden flex absolute right-[.1px] bottom-[.1px] -z-10' src={vector} alt="olis vector" />
                </div>
            </div>
        </div>
    )
}

export default Products