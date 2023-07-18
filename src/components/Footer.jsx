import React from 'react';
import {
    BiLogoInstagram,
    BiLogoFacebookCircle,
    BiLogoWhatsapp,
    BiLogoGithub
} from 'react-icons/bi';


const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 font-serif text-gray-200 '>
            <div>
                <h1 className='w-full font-bold text-[#eab676] text-3xl'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque labore quo architecto rem facere
                    deleniti reprehenderit, nulla culpa. Voluptatibus tempora expedita quaerat suscipit ut beatae voluptatum
                    illum assumenda saepe!</p>
                <div className='flex md:w-[75%] my-4 justify-between'>
                    <BiLogoFacebookCircle size={30} />
                    <BiLogoInstagram size={30} />
                    <BiLogoWhatsapp size={30} />
                    <BiLogoGithub size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-2'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutaions</h6>
                    <ul>
                        <li className='py-2 text-sm'> Anslytics</li>
                        <li className='py-2 text-sm'> Marketing</li>
                        <li className='py-2 text-sm'> commerce</li>
                        <li className='py-2 text-sm'> Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'> Pricing</li>
                        <li className='py-2 text-sm'> Documentaions</li>
                        <li className='py-2 text-sm'> Guides</li>
                        <li className='py-2 text-sm'> API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Companys</h6>
                    <ul>
                        <li className='py-2 text-sm'> About</li>
                        <li className='py-2 text-sm'> Jobs</li>
                        <li className='py-2 text-sm'> Press</li>
                        <li className='py-2 text-sm'> Blogs</li>
                        <li className='py-2 text-sm'> careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'> Policy</li>
                        <li className='py-2 text-sm'> Terms</li>
                        <li className='py-2 text-sm'> Claim</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer