'use client';

// npm package
import React from 'react';

// components
import LearnDashNav from '@/pages/components/header/LearnDashNav';
import Button from '@/pages/components/button/Button';
import IconGroup from '@/public/icons/IconGroup';
import IconArrowLeft from '@/public/icons/IconArrowLeft';

export default function LearnPageNine() {

  return (
    <>
        <LearnDashNav />
        <div className='flex'>
            <div className='w-3/12 bg-[#fffffff0] box_shadow_4'>
                <div className='bg-lms-atlantis px-5 py-[32px] flex items-center justify-between gap-[43px]'>
                    <h2 className='headline-6 text-lms-pine-tree'>The 7 Steps of Machine Learning</h2>
                    <div className='w-10 h-10 bg-[#77ac0e] rounded-full'>
                        <IconArrowLeft />
                    </div>
                </div>
                <div className='px-[20px] py-[34px]'>
                    <ul className=''>
                        <li className='flex items-center gap-x-4 p-[32px] border-b border-[#F2F2F1]'>
                            <input className='w-6 h-6' type="radio" name="rd1" id="rd1" checked />
                            <p className='subtitle-1 text-lms-pine-tree opacity-90'>What is Machine Learning</p>
                        </li>
                        <li className='flex items-center gap-x-4 p-[32px] border-b border-[#F2F2F1]'>
                            <input className='w-6 h-6' type="radio" name="rd2" id="rd2" checked />
                            <p className='subtitle-1 text-lms-pine-tree opacity-90'>The 7 Steps of Machine Learning</p>
                        </li>
                        <li className='flex items-center gap-x-4 p-[32px]'>
                            <IconGroup />
                            <p className='subtitle-1 text-lms-pine-tree opacity-90'>Quiz for “The 7 Steps of machine Learning”</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-9/10 bg-lms-black-squeeze mx-auto mt-[73px] mb-[595px]'>
                <div className='bg-[#fffffff0] w-[870px] rounded-t-3xl box_shadow_4'>
                    <div>
                        <h1 className='headline-4 text-lms-pine-tree p-[32px] opacity-90'>The 7 Steps of Machine Learning</h1>
                        <div className='pb-10'>
                            <div className='bg-lms-pine-tree flex items-center px-[32px] py-[19px]'>
                                <h5 className='headline-7 text-lms-citrus'>The 7 Steps of Machine Learning</h5>
                                <IconArrowLeft width="24" color="#ffffff80" />
                                <h5 className='headline-7 text-lms-citrus'>The 7 Steps of Machine Learning</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffffff80] flex justify-between items-center mb-[29px] p-[32px] rounded-b-3xl box_shadow_4'>
                    <Button buttonText="start quiz" className="bg-lms-atlantis ml-auto button" />
                </div>
            </div>
        </div>
    </>
  )
}
