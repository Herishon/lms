'use client';

// npm packages
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';

export default function Courses() {

  return (
    <>
    <Navbar />
      <div className='container mt-[60px]'>
        <div className='max-h-[243px] flex items-center rounded-3xl' style={{"background":"linear-gradient(90deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0.00) 100%), url('/img/base.png') no-repeat center","backgroundSize":"cover"}}>
          <div className='flex flex-col gap-y-3 xsm:px-[30px] md:pr-0 md:pl-[60px] xsm:py-[30px] md:py-[60px]'>
            <h3 className='xsm:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[49px] headline-3 text-white !text-left opacity-90'>Courses</h3>
            <p className='subtitle-2 text-white !text-left line-clamp-2'>
              Discover a diverse range of courses tailored for professional development, empowering<br />
              learners to enhance their skills and stay ahead in a rapidly evolving business landscape.
            </p>
          </div>
        </div>

        <div className='my-[120px]'>
          <div className='grid justify-center items-center xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
            <div className='bg-white category-card max-w-full h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Finance Courses</p>
            </div>
            <div className='bg-white category-card max-w-full h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Human Resources Courses</p>
            </div>
            <div className='bg-white category-card max-w-full h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Project Management Courses</p>
            </div>
            <div className='bg-white category-card max-w-full h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Legal & Compliance Courses</p>
            </div>
            <div className='bg-white category-card max-w-full h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Business Courses</p>
            </div>
            <div className='bg-white category-card max-w-full h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Software Engineering Courses</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
