'use client';

// npm package
import React from 'react';

// components
import LearnDashNav from '@/pages/components/header/LearnDashNav';
import Button from '@/pages/components/button/Button';
import IconArrowLeft from '@/public/icons/IconArrowLeft';
import IconGroup from '@/public/icons/IconGroup';
import IconPlay from '@/public/icons/IconPlay';
import IconChecked from '@/public/icons/svg/IconChecked';

export default function LearnPageEight() {

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
            <div className='w-9/10 bg-lms-black-squeeze mx-auto'>
                <div className='bg-[#fffffff0] w-[870px] mt-[73px] rounded-t-3xl box_shadow_4'>
                    <div>
                        <h1 className='headline-4 text-lms-pine-tree p-[32px] opacity-90'>The 7 Steps of Machine Learning</h1>
                        <div className='pb-10'>
                            <div className='bg-lms-pine-tree flex items-center px-[32px] py-[19px]'>
                                <h5 className='headline-7 text-lms-citrus'>The 7 Steps of Machine Learning</h5>
                                <IconArrowLeft width="24" color="#ffffff80" />
                                <h5 className='headline-7 text-lms-citrus'>The 7 Steps of Machine Learning</h5>
                                <div className='ml-auto'>
                                    <p className='bg-[#50534a] subtitle-2 text-white px-4 py-2 rounded-[18px]'>Complete</p>
                                </div>
                            </div>
                            <p className='headline-7 text-lms-pine-tree p-[32px]'>
                                Got lots of data? Machine learning can help! In this section of Cloud AI Adventures, Yufeng Guo explains machine learning from the ground up, using concrete examples.
                            </p>
                            <div className='w-[644px] h-[363px] bg-lms-pine-tree rounded-3xl flex justify-center items-center mx-auto'>
                                <div className='w-[64px] h-[64px] bg-lms-atlantis flex justify-center items-center rounded-full'>
                                    <IconPlay />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ffffff80] flex justify-between items-center mb-[29px] p-[32px] rounded-b-3xl box_shadow_4'>
                    <Button buttonText="back to course" className="bg-transparent border border-lms-pine-tree button" />
                    <div className='flex gap-[69px]'>
                        <div className='flex items-center gap-3'>
                            <IconChecked />
                            <span className='text-lms-pine-tree opacity-90 button'>Completed</span>
                        </div>
                        <Button buttonText="next lesson" className="bg-lms-atlantis button" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
