import React from 'react'
import code from '../assets/code.jpg'
const Sconstanza = () => {
    return (
        <div className='bg-white w-full py-16 px-4  font-serif'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={code} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase font-bold text-[#eab676] py-2'>data analytics dashboard</p>
                    <h1 className='uppercase font-bold md:4xl sm:3xl text-xl'>  manage data analytics centreally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ipsam error illo necessitatibus? Facere debitis laudantium recusandae nihil et soluta dicta? Nobis officia explicabo libero deserunt cum ad illo.</p>
                    <button className='font-bold py-2 bg-[#000300] md:mx-0 rounded-full w-[200px] mx-auto my-6 text-white'>Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default Sconstanza
