import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

    const data = [
        {
            avatar: AVTR1,
            name: 'Jyoti Dwain',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id voluptatem ipsam libero et. Tempora facere, harum molestias voluptatem officia sit cupiditate asperiores quas aperiam optio odio nemo ut totam!',
        },
        {
            avatar: AVTR2,
            name: 'Tina shaw',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id voluptatem ipsam libero et. Tempora facere, harum molestias voluptatem officia sit cupiditate asperiores quas aperiam optio odio nemo ut totam!',
        },
        {
            avatar: AVTR3,
            name: 'Tina shaw',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id voluptatem ipsam libero et. Tempora facere, harum molestias voluptatem officia sit cupiditate asperiores quas aperiam optio odio nemo ut totam!',
        },
        {
            avatar: AVTR4,
            name: 'Tina shaw',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id voluptatem ipsam libero et. Tempora facere, harum molestias voluptatem officia sit cupiditate asperiores quas aperiam optio odio nemo ut totam!',
        },

    ]

    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className='client__review' >{review}</small>
                            </SwiperSlide>
                        )

                    })
                }
            </Swiper>
        </section>)
};

export default Testimonials;
