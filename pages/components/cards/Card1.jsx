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
            <div className='w-[419px] h-[440px] bg-lms-black-squeeze group-hover:bg-lms-atlantis px-8 py-14 rounded-3xl box_shadow flex flex-col justify-center items-center gap-6 transition-colors'>
                  <div className='flex justify-center items-center w-20 h-20 bg-white group-hover:bg-lms-pine-tree mx-auto card_shadow rounded-full transition-colors'>
                      <IconMediaSkipForward />
                  </div>
                  <h2 className='headline-4'>Onboarding</h2>
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
