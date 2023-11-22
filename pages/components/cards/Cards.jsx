'use client';

// npm packages
import React from 'react';

// components
import Card1 from '@/pages/components/cards/Card1'
import Card2 from '@/pages/components/cards/Card2'
import Card3 from '@/pages/components/cards/Card3'

export default function Cards() {

  return (
    <>
      <div className='container pt-[120px] pb-[118px]'>
        <div className='flex justify-center gap-8'>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </>
  )
}
