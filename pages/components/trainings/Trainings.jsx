'use client';

// npm packages
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';

export default function Trainings() {

  return (
    <>
    <Navbar />
      <div className='container mt-[60px]'>
        <div className='h-[243px] flex items-center rounded-3xl' style={{"background":"linear-gradient(90deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0.00) 100%), url('/img/base.png') no-repeat center","backgroundSize":"cover"}}>
          <div className='flex flex-col gap-y-3 pl-[60px] py-[60px]'>
            <h3 className='headline-3 text-white !text-left opacity-90'>Trainings</h3>
            <p className='subtitle-2 text-white !text-left line-clamp-2'>
              A one stop solution to all trainings offered by Portonics related to Functional Skill<br />
              development, Managerial Leadership Development & Business Acumen upskilling.
            </p>
          </div>
        </div>

        <div className='mt-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Functional Skills</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Finance</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Business</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Project Management</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Human Resources</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Legal & Compliance</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Backend</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Fullstack</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Dev Ops</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Quality Assurance</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Android</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>iOS</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>UI/UX</p>
            </div>
          </div>
        </div>

        <div className='mt-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Managerial Skills</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>AML & CFT Awareness</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Leadership Fundamentals</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Advance Leadership in Portonics</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Competency Based Recruitment Techniques</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Portonics Evaluation Process</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Business Communication Fundamentals</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Business Contracts</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Succession Planning at Portonics</p>
            </div>
          </div>
        </div>

        <div className='my-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Finance & Procurement</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Financial Acumen Development</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Estimation and Utilization</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Income Tax Fundamentals</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Advance Procurement at Portonics</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
