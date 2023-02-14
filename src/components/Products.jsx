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
import vector2 from '../assets/vector2.png'
import gsap from 'gsap'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Products = () => {


    // const timeline_intro = gsap.timeline();

    // useEffect(() => {
    //     timeline_intro.to([img1, img2],
    //         {
    //             duration: 1.5,
    //             width: 0,
    //             ease: 'expo.inOut',
    //             stagger: 2
    //         }),
    //         timeline_intro.to([img4, img5],
    //             {
    //                 delay: -3.5,
    //                 duration: 1.5,
    //                 width: 0,
    //                 ease: 'expo.inOut',
    //                 stagger: 2
    //             }),
    //         timeline_intro.to([img7, img8],
    //             {
    //                 delay: -3.5,
    //                 duration: 1.5,
    //                 width: 0,
    //                 ease: 'expo.inOut',
    //                 stagger: 2
    //             })
    // })

    return (
        <div className='py-12 lg:py-20 bg-darkSecondary relative flex flex-col lg:flex-row xl:flex-row'>
            <img className='absolute bottom-0 w-full flex' src={vector2} alt="olis vector" />
            <div className='py-4 md:py-12 lg:py-24 px-2 flex flex-col justify-center items-center'>
                <h2 className="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Best Seller Products</h2>
                <p className='text-primary text-center text-lg px-4'>We create every stitch and knot with lots of love and time thinking of you all the while.</p>
                <button className='border border-primary px-8 py-2 mt-6 text-primary cursor-pointer'>Get one</button>
            </div>
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={15} visibleSlides={3} step={3} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 rounded-full right-[50%] -bottom-14 mx-1 p-2.5 bg-primary focus:outline-none focus: focus:ring-2 focus:ring-offset-2 focus:ring-secondary cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="#361816" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-3 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Lily - 10,000 ETB</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs2} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs4} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Josephine - 50,000 ETB</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs5} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs6} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs7} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Ruby - 20,000 ETB</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs8} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs9} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs10} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Peaches - 1,000,000 ETB</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs11} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs12} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={12}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs13} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Black Tulips - 1B ETB</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={13}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs14} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={14}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs15} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 left-[50%] -bottom-14 mx-1 p-2.5 rounded-full bg-primary focus:outline-none focus: focus:ring-2 focus:ring-offset-2 focus:ring-secondary" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="#361816" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>




                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={15} visibleSlides={2} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 1</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs2} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs4} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs5} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs6} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs7} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs8} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs9} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs10} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs11} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs12} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={12}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={13}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs4} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={14}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs5} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>




                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={22} visibleSlides={1} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs1} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 1</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs2} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={12}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs3} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={13}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs4} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={14}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs5} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={15}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs6} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary">Catalog 2</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={16}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs7} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={17}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs8} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={18}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs9} alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-darkPrimary">Catalog 3</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={19}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs10} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={20}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs11} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={21}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={imgs12} alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="  bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-darkPrimary"></h2>

                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Products