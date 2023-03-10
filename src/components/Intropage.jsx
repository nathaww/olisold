import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import oli from '../assets/olis.png'

const Intropage = () => {

    let textIntro = useRef(null)
    let bgIntro = useRef(null)
    let box1 = useRef(null)
    let cont = useRef(null)

    const timeline_intro = gsap.timeline(
        {
            defaults: {
                ease: 'expo.inOut'
            }
        }
    );

    useEffect(() => {
        timeline_intro.from([textIntro],
            {
                duration: 1.5,
                y: '150%',
                stagger: 0.3
            }), timeline_intro.to([textIntro], {
                y: '-150%',
                autoAlpha: 0,
                duration: 1.5,
            }), timeline_intro.to([bgIntro, cont], {
                height: 0,
                delay: -1,
                duration: 1,
            })
        timeline_intro.timeScale(0.6)
    })

    return (
        <div className='overflow-hidden'>
            <div ref={el => bgIntro = el} className='w-full h-full flex fixed inset-0 justify-center flex-col items-center z-50 bg-darkSecondary'>
                <div ref={el => cont = el} className="containerIntro overflow-hidden absolute w-[320px] h-[320px] left-[50%] top-[50%]">
                    <img ref={el => textIntro = el} src={oli} className="object-cover object-center w-full h-full" alt="oli's logo" />
                </div>
            </div>
        </div>
    )
}

export default Intropage