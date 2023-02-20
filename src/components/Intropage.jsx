import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Intropage = () => {

    let textIntro = useRef(null)
    let bgIntro = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)

    const timeline_intro = gsap.timeline();

    useEffect(() => {
        timeline_intro.from([box1, box2, box3, box4, box5],
            {
                duration: 1.5,
                width: 0,
                ease: 'expo.inOut',
                stagger: 0.6
            }), timeline_intro.from([textIntro], {
                opacity: 0,
                duration: 1,
                stagger: 0.4,
                ease: 'expo.in'
            }),
            timeline_intro.to([textIntro], {
                opacity: 0,
                duration: 1.5,
                ease: 'expo.in'
            }), timeline_intro.to([box1, box2, box3, box4, box5], {
                width: 0,
                delay: -1.5,
                duration: 1.5,
                ease: 'expo.in'
            }), timeline_intro.to([bgIntro], {
                width: 0,
                duration: 1.5,
                ease: 'expo.out'
            })
    })

    return (
        <div className='overflow-hidden'>
            <div ref={el => bgIntro = el} className='w-full h-full flex absolute inset-0 justify-center flex-col items-center z-50 bg-primary'>
                <h1 ref={el => textIntro = el} className=' text-5xl font-bold lg:text-6xl z-50 absolute bottom-10 px-2 text-darkSecondary introtext'>Olis Knitting</h1>
                <div className="containerIntro absolute w-[280px] h-[380px] left-[50%] top-[50%]">
                    <div ref={el => box1 = el} className="block b-1 absolute w-full h-full"></div>
                    <div ref={el => box2 = el} className="block b-2 absolute w-full h-full"></div>
                    <div ref={el => box3 = el} className="block b-3 absolute w-full h-full"></div>
                    <div ref={el => box4 = el} className="block b-4 absolute w-full h-full"></div>
                    <div ref={el => box5 = el} className="block b-5 absolute w-full h-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Intropage