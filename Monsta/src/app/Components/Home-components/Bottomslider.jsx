"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";

export default function Bottomslider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <>
            {/* Full Width Section */}
            <div className="w-full pt-5 pb-15 bg-[#F8F9F9] flex flex-col justify-center items-center">

                {/* Heading Section */}
                <h1 className="flex items-center justify-center text-4xl font-bold text-black mb-12 tracking-wide gap-4 w-full">
                    <span className="block w-[31.5%] h-[1.5px] bg-gradient-to-r from-[#b76e79] to-[#e5b9b7]"></span>
                    What Client Say?
                    <span className="block w-[31.5%] h-[1.5px] bg-gradient-to-l from-[#b76e79] to-[#e5b9b7]"></span>
                </h1>

                {/* Slider Container */}
                <div className="w-[96%] md:w-[60%]">
                    <Slider {...settings}>

                        {/* Slide 1 */}
                        <div className="text-center px-6">
                            <p className="text-gray-700 text-lg italic mb-6 max-w-[600px] mx-auto">
                                “This company provides excellent service and support.
                                I’m extremely happy with their professionalism.”
                            </p>

                            <div className="flex flex-col items-center mt-4">
                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg"
                                    alt="client"
                                    className="w-20 h-20 rounded-full object-cover shadow-md mb-3"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    John Doe
                                </h2>
                                <h2 className="text-gray-500 text-sm">
                                    CEO, Example Corp
                                </h2>
                            </div>

                            <div className="flex justify-center mt-4 text-yellow-500">
                                <CiStar size={24} />
                                <CiStar size={24} />
                                <CiStar size={24} />
                                <CiStar size={24} />
                                <CiStar size={24} />
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="text-center px-6">
                            <p className="text-gray-700 text-lg italic mb-6 max-w-[600px] mx-auto">
                                “Amazing experience! The quality of work exceeded my
                                expectations. Highly recommended.”
                            </p>

                            <div className="flex flex-col items-center mt-4">
                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg"
                                    alt="client"
                                    className="w-20 h-20 rounded-full object-cover shadow-md mb-3"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Sarah Smith
                                </h2>
                                <h2 className="text-gray-500 text-sm">
                                    Marketing Head
                                </h2>
                            </div>

                            <div className="flex justify-center mt-4 text-yellow-500">
                                <CiStar size={24} />
                                <CiStar size={24} />
                                <CiStar size={24} />
                                <CiStar size={24} />
                                <CiStar size={24} />
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    );
}
