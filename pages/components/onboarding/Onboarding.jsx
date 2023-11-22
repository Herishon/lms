'use client';

// npm packages
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';

export default function Onboarding() {

  return (
    <>
    <Navbar />
      <div className='container mt-[60px]'>
        <div className='h-[243px] flex items-center rounded-3xl' style={{"background":"linear-gradient(90deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0.00) 100%), url('/img/base.png') no-repeat center","backgroundSize":"cover"}}>
          <div className='flex flex-col gap-y-3 pl-[60px] py-[60px]'>
            <h3 className='headline-3 text-white !text-left opacity-90'>Onboarding</h3>
            <p className='subtitle-2 text-white !text-left line-clamp-2'>
              All trainings to equip new teams members with essential skills and <br />
              knowledge for a successful start at Portonics.
            </p>
          </div>
        </div>

        <div className='mt-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Basic Orientation Trainings</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Orientation</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>How Portonics Functions</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>What is Intellectual Property</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Confidentiality & IPR</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Email Etiquettes & Basic Communications</p>
            </div>
          </div>
        </div>

        <div className='mt-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Technical Onboarding Trainings</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Jira</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Google Chat</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Daily Bot</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Procurement Basics</p>
            </div>
          </div>
        </div>

        <div className='mt-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Onboarding Programs</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Portonics 1:1 Session Guidelines</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Portonics Buddy Program</p>
            </div>
          </div>
        </div>

        <div className='my-[120px]'>
          <h3 className='headline-3 !text-left !text-lms-pine-tree mb-[60px] opacity-90'>Human Resources Trainings</h3>
          <div className='grid justify-content-center grid-cols-4 gap-8'>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Equality, Diversity & Inclusion (EDI)</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Finance, HR, Business, PM & Engineering Teams</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Daily Check-in & Project Standup meetings</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>Intro to Appraisal process in Portonics</p>
            </div>
            <div className='bg-white category-card w-[306px] h-[166px] rounded-3xl flex justify-center items-center'>
              <p className='headline-6 !text-lms-pine-tree text-center p-[22px] opacity-90'>How to Participate in Matchmaking Session</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
