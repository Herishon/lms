'use client';

// npm packages
import React, { useState } from 'react';

// components
import LearnPageOne from '@/pages/components/learndash/lib/LearnPageOne';
import LearnPageTwo from '@/pages/components/learndash/lib/LearnPageTwo';
import LearnPageThree from '@/pages/components/learndash/lib/LearnPageThree';
import LearnPageFour from '@/pages/components/learndash/lib/LearnPageFour';
import LearnPageFive from '@/pages/components/learndash/lib/LearnPageFive';
import LearnPageSix from '@/pages/components/learndash/lib/LearnPageSix';
import LearnPageSeven from '@/pages/components/learndash/lib/LearnPageSeven';
import LearnPageEight from '@/pages/components/learndash/lib/LearnPageEight';
import LearnPageNine from '@/pages/components/learndash/lib/LearnPageNine';
import LearnPageTen from '@/pages/components/learndash/lib/LearnPageTen';
import LearnPageEleven from '@/pages/components/learndash/lib/LearnPageEleven';
import LearnPageTwelve from '@/pages/components/learndash/lib/LearnPageTwelve';
import Button from '../button/Button';


export default function LearnDash() {

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count => count + 1);
        console.log(count);
    }

    const handleDecrement = () => {
        setCount(count => count - 1);
        console.log(count);
    }
    
    switch(count) {
        case 1:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageOne /> }
                </>
                
            );
            break;

        case 2:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageTwo /> }
                </>
                
            );
            break;

        case 3:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageThree /> }
                </>
                
            );
            break;

        case 4:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageFour /> }
                </>
                
            );
            break;

        case 5:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageFive /> }
                </>
                
            );
            break;

        case 6:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageSix /> }
                </>
                
            );
            break;

        case 7:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageSeven /> }
                </>
                
            );
            break;

        case 8:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageEight /> }
                </>
                
            );
            break;

        case 9:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageNine /> }
                </>
                
            );
            break;

        case 10:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageTen /> }
                </>
                
            );
            break;

        case 11:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageEleven /> }
                </>
                
            );
            break;

        case 12:
            return (
                <>
                    <Button buttonText="next" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 right-20' onClick={handleIncrement} />
                    <Button buttonText="previous" className='bg-lms-atlantis border border-lms-pine-tree !px-3 !py-2 !rounded-md button fixed bottom-2 left-20' onClick={handleDecrement} />
                    { <LearnPageTwelve /> }
                </>
                
            );
            break;

        default:
            return alert("There are no more pages!");

    }
}