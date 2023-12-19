'use client';

// npm package
import React from 'react';

// swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// components
import Button from '@/pages/components/button/Button';
import IconPlay from '@/public/icons/IconPlay';

export default function HomeSlider() {

    return (
        <>
            <div className='bg-lms-rangoon-green flex items-center'>
                <Swiper
                    // install swiper modules
                    modules={[ Navigation, Pagination, Scrollbar ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        300: {
                            navigation: {
                                enabled: false,
                            }
                        },
                        640: {
                            navigation: {
                                enabled: false,
                            }
                        },
                        1024: {
                            navigation: {
                                enabled: true,
                            }
                        },
                      }}
                    >

                    {/* slide 1 */}
                    <SwiperSlide>
                        <div className='container xsm:h-auto md:h-[603px] py-12 py:mb-0 slide_container'>
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-[100px] gap-y-[50px] md:gap-x-[135px]'>
                                <div>
                                    <p className='xsm:text-[14px] md:text-[16px] lg:text-[20px] headline-6 text-white opacity-90'>(Alpha Release)</p>
                                    <h1 className='xsm:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[49px] headline-3 text-white opacity-90 mt-3'>Welcome to Portonics<br /> Learning Portal</h1>
                                    <p className='mixed_style text-white opacity-70 mt-3'>
                                        We believe in pushing boundaries, learning, growing, and thriving<br class="hidden lg:inline-block"/> together. Our Learning Center is designed to share knowledge,<br class="hidden lg:inline-block"/> wisdom, and experiences. It offers four categories of learning...
                                    </p>
                                    <p className='sm:text-[17px] md:text-[20px] headline-6 text-lms-atlantis opacity-90 mt-7'>Happy Learning!</p>
                                </div>
                                <div>
                                    <div className='mx-w-[644px] lg:w-[644px] h-[250px] lg:h-[363px] bg-lms-pine-tree rounded-3xl flex justify-center items-center'>
                                        <div className='w-[64px] h-[64px] bg-lms-atlantis flex justify-center items-center rounded-full'>
                                            <IconPlay />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide 2 */}
                    <SwiperSlide>
                        <div className='container xsm:h-auto md:h-[603px] py-12 py:mb-0 slide_container'>
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-[100px] gap-y-[50px] md:gap-x-[135px]'>
                                <div>
                                    <h1 className='xsm:text-[30px] md:text-[40px] lg:text-[49px] headline-3 text-white opacity-90 mt-3'>Onboarding Programs</h1>
                                    <p className='mixed_style text-white opacity-70 mt-3'>
                                        We have designed a comprehensive range of orientational trainings tailored to help team members have a seamless transition into our learning ecosystem and help them ease into their new role. Portonics Learning Portal offers flexible learning options that adapt to the participants schedule and learning style.
                                    </p>
                                    <Button buttonText="get started" className='bg-lms-atlantis mt-7 button'>Get started</Button>
                                </div>
                                <div>
                                    <div className='mx-w-[644px] lg:w-[644px] h-[250px] lg:h-[363px] bg-lms-pine-tree rounded-3xl flex justify-center items-center'></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide 3 */}
                    <SwiperSlide>
                        <div className='container xsm:h-auto md:h-[603px] py-12 py:mb-0 slide_container'>
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-[100px] gap-y-[50px] md:gap-x-[135px]'>
                                <div>
                                    <h1 className='xsm:text-[30px] md:text-[40px] lg:text-[49px] headline-3 text-white opacity-90 mt-3'>Learning & Workshops</h1>
                                    <p className='mixed_style text-white opacity-70 mt-3'>
                                    Discover a wide range of interactive learning experiences and transformative workshops designed to ignite your curiosity, expand your skill set, and empower you to reach new heights. Benefit from a combination of video tutorials, hands-on exercises, and quizzes that reinforce your understanding.
                                    </p>
                                    <Button buttonText="get started" className='bg-lms-atlantis mt-7 button'>Get started</Button>
                                </div>
                                <div>
                                    <div className='mx-w-[644px] lg:w-[644px] h-[250px] lg:h-[363px] bg-lms-pine-tree rounded-3xl flex justify-center items-center'></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide 4 */}
                    <SwiperSlide>
                        <div className='container xsm:h-auto md:h-[603px] py-12 py:mb-0 slide_container'>
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-[100px] gap-y-[50px] md:gap-x-[135px]'>
                                <div>
                                    <h1 className='xsm:text-[30px] md:text-[40px] lg:text-[49px] headline-3 text-white opacity-90 mt-3'>Courses</h1>
                                    <p className='mixed_style text-white opacity-70 mt-3'>
                                    Explore a diverse array of courses with topics, from business and technology to personal development, all designed by expert instructors who are passionate about helping you succeed. Experience a seamless blend of virtual classrooms, hands-on workshops,  creating a vibrant community of learners who support and inspire each other.
                                    </p>
                                    <Button buttonText="get started" className='bg-lms-atlantis mt-7 button'>Get started</Button>
                                </div>
                                <div>
                                    <div className='mx-w-[644px] lg:w-[644px] h-[250px] lg:h-[363px] bg-lms-pine-tree rounded-3xl flex justify-center items-center'></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
