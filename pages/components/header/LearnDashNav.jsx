'use client';

// npm packages
import React from 'react';
import Link from 'next/link';

// components
import Logo from '@/public/Logo';
import IconArrowLeft from '@/public/icons/IconArrowLeft';

export default function LearnDashNav() {

    return (
        <>
            <nav className="bg-lms-pine-tree w-full fixed top-0 z-20">
                <div className="flex justify-between items-center px-[18px] pt-[17px] pb-[19px]">
                    <div>
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='w-[294px] h-[20px] border border-lms-atlantis rounded-xl xsm:hidden lg:flex items-center'>
                            <div className='w-[66%] h-2 bg-lms-atlantis mx-[6px] rounded-xl'></div>
                        </div>
                        <p className='subtitle-2 text-white flex justify-between gap-5'>
                            <span className='text-lms-atlantis xsm:hidden sm:flex'>66% Complete</span>
                            <span className='xsm:hidden lg:flex'>6/10 Steps</span>
                        </p>
                    </div>
                    <div className='xsm:hidden lg:flex items-center gap-3'>
                        <div>
                            <IconArrowLeft width="24" />
                        </div>
                        <p className='!text-white opacity-90 button'>Previous lesson</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h3 className='subtitle-2 text-white xsm:hidden md:flex'>Hello, Mehedi</h3>
                        <div className="flex justify-center items-center bg-lms-atlantis w-10 h-10 rounded-full">
                            <div className="button">M</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}