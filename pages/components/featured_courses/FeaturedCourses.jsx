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
       <div className='container py-[120px]'>
          <h2 className='headline-3 !text-lms-pine-tree text-center'>Featured Courses</h2>
          <div>
            <ul className='flex justify-center items-center mt-[60px] gap-5'>
              <li>
                <Link className='bg-lms-pine-tree flex justify-center items-center gap-4 px-6 py-5 rounded-3xl box_shadow_4' href="">
                  <div className='bg-lms-atlantis w-[48px] h-[48px] p-3 rounded-full box_shadow_3'>
                    <IconCategory />
                  </div>
                  <span className='headline-6 !text-lms-atlantis'>All</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 px-6 py-5 rounded-3xl box_shadow_4'>
                  <div className='w-[48px] h-[48px] p-3 rounded-full box_shadow_3'>
                    <IconSuitcase />
                  </div>
                  <span className='headline-6 !text-lms-pine-tree'>Business</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 px-6 py-5 rounded-3xl box_shadow_4'>
                  <div className='w-[48px] h-[48px] p-3 rounded-full box_shadow_3'>
                      <IconDesign />
                    </div>
                    <span className='headline-6 !text-lms-pine-tree'>Design</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 px-6 py-5 rounded-3xl box_shadow_4'>
                  <div className='w-[48px] h-[48px] p-3 rounded-full box_shadow_3'>
                      <IconMonitor />
                    </div>
                    <span className='headline-6 !text-lms-pine-tree'>Development</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='bg-[#fffffff0] flex justify-center items-center gap-4 px-6 py-5 rounded-3xl box_shadow_4'>
                  <div className='w-[48px] h-[48px] p-3 rounded-full box_shadow_3'>
                      <IconPieChart />
                    </div>
                    <span className='headline-6 !text-lms-pine-tree'>Project Management</span>
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
