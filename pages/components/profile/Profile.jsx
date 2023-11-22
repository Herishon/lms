'use client';

// npm packages
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import Button from '@/pages/components/button/Button';


export default function Profile() {

    // icons
    const iconTrophy = '/icons/icon_trophy.png';
    const iconNumber1 = '/icons/icon_number_1.png';
    const iconMedal = '/icons/icon_medal.png';
   
    return (
        <>
        <Navbar />
            <div className='container'>
                <h1 className='headline-4 text-lms-pine-tree text-center my-[60px]'>My Profile</h1>
                
                {/* profile */}
                <div>
                    <div className='w-[644px] h-auto bg-[#fffffff0] mx-auto rounded-3xl'>
                        <div className='pt-12'>
                            <span className='w-[100px] h-[100px] bg-lms-atlantis rounded-full mx-auto flex justify-center items-center headline-4 text-lms-pine-tree'>M</span>
                            <h5 className='headline-6 text-lms-pine-tree text-center mt-4'>Mehedi Hasan</h5>
                            <Link href="/components/change_password/ChangePassword">
                                <Button buttonText="change password" className="bg-transparent border border-lms-pine-tree mx-auto mt-6 button" />
                            </Link>
                            
                        </div>
                        <div className='mt-8'>
                            <div className='bg-lms-pine-tree p-8 rounded-3xl flex justify-center gap-[72px]'>
                                <div className='flex flex-col items-center'>
                                    <span className='headline-4 text-lms-atlantis'>6</span>
                                    <span className='subtitle-1 text-white opacity-80 mt-3'>Courses</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='headline-4 text-lms-atlantis'>0</span>
                                    <span className='subtitle-1 text-white opacity-80 mt-3'>Completed</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='headline-4 text-lms-atlantis'>0</span>
                                    <span className='subtitle-1 text-white opacity-80 mt-3'>Certificate</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='headline-4 text-lms-atlantis'>0</span>
                                    <span className='subtitle-1 text-white opacity-80 mt-3'>Points</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* achivement */}
                <div className='w-[644px] h-auto bg-[#fffffff0] mx-auto mt-10 p-[32px] rounded-3xl'>
                    <h3 className='headline-6 text-lms-pine-tree text-center opacity-80'>My Achivements</h3>
                    <div className='flex justify-center mt-6 gap-[32px]'>
                        <div className='relative'>
                            <Image src={ iconTrophy } width={ 48 } height={ 48 } alt="trophy" />
                            <span className='bg-lms-atlantis p-[3px] rounded-full flex justify-center items-center absolute right-0 bottom-0 overline_text'>X2</span>
                        </div>
                        <div className='relative'>
                            <Image src={ iconNumber1 } width={ 48 } height={ 48 } alt="number 1" />
                            <span className='bg-lms-atlantis rounded-full p-[3px] flex justify-center items-center absolute right-0 bottom-0 overline_text'>X1</span>
                        </div>
                        <div className='relative'>
                            <Image src={ iconMedal } width={ 48 } height={ 48 } alt="medal" />
                            <span className='bg-lms-atlantis rounded-full p-[3px] flex justify-center items-center absolute right-0 bottom-0 overline_text'>X5</span>
                        </div>
                    </div>
                </div>

                {/* leaderboard */}
                <div className='w-[644px] h-auto bg-[#fffffff0] mx-auto mt-10 mb-[120px] p-[32px] rounded-3xl relative'>
                    <h3 className='headline-6 text-lms-pine-tree text-center opacity-80'>Leaderboard</h3>
                    <div className='flex justify-center mt-6 gap-6'>
                        <div className='group'>
                            <div className='relative'>
                                <span className='bg-[#DAB5FF] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>J</span>
                                <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                            </div>
                            {/* tooltip */}
                            <div className='hidden group-hover:flex absolute top-0 left-[76px]'>
                                <div className='bg-lms-black-squeeze p-4 rounded-xl flex items-center gap-4'>
                                    <div className='relative'>
                                        <span className='bg-[#DAB5FF] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>J</span>
                                         <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                                    </div>
                                    <div>
                                        <h5 className='subtitle-1 text-lms-pine-tree opacity-80'>Joshim</h5>
                                        <span className='bg-lms-atlantis text-lms-pine-tree text-[10px] font-semibold tracking-[0.15px] leading-normal px-2 py-1 rounded-[11px]'>1200 Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='relative'>
                                <span className='bg-[#71D5EB] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>D</span>
                                <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>2</span>
                                
                            </div>
                            {/* tooltip */}
                            <div className='hidden group-hover:flex absolute top-0 left-[140px]'>
                                <div className='bg-lms-black-squeeze p-4 rounded-xl flex items-center gap-4'>
                                    <div className='relative'>
                                        <span className='bg-[#71D5EB] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>D</span>
                                         <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                                    </div>
                                    <div>
                                        <h5 className='subtitle-1 text-lms-pine-tree opacity-80'>Daisy</h5>
                                        <span className='bg-lms-atlantis text-lms-pine-tree text-[10px] font-semibold tracking-[0.15px] leading-normal px-2 py-1 rounded-[11px]'>1200 Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='relative'>
                                <span className='bg-[#9DE87B] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>T</span>
                                <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>3</span>
                            </div>
                            {/* tooltip */}
                            <div className='hidden group-hover:flex absolute top-0 left-[210px]'>
                                <div className='bg-lms-black-squeeze p-4 rounded-xl flex items-center gap-4'>
                                    <div className='relative'>
                                        <span className='bg-[#9DE87B] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>T</span>
                                         <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                                    </div>
                                    <div>
                                        <h5 className='subtitle-1 text-lms-pine-tree opacity-80'>Tanjim</h5>
                                        <span className='bg-lms-atlantis text-lms-pine-tree text-[10px] font-semibold tracking-[0.15px] leading-normal px-2 py-1 rounded-[11px]'>1200 Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='relative'>
                                <span className='bg-[#EADD6E] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>S</span>
                                <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>4</span>
                            </div>
                            {/* tooltip */}
                            <div className='hidden group-hover:flex absolute top-0 left-[280px]'>
                                <div className='bg-lms-black-squeeze p-4 rounded-xl flex items-center gap-4'>
                                    <div className='relative'>
                                        <span className='bg-[#EADD6E] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>S</span>
                                         <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                                    </div>
                                    <div>
                                        <h5 className='subtitle-1 text-lms-pine-tree opacity-80'>Sharmin</h5>
                                        <span className='bg-lms-atlantis text-lms-pine-tree text-[10px] font-semibold tracking-[0.15px] leading-normal px-2 py-1 rounded-[11px]'>1200 Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='relative'>
                                <span className='bg-[#F6B17F] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>R</span>
                                <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>5</span>
                            </div>

                            {/* tooltip */}
                            <div className='hidden group-hover:flex absolute top-0 left-[360px]'>
                                <div className='bg-lms-black-squeeze p-4 rounded-xl flex items-center gap-4'>
                                    <div className='relative'>
                                        <span className='bg-[#F6B17F] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>R</span>
                                         <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                                    </div>
                                    <div>
                                        <h5 className='subtitle-1 text-lms-pine-tree opacity-80'>Rahim</h5>
                                        <span className='bg-lms-atlantis text-lms-pine-tree text-[10px] font-semibold tracking-[0.15px] leading-normal px-2 py-1 rounded-[11px]'>1200 Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='relative'>
                                <span className='bg-[#9ACA3C] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>M</span>
                                <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>20</span>
                            </div>
                            {/* tooltip */}
                            <div className='hidden group-hover:flex absolute top-0 left-[430px]'>
                                <div className='bg-lms-black-squeeze p-4 rounded-xl flex items-center gap-4'>
                                    <div className='relative'>
                                        <span className='bg-[#9ACA3C] w-12 h-12 flex justify-center items-center rounded-full subtitle-1'>M</span>
                                         <span className='w-4 h-4 bg-lms-pine-tree rounded-full flex justify-center items-center overline_text text-white absolute bottom-0 right-0'>1</span>
                                    </div>
                                    <div>
                                        <h5 className='subtitle-1 text-lms-pine-tree opacity-80'>Manik</h5>
                                        <span className='bg-lms-atlantis text-lms-pine-tree text-[10px] font-semibold tracking-[0.15px] leading-normal px-2 py-1 rounded-[11px]'>1200 Points</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}