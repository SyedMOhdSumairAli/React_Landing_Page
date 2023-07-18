import React from 'react'
import Typed from 'react-typed';

const Content = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] w-full h-screen text-center justify-center mx-auto flex flex-col mt-[-96px] font-serif'>
                <p className='text-[#eab676] uppercase font-bold p-2 '>Growing with data analytics</p>
                <h1 className='uppercase font-bold  md:text-7xl sm:text-6xl text-4xl md:py-6'>grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:5xl sm:4xl text-xl font-bold py-4'>Fast , flexible financing for</p>
                    <Typed className='md:5xl sm:4xl text-xl font-bold pl-2' strings={['BTB', 'BTC', 'SASS']} typeSpeed={130} backSpeed={120} loop />
                </div>
                <p className='md:text-2xl sm:xl text-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SaSS platform</p>
                <button className='font-bold py-2 bg-[#eab676] hover:bg-[#873e23] rounded-full w-[200px] mx-auto my-6 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Content
