'use client';

// npm packages
import Link from 'next/link';

// components
import CategoryCoursesSlider from '../swiper_slider/category_courses/CategoryCoursesSlider';
import IconCategory from '@/public/icons/IconCategory';
import IconSuitcase from '@/public/icons/IconSuitcase';
import IconDesign from '@/public/icons/IconDesign';
import IconMonitor from '@/public/icons/IconMonitor';
import IconPieChart from '@/public/icons/IconPieChart';

export default function FeaturedCourses() {

  return (
    <>
       <div className='container pt-[60px] pb-[80px] md:pt-[100px] md:pb-[120px]'>
          <h2 className='xsm:text-[35px] md:text-[40px] lg:text-[49px] headline-3 !text-lms-pine-tree text-center'>Featured Courses</h2>
          <div>
            <ul className='flex xsm:justify-start sm:justify-center flex-wrap items-center mt-[60px] gap-5'>
              <li>
                <Link className='bg-lms-pine-tree flex justify-center items-center gap-4 xsm:px-4 md:px-5 lg:px-6 xsm:py-3 md:py-4 lg:py-5 rounded-3xl box_shadow_4' href="">
                  <div className='bg-lms-atlantis xsm:w-[36px] md:w-[42px] lg:w-[48px] xsm:h-[36px] md:h-[42px] lg:h-[48px] flex justify-center items-center rounded-full box_shadow_3'>
                    <IconCategory />
                  </div>
                  <span className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 !text-lms-atlantis'>All</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 xsm:px-4 md:px-5 lg:px-6 xsm:py-3 md:py-4 lg:py-5 rounded-3xl box_shadow_4'>
                  <div className='xsm:w-[36px] md:w-[42px] lg:w-[48px] xsm:h-[36px] md:h-[42px] lg:h-[48px] flex justify-center items-center rounded-full box_shadow_3'>
                    <IconSuitcase />
                  </div>
                  <span className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 !text-lms-pine-tree'>Business</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 xsm:px-4 md:px-5 lg:px-6 xsm:py-3 md:py-4 lg:py-5 rounded-3xl box_shadow_4'>
                  <div className='xsm:w-[36px] md:w-[42px] lg:w-[48px] xsm:h-[36px] md:h-[42px] lg:h-[48px] flex justify-center items-center rounded-full box_shadow_3'>
                      <IconDesign />
                    </div>
                    <span className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 !text-lms-pine-tree'>Design</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 xsm:px-4 md:px-5 lg:px-6 xsm:py-3 md:py-4 lg:py-5 rounded-3xl box_shadow_4'>
                  <div className='xsm:w-[36px] md:w-[42px] lg:w-[48px] xsm:h-[36px] md:h-[42px] lg:h-[48px] flex justify-center items-center rounded-full box_shadow_3'>
                      <IconMonitor />
                    </div>
                    <span className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 !text-lms-pine-tree'>Development</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 xsm:px-4 md:px-5 lg:px-6 xsm:py-3 md:py-4 lg:py-5 rounded-3xl box_shadow_4'>
                  <div className='xsm:w-[36px] md:w-[42px] lg:w-[48px] xsm:h-[36px] md:h-[42px] lg:h-[48px] flex justify-center items-center rounded-full box_shadow_3'>
                      <IconPieChart />
                    </div>
                    <span className='xsm:text-[16px] md:text-[18px] lg:text-[20px] headline-6 !text-lms-pine-tree'>Project Management</span>
                </Link>
              </li>
            </ul>
          </div>
       </div>
       {/* category slider  */}
       <CategoryCoursesSlider />
    </>
  )
}
