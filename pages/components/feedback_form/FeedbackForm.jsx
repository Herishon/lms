'use client';

// npm package
import React from 'react';
import Link from 'next/link';

// components
import Button from '@/pages/components/button/Button';

export default function FeedbackForm(props) {

    const {
        textForOne = 'Text for element 1',
        textForTwo = 'Text for element 2',
        btnText = 'Button type',
        ...rest
    } = props;

  return (
    <>
      <div className='bg-lms-rangoon-green'>
        <div className='container py-[120px]'>
          <h5 className='headline-6 text-lms-atlantis text-center'>{ textForOne }</h5>
          <h2 className='w-[870px] mx-auto headline-3 text-white text-center my-8'>{ textForTwo }</h2>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdKOZzjyvaiZlCMWeHnzSS9vd1ZCXF6uonN99o9fupcGG_naA/viewform" target='_blank'>
            <Button buttonText="write feedback" className='bg-lms-atlantis button mx-auto' />
          </Link>
        </div>
      </div>
    </>
  )
}
