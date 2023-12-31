'use client';

// npm packages
import React from 'react';
import Link from 'next/link';
// import clsx from 'clsx';

// components
import Logo from '@/public/Logo';

export default function Navbar() {

    return (
        <>
            <nav className="bg-lms-pine-tree">
                <div className="container flex justify-between items-center pt-[17px] pb-[19px]">
                    <div>
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div>
                        <ul className="hidden lg:flex gap-x-10 main-navigation">
                            <li className='relative'>
                                <Link href="/components/trainings/Trainings" className='subtitle-2 text-white hover:text-lms-atlantis'>All Trainings</Link>
                            </li>
                            <li>
                                <Link href="/components/my_trainings/List" className='subtitle-2 text-white hover:text-lms-atlantis'>My Trainings</Link>
                            </li>
                            <li>
                                <Link href="/components/learn_more/LearnMore" className='subtitle-2 text-white hover:text-lms-atlantis'>Enroll</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/components/profile/Profile">
                        <div className="hidden lg:flex justify-center items-center bg-lms-atlantis w-10 h-10 rounded-full">
                            <span className='button'>M</span>
                        </div>
                    </Link>
                    <div className='hamburger-menu active !hidden'>
                        <span className='lines line-1'></span>
                        <span className='lines line-2'></span>
                        <span className='lines line-3'></span>
                    </div>
                </div>
            </nav>
        </>
    )
}