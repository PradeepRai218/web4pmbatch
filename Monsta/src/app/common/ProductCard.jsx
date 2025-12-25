"use client";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ item }) {
    return (
        <div
            key={item.id}
            className="w-[290px] bg-white border border-gray-200 shadow-md p-3 flex flex-col items-center 
      hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
            {/* Product Image */}
            <div className="relative w-full h-[230px] overflow-hidden mb-4">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />

                {/* Heart Button */}
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:text-[#F8F9F9] transition-all shadow-md">
                    <FaHeart />
                </button>
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-semibold text-gray-950 mb-1 text-center">{item.name}</h2>
            <p className="text-gray-400 text-sm mb-3 text-center">{item.desc}</p>

            {/* HR Line */}
            <hr className="w-[80%] border-t border-gray-300 mb-3" />

            {/* Product Price Section */}
            <div className="flex items-center justify-center gap-3 mb-3">
                {/* Old Price */}
                <p className="text-gray-400 text-sm line-through">₹{item.oldPrice}</p>

                {/* Current Price */}
                <p className="text-[#C09578] text-lg font-bold">₹{item.price}</p>
            </div>

            {/* Add to Cart Button */}
               <button
               
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold 
                hover:bg-[#b76e79] transition-all duration-300 shadow-md hover:shadow-lg"
            >
                Add to Cart
            </button>
        </div>
    );
}
 