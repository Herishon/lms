'use client';

// npm packages
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// components
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import IconCategory from '@/public/icons/IconCategory';
import IconArrowDown from '@/public/icons/IconArrowDown';


export default function MyTrainingsList() {

    // img
    const image1 = '/img/img1.jpg';
    const image2 = '/img/img1.jpg';

    return (
        <>
        <Navbar />
            <div className='container'>
                <div className='w-[1094px] flex justify-between items-center mx-auto mt-[60px]'>
                    <h1 className='headline-3 text-lms-pine-tree'>My Trainings</h1>
                    <div className='flex items-center gap-[41px]'>
                        <div className='w-12 h-12 bg-white flex justify-center items-center rounded-xl box_shadow_5'>
                            <Link href="/components/my_trainings/Grid">
                                <IconCategory />
                            </Link>
                        </div>
                        <div className='flex items-center gap-[10px] bg-white px-6 py-3 rounded-xl box_shadow_5'>
                            <p className='subtitle-2 text-lms-pine-tree'>Newest</p>
                            <IconArrowDown />
                        </div>
                    </div>
                </div>
                
                <div className='mt-[60px] mb-[120px]'>
                    <div className='flex flex-col justify-center items-center gap-8'>

                        {/* Card */}
                        <Link href="/components/learndash/LearnDash">
                            <div className='w-[1094px] h-[172px] bg-white flex rounded-3xl box_shadow_4'>
                                <div className='relative'>
                                    <Image className='h-[172px] object-cover rounded-3xl' src={ image1 } width={ 306 } height={ 172 } alt="logo" />
                                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                                    <span className='bg-lms-citrus px-2 py-1 rounded-[10px] absolute bottom-[70px] left-[36px] overline_text text-white uppercase'>20 days left</span>
                                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Development</span>
                                </div>
                                <div className='px-8 pb-8 pt-6'>
                                    <h3 className='headline-6 text-lms-pine-tree'>
                                        Explore Management Concepts through Metaphor and Music
                                    </h3>
                                    <div className='flex justify-center items-center mt-6 gap-8'>
                                        <p className="subtitle-2 text-lms-atlantis">0%</p>
                                        <div className="w-[671px] h-[24px] border border-lms-atlantis rounded-xl">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                        
                        {/* Card */}
                        <Link href="learndash/">
                            <div className='w-[1094px] h-[172px] bg-white flex rounded-3xl box_shadow_4'>
                                <div className='relative'>
                                    <Image className='h-[172px] object-cover rounded-3xl' src={ image2 } width={ 306 } height={ 172 } alt="logo" />
                                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                                    <span className='bg-[#E4A80E] px-2 py-1 rounded-[10px] absolute bottom-[70px] left-[36px] overline_text text-white uppercase'>10 days left</span>
                                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Design</span>
                                </div>
                                <div className='px-8 pb-8 pt-6'>
                                    <h3 className='headline-6 text-lms-pine-tree'>
                                        Build Wireframes and Low-Fidelity Prototypes
                                    </h3>
                                    <div className='flex justify-center items-center mt-6 gap-8'>
                                        <p className="subtitle-2 text-lms-atlantis">33%</p>
                                        <div className="w-[671px] h-[24px] border border-lms-atlantis rounded-xl flex items-center">
                                            <div className="w-[33%] h-3 bg-lms-atlantis mx-[6px] rounded-xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                        {/* Card */}
                        <Link href="learndash/">
                            <div className='w-[1094px] h-[172px] bg-white flex rounded-3xl box_shadow_4'>
                                <div className='relative'>
                                    <Image className='h-[172px] object-cover rounded-3xl' src={ image1 } width={ 306 } height={ 172 } alt="logo" />
                                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                                    <span className='bg-lms-mahogany px-2 py-1 rounded-[10px] absolute bottom-[70px] left-[36px] overline_text text-white uppercase'>0 days left</span>
                                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>HR</span>
                                </div>
                                <div className='px-8 pb-8 pt-6'>
                                    <h3 className='headline-6 text-lms-pine-tree'>
                                        Explore Management Concepts through Metaphor and Music
                                    </h3>
                                    <div className='flex justify-center items-center mt-6 gap-8'>
                                        <p className="subtitle-2 text-lms-atlantis">80%</p>
                                        <div className="w-[671px] h-[24px] border border-lms-atlantis rounded-xl flex items-center">
                                            <div className="w-[80%] h-3 bg-lms-atlantis mx-[6px] rounded-xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}