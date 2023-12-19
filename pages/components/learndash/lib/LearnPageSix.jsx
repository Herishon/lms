'use client';

// npm package
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import Button from '@/pages/components/button/Button';
import IconGroup from '@/public/icons/IconGroup';

export default function LearnPageSix() {

  return (
    <>
        <Navbar />
        <div className='container'>
            <div className='max-w-[869px] bg-white mx-auto mt-[73px] pb-[10px] rounded-3xl box_shadow_4'>
                <h1 className='xsm:text-[25px] sm:text-[28px] md:text-[30px] lg:text-[35px] headline-4 text-lms-pine-tree opacity-90 px-8 pt-8 pb-10'>The 7 Steps of machine Learning</h1>
                <div>
                    <div className='bg-lms-pine-tree p-8'>
                        <div className='flex xsm:flex-col sm:flex-row justify-between gap-y-8'>
                            <div className='flex xsm:flex-row sm:flex-col justify-center space-y-3'>
                                <p className='subtitle-1 text-white opacity-80'>Current Status</p>
                                <p className='bg-lms-atlantis subtitle-2 text-lms-pine-tree px-4 py-2 rounded-[18px]'>Completed</p>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <p className='subtitle-1 text-white opacity-80'>Progress</p>
                                <div className='max-w-[294px] w-full h-[20px] border border-lms-atlantis rounded-xl flex items-center'>
                                    <div className='w-[100%] h-2 bg-lms-atlantis mx-[6px] rounded-xl'></div>
                                </div>
                                <p className='subtitle-2 text-white flex justify-between'>
                                    <span className='text-lms-atlantis'>100% Complete</span>
                                    <span>3 of 3 completed</span>
                                </p>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <p className='subtitle-1 text-white opacity-80'>Certificate</p>
                                <Button buttonText="download" className="bg-lms-gamboge text-lms-pine-tree button" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='max-w-[806px] h-full mx-[32px] mt-8 space-y-5 xsm:line-clamp-5 sm:line-clamp-none'>
                            <p className='headline-7 text-lms-pine-tree'>
                                Welcome to &quot;The 7 Steps of Machine Learning&quot; training!
                            </p>
                            <p className='headline-7 text-lms-pine-tree'>
                                Machine learning is an exciting and rapidly growing field that is transforming the way we  live and work. It involves using algorithms and statistical models to enable computers to learn from data, and make predictions or decisions without being explicitly programmed.
                            </p>
                            <p className='headline-7 text-lms-pine-tree'>
                                This training is presented to you by Google Cloud Tech Youtube channel, where Yufeng Gau a Developer Advocate explains what is Machine learning? The art, science and tools behind machine learning. The importance of machine learning and much more.
                            </p>
                            <p className='headline-7 text-lms-pine-tree'>
                                Prerequisite/Co-requisite: Course name
                            </p>
                            <p className='headline-7 text-lms-pine-tree'>
                                Groups: SQA Training Group 1
                            </p>
                            <p className='headline-7 text-lms-pine-tree'>
                                Start your training my clicking on What is Machine Learning under course content below.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-[120px]'>
                <h3 className='xsm:text-[25px] sm:text-[28px] md:text-[30px] lg:text-[35px] max-w-[869px] mx-auto mt-[60px] headline-4 opacity-90'>Course Content</h3>
                <ul className='max-w-[869px] bg-white mx-auto mt-[32px] rounded-3xl box_shadow_4'>
                <li className='flex items-center gap-x-4 xsm:p-[15px] md:p-[32px] border-b'>
                        <input className='xsm:w-3 md:w-4 lg:w-6 xsm:h-3 md:h-4 lg:h-6' type="radio" name="rd1" id="rd1" checked />
                        <p className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 text-lms-pine-tree opacity-90'>What is Machine Learning</p>
                    </li>
                    <li className='flex items-center gap-x-4 xsm:p-[15px] md:p-[32px] border-b'>
                        <input className='xsm:w-3 md:w-4 lg:w-6 xsm:h-3 md:h-4 lg:h-6' type="radio" name="rd2" id="rd2" checked/>
                        <p className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 text-lms-pine-tree opacity-90'>The 7 Steps of Machine Learning</p>
                    </li>
                    <li className='flex items-center gap-x-4 xsm:p-[15px] md:p-[32px] border-b'>
                        <IconGroup />
                        <p className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 text-lms-pine-tree opacity-90'>Quiz for “The 7 Steps of machine Learning”</p>
                    </li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
  )
}
