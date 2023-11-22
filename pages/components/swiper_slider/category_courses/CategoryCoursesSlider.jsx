'use client';

// npm packages
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// components
import IconTime from '@/public/icons/IconTime';
import IconBookOpenSmall from '@/public/icons/IconBookOpenSmall';
import IconFolder from '@/public/icons/IconFolder';

export default function CategoryCoursesSlider() {

  // img
  const image1 = '/img/img (1).jpg';
  const image2 = '/img/img (2).jpg';
  const image3 = '/img/img (3).jpg';

  return (
    <>
      <div className='relative'>
        <div className='container pb-[120px]'>
          <Swiper
            // install swiper modules
            modules={[ Navigation, Pagination, Scrollbar ]}
            spaceBetween={ 32 }
            slidesPerView={ 3 }
            navigation={{
              nextEl: ".swiper-next-category",
              prevEl: ".swiper-prev-category",
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            
            {/* slide 1 */}
            <SwiperSlide>
              {/* Card */}
              <Link href="/components/project_management/List">
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                    <Image className='object-cover rounded-3xl' src={ image1 } width={ 419 } height={ 239 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                      Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                    <Image className='object-cover rounded-3xl' src={ image2 } width={ 419 } height={ 239 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                      Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                    <Image className='object-cover rounded-3xl' src={ image3 } width={ 419 } height={ 239 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                      Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 4 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                    <Image className='object-cover rounded-3xl' src={ image1 } width={ 419 } height={ 239 } alt="logo" />
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                    <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                      Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 1 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                      <Image className='object-cover rounded-3xl' src={ image1 } width={ 419 } height={ 239 } alt="logo" />
                      <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                      <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                      <Image className='object-cover rounded-3xl' src={ image2 } width={ 419 } height={ 239 } alt="logo" />
                      <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                      <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                      <Image className='object-cover rounded-3xl' src={ image3 } width={ 419 } height={ 239 } alt="logo" />
                      <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                      <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>

            {/* slide 4 */}
            <SwiperSlide>
              <Link href="/components/project_management/List">
                {/* Card */}
                <div className='w-[419px] h-[394px] bg-white rounded-3xl cursor-pointer box_shadow_6'>
                  <div className='relative'>
                      <Image className='object-cover rounded-3xl' src={ image1 } width={ 419 } height={ 239 } alt="logo" />
                      <div className='absolute top-0 right-0 bottom-0 left-0 rounded-3xl bg_overlay_shadow'></div>
                      <span className='bg-lms-black-squeeze px-3 py-2 rounded-[18px] absolute bottom-6 left-[36px] subtitle-2 text-lms-pine-tree'>Project Management</span>
                  </div>
                  <div className='px-8 pb-8 pt-6'>
                    <h3 className='headline-6 text-lms-pine-tree'>
                        Explore Management Concepts through Metaphor and Music
                    </h3>
                    <div className='flex justify-center items-center mt-6 gap-8 opacity-80'>
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
              </Link>
            </SwiperSlide>
          </Swiper>
      </div>
      <button className='swiper-prev-category absolute top-1/3 left-[200px] group leading-none'>
        <FontAwesomeIcon icon={ faChevronLeft } className='text-lg text-[#24281D] font-normal opacity-85 group-hover:text-lms-atlantis' />
      </button>
      <button className='swiper-next-category absolute top-1/3 right-[200px] group leading-none'>
        <FontAwesomeIcon icon={ faChevronLeft } className='text-lg text-[#24281D] font-normal rotate-180 opacity-85 group-hover:text-lms-atlantis' />
      </button>
      </div>
    </>
  )
}
