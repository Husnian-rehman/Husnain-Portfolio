import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TestimonialImage from '../testimonial.png';
import '../App.css'; 
export default function Testimonial() {

  return (
    <div className='bg-featurebg pt-[40px]  md:pt-[88px] pb-[100px] md:pb-[146px]'>
        <div className="max-w-[1180px] m-auto px-5">
          <div className='col_text mb-10 flex flex-col items-center'>
                <span className="text-xl font-medium text-featuretext bg-featurebg px-8 py-3 rounded-[42px] mb-8 inline-block  border border-secondry">
                    TESTIMONIALS
                </span>
                <div className='mb-10'>
                  <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7867 10.7651C36.7547 8.33048 38.28 5.92513 40.3187 3.60778C40.964 2.87445 41.052 1.8185 40.524 0.997175C40.1133 0.351846 39.4387 -0.000137728 38.7054 -0.000137792C38.5 -0.00013781 38.2947 0.0144534 38.0893 0.0878596C33.7774 1.34917 23.7014 5.82245 23.4227 20.1664C23.3202 25.6956 27.3681 30.4476 32.6334 30.9903C35.552 31.2836 38.456 30.3303 40.612 28.3943C42.768 26.4437 44 23.657 44 20.753C44 15.9131 40.568 11.6744 35.7867 10.7651Z" fill="#754EF9"/>
                    <path d="M9.22612 30.9903C12.1302 31.2836 15.0341 30.3303 17.1901 28.3943C19.3461 26.4437 20.5781 23.657 20.5781 20.753C20.5781 15.9131 17.1461 11.6744 12.3648 10.7651C13.3328 8.33048 14.8581 5.92513 16.8968 3.6078C17.5421 2.87447 17.6301 1.81852 17.1021 0.99719C16.6914 0.35186 16.0167 -0.000124376 15.2834 -0.000124441C15.0782 -0.000124458 14.8728 0.0144686 14.6675 0.0878748C10.3555 1.34919 0.279539 5.82246 0.000872609 20.1664L0.000872591 20.3717C0.000872115 25.813 4.00482 30.4476 9.22612 30.9903Z" fill="#754EF9"/>
                    </svg>
                </div>
                <h2 className='sm:text-[44px] text-[30px]  sm:mb-20 mb-6  text-description font-Poppins font-semibold text-center'>Finally Getting Paid Right</h2>
                <p className='text-xl text-description font-Poppins font-normal text-center'>
                    Man, our accounts receivable was just ballooning out of control. Denials left and right, 
                    especially tricky Medicare ones. It felt like we were just treading water trying to figure 
                    out why claims got kicked back. Since we started using BellMedEx for our DME Billing Services, it's been like night and day. Our cash flow
                     is stable again, and we actually see the money come in for the equipment we supply. 
                     It’s been a huge diffrence for our small business.
                     
                </p>
          </div>
 {/* Splide Carousel */}
        <Splide
            options={{
                type: 'loop',
                perPage: 1,
                pagination: true,
                arrows: false,
                gap: '1rem',
                interval: 3000,       
                speed: 1000,           
                easing: 'linear',  
            }}
            className="testimonial-carousel"
            >
            <SplideSlide>
                <div className='testimonial_slide flex items-center flex-col mx-4'>
                <div className='flex mb-4'>
                    <img src={TestimonialImage} alt="Profile" className="w-full h-auto" />
                </div>
                <h3 className='mb-2 text-2xl font-Poppins font-semibold text-center'>DF. Carter</h3>
                <p className='text-xl font-Poppins font-medium italic text-center'>Mobility Supplier, USA</p>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='testimonial_slide flex items-center flex-col mx-4'>
                <div className='flex mb-4'>
                    <img src={TestimonialImage} alt="Profile" className="w-full h-auto" />
                </div>
                <h3 className='mb-2 text-2xl font-Poppins font-semibold text-center'>Jane Doe</h3>
                <p className='text-xl font-Poppins font-medium italic text-center'>Therapist, Canada</p>
                </div>
            </SplideSlide>
        </Splide>
        </div>
    </div>
  )
}