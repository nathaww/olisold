import React, { useEffect, useRef } from 'react'
import imgs1 from '../assets/Slider/1.jpg'
import imgs4 from '../assets/Slider/4.jpg'
import imgs8 from '../assets/Slider/8.jpg'
import imgs12 from '../assets/Slider/12.jpg'
import imgs13 from '../assets/Slider/13.jpg'
import vector from '../assets/vector.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
import { useStateContext } from '../contexts/ContexProvider'
import Detail from './Detail'
gsap.registerPlugin(ScrollTrigger);

const Products = () => {

    const { productNo, setproductNo, detail, handleDetail } = useStateContext();

    let h1 = useRef(null);
    let p = useRef(null);
    let sec = useRef(null);
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
    let bg1 = useRef(null);
    let bg2 = useRef(null);
    let bg3 = useRef(null);
    let bg4 = useRef(null);
    let bg5 = useRef(null);
    let bg6 = useRef(null);

    useEffect(() => {
        const animation = gsap
            .timeline({
                defaults: {
                    ease: 'expo.inOut',
                    duration: 1,
                },
                scrollTrigger: {
                    trigger: sec,
                    start: 'top center',
                    markers: false
                }
            }).from([h1, p], {
                y: 40,
                duration: 1,
                stagger: .2,
            }).to([bg1, bg2, bg3], {
                delay: -.5,
                height: 0,
                duration: 1,
                stagger: .1,
            }).from([box1, box2, box3], {
                delay: -0.7,
                autoAlpha: 0,
                duration: 1,
            })
        // animation.timeScale(0.8)

        const animation4 = gsap
            .timeline({
                defaults: {
                    ease: 'expo.inOut',
                    duration: 1,
                },
                scrollTrigger: {
                    trigger: img4,
                    start: 'top center',
                    markers: false
                }
            }).to([bg4, bg5], {
                delay: -.5,
                height: 0,
                stagger: .1
            }).from([box4, box5], {
                delay: -0.7,
                autoAlpha: 0,
            })
        // animation4.timeScale(0.8)
    }, [])


    return (
        <section ref={el => sec = el} id='products'>

            {detail && <Detail />}

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col justify-center items-center gap-4 mb-8">
                        <div className='overflow-hidden'>
                            <h2 ref={el => h1 = el} className="text-darkSecondary text-center text-3xl lg:text-4xl font-bold">Some of our products</h2>
                        </div>
                        <div className='overflow-hidden'>
                            <p ref={el => p = el} className='text-darkPrimary'>We have you in mind as we make high-end, classy products tailored to your measurements, it’s simply couture with the word beauty imprinted on all our crafter's minds</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:gap-6 lg:mb-3">
                        <div className='flex justify-center my-2'>
                            <div className="group h-[500px] w-[420px] overflow-hidden flex justify-center relative mb-2 lg:mb-3 rounded">
                                <img ref={el => img1 = el} src={imgs1} alt="olis product" className="absolute w-full h-full rounded object-cover object-center group-hover:scale-110 transition duration-200" />
                                <div ref={el => bg1 = el} className='bg-white absolute inset-0 w-full h-full z-10'></div>

                                <button ref={el => box1 = el} onClick={() => { setproductNo(0), handleDetail() }} className='absolute rounded w-[90%] py-4 bottom-2 text-lg font-semibold bg-white text-darkSecondary z-10'>Lily</button>
                            </div>
                        </div>


                        <div className='flex justify-center my-2'>
                            <div className="group h-[500px] w-[420px] flex justify-center overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img ref={el => img2 = el} src={imgs4} alt="Photo by Galina N" className="absolute w-full h-full rounded object-cover object-top group-hover:scale-110 transition duration-200" />
                                <div ref={el => bg2 = el} className='bg-white absolute inset-0 w-full h-full z-10'></div>
                                <button ref={el => box2 = el} onClick={() => { setproductNo(1), handleDetail() }} className='absolute rounded w-[90%] py-4 bottom-2 text-lg font-semibold bg-white text-darkSecondary z-10'>Josephine</button>
                            </div>
                        </div>



                        <div className='flex justify-center my-2'>
                            <div className="group h-[500px] w-[420px] flex justify-center  overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img ref={el => img3 = el} src={imgs8} alt="olis product" className="absolute w-full h-full rounded object-cover object-center group-hover:scale-110 transition duration-500" />
                                <div ref={el => bg3 = el} className='bg-white absolute inset-0 w-full h-full z-10'></div>
                                <button ref={el => box3 = el} onClick={() => { setproductNo(2), handleDetail() }} className='absolute rounded w-[90%] py-4 bottom-2 text-lg font-semibold bg-white text-darkSecondary z-10'>Ruby</button>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row justify-center lg:gap-6">

                        <div className='flex justify-center my-2'>
                            <div className="group h-[500px] w-[420px] flex justify-center overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img ref={el => img4 = el} src={imgs12} alt="olis product" className="absolute w-full h-full rounded object-cover object-center group-hover:scale-110 transition duration-200" />
                                <div ref={el => bg4 = el} className='bg-white absolute inset-0 w-full h-full z-10'></div>
                                <button ref={el => box4 = el} onClick={() => { setproductNo(3), handleDetail() }} className='absolute rounded w-[90%] py-4 bottom-2 text-lg font-semibold bg-white text-darkSecondary z-10'>Lily</button>

                            </div>
                        </div>

                        <div className='flex justify-center my-2'>
                            <div className="group h-[500px] w-[420px] flex justify-center overflow-hidden relative mb-2 lg:mb-3 rounded">
                                <img ref={el => img5 = el} src={imgs13} alt="olis product" className="absolute w-full h-full rounded object-cover object-top group-hover:scale-110 transition duration-200" />
                                <div ref={el => bg5 = el} className='bg-white absolute inset-0 w-full h-full z-10'></div>
                                <button ref={el => box5 = el} onClick={() => { setproductNo(4), handleDetail() }} className='absolute rounded w-[90%] py-4 bottom-2 text-lg font-semibold bg-white text-darkSecondary z-10'>Mimi</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Products