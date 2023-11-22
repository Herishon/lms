'use client';

// npm packages
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import Button from '@/pages/components/button/Button';

export default function ChangePassword() {

    return (
        <>
            <Navbar />
            <div className='container'>
                <form className='w-[869px] mx-auto mt-[73px] mb-[309px]' action="#" method="POST">
                    <div className='bg-[#fffffff5] pl-[95px] pt-[33px] pr-[130px] pb-8 rounded-t-3xl box_shadow_4'>
                        <h2 className='headline-3 text-lms-pine-tree text-center'>Change Password</h2>
                        <div className='flex flex-col mt-8'>
                            <label className='subtitle-1 text-lms-pine-tree' htmlFor="Email">Email</label>
                            <input className="bg-lms-black-squeeze text-lms-pine-tree mt-[11px] px-4 pt-[13px] pb-4 rounded-lg subtitle-2 placeholder:subtitle-2 placeholder:text-lms-pine-tree" type="email" name="email" id="email" placeholder='mehedi.hasan@portonics.com'/>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <div className='flex flex-col'>
                                <label className='subtitle-1 text-lms-pine-tree' htmlFor="New password">New Password</label>
                                <input className="w-[306px] bg-lms-black-squeeze text-lms-pine-tree mt-[11px] px-4 pt-[13px] pb-4 rounded-lg subtitle-2 placeholder:subtitle-2 placeholder:text-lms-pine-tree" type="password" name="password" id="password" placeholder='*********'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='subtitle-1 text-lms-pine-tree' htmlFor="Confirm password">Confirm Password</label>
                                <input className="w-[306px] bg-lms-black-squeeze text-lms-pine-tree mt-[11px] px-4 pt-[13px] pb-4 rounded-lg subtitle-2 placeholder:subtitle-2 placeholder:text-lms-pine-tree" type="password" name="confirm password" id="confirm password" placeholder='*********' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#ffffff80] p-[32px] rounded-b-3xl box_shadow_4'>
                        <Button buttonText="submit" className="bg-lms-atlantis ml-auto button" />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}