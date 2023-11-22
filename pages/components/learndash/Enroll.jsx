'use client';

// npm package
import React from 'react';

// components
import Button from '@/pages/components/button/Button';

export default function Enroll() {

  return (
    <>
        <div className='container'>
            <div className='w-[420px] bg-white mx-auto mt-[156px] mb-[482px] p-[32px] rounded-3xl box_shadow_4'>
                <h3 className='headline-6 text-lms-pine-tree opacity-90'>Tell us why do you want to enroll?</h3>
                <form action="#" method="POST">
                    <textarea className="bg-lms-black-squeeze w-[355px] h-[96px] mt-[11px] px-3 py-2 rounded-lg"></textarea>
                    <p className='caption text-lms-pine-tree'>0 to 50 characters max</p>
                    <div className='flex justify-end gap-[24px] mt-[30px]'>
                        <Button buttonText="cancel" className="bg-lms-black-squeeze button" />
                        <Button buttonText="submit" className="bg-lms-atlantis button" />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
