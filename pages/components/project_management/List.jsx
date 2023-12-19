'use client';

// npm packages
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import IconCategory from '@/public/icons/IconCategory';
import IconArrowDown from '@/public/icons/IconArrowDown';
import IconTime from '@/public/icons/IconTime';
import IconBookOpenSmall from '@/public/icons/IconBookOpenSmall';
import IconFolder from '@/public/icons/IconFolder';
import FeedbackForm from '@/pages/components/feedback_form/FeedbackForm';

export default function ProjectManagementList() {

  // img
  const image1 = '/img/img1.jpg';
  const image2 = '/img/img2.jpg';
  const image3 = '/img/img3.jpg';

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='w-[1094px] flex justify-between items-center mx-auto mt-[60px]'>
          <h1 className='headline-3 text-lms-pine-tree'>Project Management</h1>
          <div className='flex items-center gap-[41px]'>
            <div className='w-12 h-12 bg-white flex justify-center items-center rounded-xl box_shadow_5'>
              <Link href="/components/project_management/Grid">
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
          <div className='flex flex-col items-center justify-center gap-8'>
            {/* Card */}
            <div className='w-[1094px] h-[172px] bg-white flex rounded-3xl box_shadow_4'>
                <div className='relative'>
                    <Image className='h-[172px] object-cover rounded-3xl' src={ image1 } width={ 306 } height={ 172 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                </div>
                <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex items-center mt-6 gap-8 opacity-80'>
                        <div className='flex items-center gap-[6px]'>
                            <IconTime />
                            <span className='subtitle-2'>254h 50m</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IconBookOpenSmall />
                            <span className='subtitle-2'>12 Lessons</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IconFolder />
                            <span className='subtitle-2'>Physical</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className='w-[1094px] h-[172px] bg-white flex rounded-3xl box_shadow_4'>
                <div className='relative'>
                    <Image className='h-[172px] object-cover rounded-3xl' src={ image2 } width={ 306 } height={ 172 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                </div>
                <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex items-center mt-6 gap-8 opacity-80'>
                        <div className='flex items-center gap-[6px]'>
                            <IconTime />
                            <span className='subtitle-2'>254h 50m</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IconBookOpenSmall />
                            <span className='subtitle-2'>12 Lessons</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IconFolder />
                            <span className='subtitle-2'>Physical</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className='w-[1094px] h-[172px] bg-white flex rounded-3xl box_shadow_4'>
                <div className='relative'>
                    <Image className='h-[172px] object-cover rounded-3xl' src={ image3 } width={ 306 } height={ 172 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                </div>
                <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex items-center mt-6 gap-8 opacity-80'>
                        <div className='flex items-center gap-[6px]'>
                          <IconTime />
                          <span className='subtitle-2'>254h 50m</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <IconBookOpenSmall />
                          <span className='subtitle-2'>12 Lessons</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <IconFolder />
                          <span className='subtitle-2'>Physical</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <FeedbackForm 
        textForOne='Do you want to learn more?' 
        textForTwo='Please share your area of interest by filling up the form.' 
        btnText='Request new course' 
      />
      <Footer />
    </>
  )
}