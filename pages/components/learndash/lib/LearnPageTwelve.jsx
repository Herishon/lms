'use client';

// npm package
import React from 'react';

// components
import LearnDashNav from '@/pages/components/header/LearnDashNav';
import Button from '@/pages/components/button/Button';
import IconArrowLeft from '@/public/icons/IconArrowLeft';
import IconGroup from '@/public/icons/IconGroup';

export default function LearnPageTwelve() {


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
                            <IconGroup width="28" color="#77AC0E" />
                            <p className='subtitle-1 text-lms-citrus opacity-90'>Quiz for “The 7 Steps of machine Learning”</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col mx-auto'>

                <div className='w-9/10 bg-lms-black-squeeze mx-auto mt-[73px] mb-8'>
                    <div className='bg-[#fffffff0] w-[870px] rounded-t-3xl box_shadow_4'>
                        <div className='pb-[34px]'>
                            <h1 className='headline-4 text-lms-pine-tree p-[32px] opacity-90'>The 7 Steps of Machine Learning</h1>
                            <p className='headline-6 text-lms-pine-tree mt-6 px-[32px] opacity-90'>Results</p>
                            <p className='subtitle-2 text-lms-pine-tree mt-6 px-[32px] opacity-90'>0 of 3 Questions answered correctly</p>
                            <p className='subtitle-2 text-lms-pine-tree mt-2 px-[32px] opacity-90'>Your time: 00:00:30</p>
                            <p className='subtitle-2 text-lms-pine-tree mt-2 px-[32px] opacity-90'>Time has elapsed</p>
                            <p className='subtitle-1 w-[340px] bg-lms-black-squeeze text-lms-pine-tree text-center mx-auto mt-6 px-4 py-[17px] opacity-90'>You have reached 2 of 4 points(s), (50%)</p>
                        </div>
                    </div>
                    <div className='bg-[#ffffff80] flex justify-between items-center mb-[29px] p-[32px] rounded-b-3xl box_shadow_4'>
                        <Button buttonText="view questions" className="bg-lms-atlantis button" />
                        <Button buttonText="restart quiz" className="bg-transparent border border-lms-pine-tree button" />
                    </div>
                </div>

                <div>
                    <h2 className='headline-6 text-lms-pine-tree'>Questions</h2>
                    <div className='w-9/10 bg-lms-black-squeeze mx-auto mt-8'>
                        <div className='bg-[#fffffff0] w-[870px] rounded-3xl box_shadow_4'>
                            <div>
                                <div className='text-lms-pine-tree p-[32px]'>
                                    <p className='headline-6 text-lms-pine-tree'>
                                        “Using data” is what is typically referred to as “training”, while “answering questions” is referred to as?
                                    </p>
                                    <form className='mt-6 space-y-3 mb-[32px]' action="#" method='POST'>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="a" id="a" />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>a. Making Predictions</span>
                                        </div>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="b" id="b" checked />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>b. Interference</span>
                                        </div>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="c" id="c" />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>c. Interence</span>
                                        </div>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="d" id="d" />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>d. a&c both</span>
                                        </div>
                                    </form>
                                    <p className='headline-6 bg-[#77ac0e33] text-lms-citrus text-center p-[17px] opacity-90'>Correct</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-9/10 bg-lms-black-squeeze mx-auto mt-2 mb-[595px]'>
                        <div className='bg-[#fffffff0] w-[870px] rounded-3xl box_shadow_4'>
                            <div>
                                <div className='text-lms-pine-tree p-[32px]'>
                                    <p className='headline-6 text-lms-pine-tree'>
                                        “Using data” is what is typically referred to as “training”, while “answering questions” is referred to as?
                                    </p>
                                    <form className='mt-6 space-y-3 mb-[32px]' action="#" method='POST'>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="a" id="a" />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>a. Making Predictions</span>
                                        </div>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="b" id="b" checked />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>b. Interference</span>
                                        </div>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="c" id="c" />
                                            <span className='subtitle-1 text-[#CA3C3C] opacity-90'>c. Interence</span>
                                        </div>
                                        <div className='bg-lms-black-squeeze h-[44px] px-3 rounded-xl flex items-center gap-3'>
                                            <input className='w-6 h-6' type="radio" name="d" id="d" />
                                            <span className='subtitle-1 text-lms-pine-tree opacity-90'>d. a&c both</span>
                                        </div>
                                    </form>
                                    <p className='headline-6 bg-[#ca3c3c33] text-lms-mahogany text-center p-[17px] opacity-90'>Correct</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            

        </div>
    </>
  )
}
