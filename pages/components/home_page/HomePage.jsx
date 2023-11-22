'use client';

// npm packages
import React from 'react'

// components
import Navbar from '@/pages/components/header/Navbar';
import Footer from '@/pages/components/footer/Footer';
import HomeSlider from '../swiper_slider/home_slider/HomeSlider';
import Cards from '@/pages/components/cards/Cards';
import FeaturedCourses from '@/pages/components/featured_courses/FeaturedCourses';
import FeedbackForm from '@/pages/components/feedback_form/FeedbackForm';

export default function HomePage() {

    return (
        <>
            <Navbar />
            <HomeSlider />
            <Cards />
            <FeaturedCourses />
            <FeedbackForm
                textForOne='Share Your Feedback'
                textForTwo="Please provide your valuable feedback to improve the website's UX."
                btnText='Write feedback'
            />
            <Footer />
        </>
    )
}