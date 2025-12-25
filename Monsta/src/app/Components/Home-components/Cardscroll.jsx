"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa";

export default function Cardscroll() {
  const sliderRef = useRef(null);

  // === Product Data ===
  const products = [
    {
      id: 1,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
      name: "Gold Necklace",
      desc: "Elegant gold design",
      price: "8999",
      oldPrice: 10999,
    },
    {
      id: 2,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg",
      name: "Diamond Ring",
      desc: "Shiny diamond beauty",
      price: "7999",
      oldPrice: 9999,
    },
    {
      id: 3,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg",
      name: "Silver Bracelet",
      desc: "Stylish and classy",
      price: "4999",
      oldPrice: 6999,
    },
    {
      id: 4,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
      name: "Pearl Earrings",
      desc: "Classic pearl charm",
      price: "5499",
      oldPrice: 7499,
    },
    {
      id: 5,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg",
      name: "Ruby Pendant",
      desc: "Romantic and beautiful",
      price: "6999",
      oldPrice: 8999,
    },
    {
      id: 6,
      img: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg",
      name: "Platinum Bracelet",
      desc: "Elegant modern design",
      price: "9999",
      oldPrice: 12499,
    },
  ];

  // === Slider Settings ===
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* === Header Section === */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Featured Products
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="hover:bg-gray-400 text-black  text-lg transition-all"
            >
              ‹
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="hover:bg-gray-400 text-black  text-lg transition-all"
            >
              ›
            </button>
          </div>
        </div>

        {/* === Divider === */}
        <hr className="border-gray-300 mb-6" />

        {/* === Slider Section === */}
        <Slider ref={sliderRef} {...settings}>
          {products.map((item) => (
            <div key={item.id} className="px-3">
              <div
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-3 flex flex-col items-center 
                hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative w-full h-[230px] overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500"
                  />

                  {/* Heart Button */}
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 text-black hover:text-[#b76e79] transition-all shadow-md">
                    <FaHeart />
                  </button>
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm mb-3 text-center">
                  {item.desc}
                </p>

                {/* HR Line */}
                <hr className="w-[80%] border-t border-gray-300 mb-3" />

                {/* Product Price Section */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <p className="text-gray-400 text-sm line-through">
                    ₹{item.oldPrice}
                  </p>
                  <p className="text-[#b76e79] text-lg font-bold">
                    ₹{item.price}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold 
                  hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
