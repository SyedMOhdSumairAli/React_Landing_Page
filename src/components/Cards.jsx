import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
    return (
        <div className='w-full bg-white py-[10em] px-4 font-serif'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto bg-white' src={single} alt='/' />
                    <h1 className='font-bold text-2xl text-center py-6'>Single user</h1>
                    <p className='text-4xl text-center font-bold'>$150</p>
                    <div className='text-center font-medium'>
                        <p className='border-b py-2 mx-8 '>500 GB storage</p>
                        <p className='border-b py-2 mx-8'>1 Granted User</p>
                        <p className='border-b py-2 mx-8'>send up to 2 GB</p>
                    </div>
                    <button className='bg-[#eab676] w-[200px] rounded-md  font-medium my-6 mx-auto px-6 py-3 hover:bg-[#873e23]'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100 '>
                    <img className='w-20 mx-auto bg-transparent bg-white' src={double} alt='/' />
                    <h1 className='font-bold text-2xl text-center py-6'>Partnership</h1>
                    <p className='text-4xl text-center font-bold'>$199</p>
                    <div className='text-center font-medium'>
                        <p className='border-b py-2 mx-8 '>500 GB storage</p>
                        <p className='border-b py-2 mx-8'>1 Granted User</p>
                        <p className='border-b py-2 mx-8'>send up to 2 GB</p>
                    </div>
                    <button className='bg-black text-white w-[200px] rounded-md  font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto bg-white' src={triple} alt='/' />
                    <h1 className='font-bold text-2xl text-center py-6'>Group Accont</h1>
                    <p className='text-4xl text-center font-bold'>$399</p>
                    <div className='text-center font-medium'>
                        <p className='border-b py-2 mx-8 '>500 GB storage</p>
                        <p className='border-b py-2 mx-8'>1 Granted User</p>
                        <p className='border-b py-2 mx-8'>send up to 2 GB</p>
                    </div>
                    <button className='bg-[#eab676] w-[200px] rounded-md  font-medium my-6 mx-auto px-6 py-3 hover:bg-[#873e23]'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
