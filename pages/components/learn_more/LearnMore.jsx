'use client';

// npm packages
import React from 'react';

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import Button from '@/pages/components/button/Button';

export default function LearnMore() {

  return (
    <>
    <Navbar />
      <div className='container'>
        <div className="bg-white max-w-[869px] rounded-t-3xl mx-auto mt-[73px] xsm:px-[20px] md:px-[80px] lg:px-[112px]">
          <h1 className='xsm:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[49px] headline-3 text-lms-pine-tree text-center pt-[33px] pb-5'>Do you want to learn more?</h1>
          <p className='xsm:text-[14px] md:text-[18px] lg:text-[20px] headline-6 text-lms-atlantis text-center'>Please share your area of interest in the form below</p>
        </div>
          <form className="max-w-[869px] mx-auto xsm:pb-[50px] md:pb-[140px] lg:pb-[214px] relative learn-more" action="#" method="POST">
            <div className='bg-white py-10 rounded-b-3xl box_shadow_4'>
              <div className='xsm:px-[20px] md:px-[80px] lg:px-[112px]'>
                <div className="space-y-8">
                  <div className="grid xsm:grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <label className="subtitle-1 text-lms-pine-tree" htmlFor="fullName">Full Name</label>
                      <input type="text" className="bg-lms-black-squeeze text-lms-pine-tree mt-[11px] px-4 pt-[13px] pb-4 rounded-lg subtitle-2 placeholder:subtitle-2 placeholder:text-lms-pine-tree" name="name" id="name" placeholder="Mehedi Hasan" />
                    </div>
                    <div className="flex flex-col">
                      <label className="subtitle-1 text-lms-pine-tree" htmlFor="email">Email</label>
                      <input type="email" className="bg-lms-black-squeeze text-lms-pine-tree mt-[11px] px-4 pt-[13px] pb-4 rounded-lg subtitle-2 placeholder:subtitle-2 placeholder:text-lms-pine-tree" name="email" id="email" placeholder="mehedi.hassan@portonics.com" />
                    </div>
                  </div>
                  <div>
                    <p className="subtitle-1 text-lms-pine-tree">Type of Training</p>
                    <div className="flex items-center mt-[11px]">
                      <input type="checkbox" name="existing training" id="existing training" />
                      <span className="subtitle-2 text-lms-pine-tree">Existing Training From Learning Portal</span>
                    </div>
                    <div className="flex items-center mt-[11px]">
                      <input type="checkbox" name="new training" id="new training" />
                      <span className="subtitle-2 text-lms-pine-tree">New Training Outside Learning Portal</span>
                    </div>
                  </div>
                  <div>
                    <p className="subtitle-1 text-lms-pine-tree">Course Category</p>
                    <div className="flex items-center mt-[11px]">
                      <input type="checkbox" name="technical courses" id="technical courses" />
                      <span className="subtitle-2 text-lms-pine-tree">Technical Courses</span>
                    </div>
                    <div className="flex items-center mt-[11px]">
                      <input type="checkbox" name="soft skills" id="soft skills" />
                      <span className="subtitle-2 text-lms-pine-tree">Soft Skills</span>
                    </div>
                    <div className="flex items-center mt-[11px]">
                      <input type="checkbox" name="others" id="others" />
                      <span className="subtitle-2 text-lms-pine-tree">Others</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="subtitle-1 text-lms-pine-tree">Name and details of the Training</h5>
                    <p className='caption text-lms-pine-tree mt-1'>
                      Please provide a brief details on a the training, if it is a new training along with related links if available.
                    </p>
                    <textarea className="bg-lms-black-squeeze w-full h-[55px] mt-[11px] p-2 rounded-lg"></textarea>
                  </div>
                  <div>
                    <h5 className="subtitle-1 text-lms-pine-tree">Reason for your interest on this Training</h5>
                    <textarea className="bg-lms-black-squeeze w-full h-[100px] mt-[11px] p-2 rounded-lg"></textarea>
                    <p className='caption text-lms-pine-tree'>0 to 50 characters max</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f9f9f8] h-[170px] flex justify-end items-end -mt-14 relative rounded-b-3xl -z-10">
              <Button buttonText="submit" className="bg-lms-atlantis mb-[32px] mr-[32px] cursor-pointer button" />
            </div>
          </form>
      </div>
      <Footer />
    </>
  )
}
