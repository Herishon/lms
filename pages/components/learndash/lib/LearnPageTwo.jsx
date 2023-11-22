'use client';

// npm package
import React from 'react';
import Image from 'next/image';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import Button from '@/pages/components/button/Button';
import IconGroup from '@/public/icons/IconGroup';

export default function LearnPageTwo() {
    
    const imgPortonics = "/img/portonics.jpg";

  return (
    <>
        <Navbar />
        <div className='container'>
            <div className='w-[869px] bg-white mx-auto mt-[73px] pb-[10px] rounded-3xl box_shadow_4'>
                <h1 className='headline-4 text-lms-pine-tree opacity-90 px-8 pt-8 pb-10'>The 7 Steps of machine Learning</h1>
                <div>
                    <div className='bg-lms-pine-tree p-8'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col space-y-3'>
                                <p className='subtitle-1 text-white opacity-80'>Current Status</p>
                                <p className='bg-[#50534a] subtitle-2 text-white px-4 py-2 rounded-[18px]'>Not Enrolled</p>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <p className='subtitle-1 text-white opacity-80'>Price</p>
                                <p className='headline-6 text-white'>Free</p>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <p className='subtitle-1 text-white opacity-80'>Get Started</p>
                                <Button buttonText="take this course" className="bg-lms-atlantis text-lms-pine-tree button" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[806px] h-[478px] bg-[#848484] mx-[32px] mt-8 mb-[32px]'>
                            <Image src={ imgPortonics } width={ 806 } height={ 477 } alt="Portonics" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-[120px]'>
                <h3 className='w-[869px] mx-auto mt-[60px] headline-4 opacity-90'>Course Content</h3>
                <ul className='w-[869px] bg-white mx-auto mt-[32px] rounded-3xl box_shadow_4'>
                    <li className='flex items-center gap-x-4 p-[32px] border-b'>
                        <input className='w-6 h-6' type="radio" name="rd1" id="rd1" />
                        <p className='headline-6 text-lms-pine-tree opacity-90'>What is Machine Learning</p>
                    </li>
                    <li className='flex items-center gap-x-4 p-[32px] border-b'>
                        <input className='w-6 h-6' type="radio" name="rd2" id="rd2" />
                        <p className='headline-6 text-lms-pine-tree opacity-90'>The 7 Steps of Machine Learning</p>
                    </li>
                    <li className='flex items-center gap-x-4 p-[32px] border-b'>
                        <IconGroup />
                        <p className='headline-6 text-lms-pine-tree opacity-90'>Quiz for “The 7 Steps of machine Learning”</p>
                    </li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
  )
}
