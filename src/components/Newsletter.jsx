import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full text-white font-serif px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='text-xl md:text-4xl sm:text-3xl font-bold py-6'>Want tips & tricks to optimize your flow?</h1>
                    <p> sing upto our newsletter and stay up date.</p>
                </div>
                <div className='py-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='w-full rounded-md text-black flex p-3' type='email' placeholder='Enter Email' />
                        <button className='bg-[#eab676] rounded-md w-[200px] ml-4 text-black font-bold py-3 px-6 my-6 hover:bg-[#873e23] '>Notify Me</button>
                    </div>
                    <p>we care bout the protection of your data.Read our<span className='text-[#eab676] underline '>Privacy Policy.</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
