'use client';

// npm packages
import React from 'react';
import Link from 'next/link';

// components
import Button from '@/pages/components/button/Button';
import IconMediaSkipForward from '@/public/icons/IconMediaSkipForward';

export default function Card1() {

  return (
    <>
       <div>
          <Link className='group' href="/components/onboarding/Onboarding">
            <div className='mx-w-[419px] mx-h-[440px] bg-lms-black-squeeze group-hover:bg-lms-atlantis px-4 sm:px-8 py-8 sm:py-14 rounded-3xl box_shadow flex flex-col justify-center items-center gap-6 transition-colors'>
                  <div className='flex justify-center items-center xsm:w-16 md:w-20 xsm:h-16 md:h-20 bg-white group-hover:bg-lms-pine-tree mx-auto card_shadow rounded-full transition-colors'>
                      <IconMediaSkipForward className="xsm:w-40 md:w-48 xsm:h-40 md:h-48" />
                  </div>
                  <h2 className='xsm:text-[30px] md:text-[35px] headline-4'>Onboarding</h2>
                  <p className='text-center opacity-70'>
                    These contents will help onboard new team member to understand our organization better & have a successful start at Portonics.
                  </p>
                  <Button buttonText="get started" className="bg-lms-atlantis group-hover:bg-lms-pine-tree group-hover:text-lms-atlantis button" />
              </div>
          </Link>
        </div> 
    </>
  )
}
