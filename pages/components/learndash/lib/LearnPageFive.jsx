'use client';

// npm package
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import IconGroup from '@/public/icons/IconGroup';

export default function LearnPageFive() {

  return (
    <>
        <Navbar />
        <div className='container'>
            <div className='w-[869px] bg-white mx-auto mt-[73px] pb-[10px] rounded-3xl box_shadow_4'>
                <h1 className='headline-4 text-lms-pine-tree opacity-90 px-8 pt-8 pb-10'>The 7 Steps of machine Learning</h1>
                <div>
                    <div className='bg-lms-pine-tree p-8'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col justify-center space-y-3'>
                                <p className='bg-[#50534a] subtitle-2 text-white px-4 py-2 rounded-[18px]'>In Progress</p>
                            </div>
                            <div className='flex flex-col w-[500px] space-y-5'>
                                <div className='w-[294px] h-[20px] border border-lms-atlantis rounded-xl flex items-center'>
                                    <div className='w-[33%] h-2 bg-lms-atlantis mx-[6px] rounded-xl'></div>
                                </div>
                                <p className='subtitle-2 text-white'>
                                    <span className='text-lms-atlantis'>0% Complete</span>&nbsp;&nbsp; Last activity on June 16, 2023 12:14 pm
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[806px] h-[358px] mx-[32px] mt-8 space-y-5'>
                            <p className='headline-7 text-lms-pine-tree'>
                                Welcome to &quot;The 7 Steps of Machine Learning&quot; training!
                            </p>
                            <p className='headline-7 text-lms-pine-tree'>
                                Machine learning is an exciting and rapidly growing field that is transforming the way we live and work. It involves using algorithms and statistical models to enable computers to learn from data, and make predictions or decisions without being explicitly programmed.
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
                <h3 className='w-[869px] mx-auto mt-[60px] headline-4 opacity-90'>Course Content</h3>
                <ul className='w-[869px] bg-white mx-auto mt-[32px] rounded-3xl box_shadow_4'>
                    <li className='flex items-center gap-x-4 p-[32px] border-b'>
                        <input className='w-6 h-6' type="radio" name="rd1" id="rd1" checked/>
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
