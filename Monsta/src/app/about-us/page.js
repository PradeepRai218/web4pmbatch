import React from 'react';
import Breadcrumds from '../common/Breadcrumds';
import { FaHeart, FaStar, FaCheckCircle } from "react-icons/fa";
import Bottomslider from '../Components/Home-components/Bottomslider';

export default function AboutUs() {
  let pageName = 'About Us';
  return (
    <div>
      <Breadcrumds pageName={pageName} />

      <div className="w-full bg-[#fff] ">
        {/* ===== Section 1 ===== */}
        <section className="py-16">
          <div className="max-w-[1320px] mx-auto px-4 text-center">
            {/* ===== Image Top ===== */}
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg"
              alt="Welcome"
              className="w-full rounded-xl shadow-lg mb-10"
            />

            {/* ===== Text Content ===== */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Monsta!
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-[1000px] mx-auto mb-6">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend
              option congue nihil imperdiet doming id quod mazim placerat facer
              possim assum. Typi non habent claritatem insitam, est usus
              legentis in iis qui facit eorum claritatem.
            </p>

            <blockquote className="italic text-gray-800 text-lg font-medium max-w-[800px] mx-auto border-l-4 border-[#b76e79] pl-5">
              “There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.”
            </blockquote>
          </div>
        </section>

        {/* ===== Section 2 (70%-30%) ===== */}
        <section className="py-20 bg-[#f9f9f9]">
          <div className="max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row gap-10">
            {/* ==== Left 70% ==== */}
            <div className="md:w-[70%] w-full flex flex-col md:flex-row justify-between gap-8">
              {/* --- Box 1 --- */}
              <div className="w-full bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <FaHeart className="text-[#b76e79] text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Passion for Design
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to blend creativity and functionality to bring
                  elegance into every space.
                </p>
              </div>

              {/* --- Box 2 --- */}
              <div className="w-full bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <FaStar className="text-[#b76e79] text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Quality Commitment
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We ensure premium materials and precise craftsmanship in all
                  our products.
                </p>
              </div>
            </div>

            {/* ==== Right 30% ==== */}
            <div className="md:w-[30%] w-full text-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg"
                alt="Product"
                className="mx-auto w-[150px] h-[300px] object-cover rounded-lg mb-4"
              />
              <h5 className="text-xl font-semibold text-gray-900 mb-2">
                Exclusive Collection
              </h5>
              <p className="text-gray-600 leading-relaxed">
                Discover our unique range of furniture crafted for luxury and
                comfort.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Section 3 (3 Divs in 1320px) ===== */}
        <section className="py-20">
          <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- Card 1 --- */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg"
                alt="Service"
                className="w-full rounded-lg mb-5"
              />
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                Custom Design
              </h4>
              <p className="text-gray-600">
                Tailor your furniture with your own design ideas and style
                preferences.
              </p>
            </div>

            {/* --- Card 2 --- */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1616627338883-587d44ce7a0c?auto=format&fit=crop&w=400&q=80"
                alt="Quality"
                className="w-full rounded-lg mb-5"
              />
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h4>
              <p className="text-gray-600">
                Every product is crafted with attention to detail and tested for
                durability.
              </p>
            </div>

            {/* --- Card 3 --- */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg"
                alt="Support"
                className="w-full rounded-lg mb-5"
              />
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                We’re always here to assist you with queries and after-sales
                support.
              </p>
            </div>
            
          </div>
          <Bottomslider/>
        </section>
      </div>
    </div>
  );
}
