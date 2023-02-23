import React, { useState } from 'react'
import { useStateContext } from '../contexts/ContexProvider'
import { data } from '../data'

const Detail = () => {

    const { productNo, setproductNo, handleDetail } = useStateContext();

    const [selectedImg, setselectedImg] = useState(0);


    return (
        <>
            <div onClick={() => { handleDetail()}} className='fixed z-20 inset-0 bg-[rgba(0,0,0,0.7)]' />
            <div className='modal transition duration-150 bg-white border-2 border-gray-100 fixed top-[50%] left-[50%] h-[90%] py-4 overflow-scroll  w-[80%] mx-auto z-20'>

                <button onClick={() => { handleDetail(), setproductNo("") }} className='absolute right-10 top-5 font-bold text-2xl'>X</button>
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="grid lg:grid-cols-5 gap-4 relative py-1 px-5">


                            <div className="flex lg:flex-col order-last lg:order-none gap-1">

                                <div  className=" overflow-hidden cursor-pointer">

                                    <img src={data[productNo]?.Images[0]} alt="img" onClick={(e) => { setselectedImg(0) }} className="w-full h-full object-cover object-center" />

                                </div>

                                <div  className="overflow-hidden cursor-pointer">

                                    <img src={data[productNo]?.Images[1]} alt="img" onClick={(e) => { setselectedImg(1) }} className="w-full h-full object-cover object-center" />

                                </div>

                                <div  className="overflow-hidden cursor-pointer">

                                    <img src={data[productNo]?.Images[2]} alt="img" onClick={(e) => { setselectedImg(2) }} className="w-full h-full object-cover object-center" />

                                </div>

                            </div>

                            <div className="lg:col-span-4 overflow-hidden relative transition-transform duration-150">
                                <img src={data[productNo]?.Images[selectedImg]} alt="selected img" className="object-cover object-center" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">

                            <div className="mb-2 md:mb-3">
                                <span className="inline-block text-gray-500 mb-0.5">Oli's</span>
                                <h2 className="text-darkSecondary text-2xl lg:text-3xl font-bold">{data[productNo].Name}</h2>
                            </div>

                            <div className="mb-4 ">
                                <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Pattern type</span>

                                <div className="flex flex-wrap">
                                    <span className="text-gray-600 text-md">{data[productNo].Patterntype}</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 mb-3'>
                                <div className="mb-4 ">
                                    <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Sleeve design</span>

                                    <div className="flex flex-wrap">
                                        <span className="text-gray-600 text-md">{data[productNo].Sleevedesign}</span>
                                    </div>
                                </div>
                                <div className="mb-4 ">
                                    <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Size</span>

                                    <div className="flex flex-wrap">
                                        <span className="text-gray-600 text-md">{data[productNo].Size}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 mb-3'>
                                <div className="mb-4 ">
                                    <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Fit type</span>

                                    <div className="flex flex-wrap">
                                        <span className="text-gray-600 text-md">{data[productNo].Fittype}</span>
                                    </div>
                                </div>
                                <div className="mb-4 ">
                                    <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Fabric</span>

                                    <div className="flex flex-wrap">
                                        <span className="text-gray-600 text-md">{data[productNo].Fabric}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-2'>
                                <div className="mb-4 ">
                                    <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Color</span>

                                    <div className="flex flex-wrap">
                                        <span className="text-gray-600 text-md">{data[productNo].Color}</span>
                                    </div>
                                </div>
                                <div className="mb-4 ">
                                    <span className="inline-block text-darkSecondary text-lg font-semibold mb-1">Type</span>

                                    <div className="flex flex-wrap">
                                        <span className="text-gray-600 text-md">{data[productNo].Type}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail