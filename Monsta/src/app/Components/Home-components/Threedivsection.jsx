import React from 'react'
import { IoEarthOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

export default function Threedivsection() {
    return (
        <div>
            <section className="w-full bg-[#F8F9F9] py-10">
                <div className="max-w-[1320px] mx-auto flex justify-between gap-6 flex-wrap">

                    {/* ===== Box 1 ===== */}
                    <div className="w-[32%] text-center p-5 group transition-all duration-300 hover:bg-gray-200 rounded-lg cursor-pointer">
                        {/* Round Div with Hover Effect */}
                        <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-gray-300 rounded-full mb-4 transition-all duration-300 group-hover:border-[#B76E79]">
                            <IoEarthOutline className="text-gray-500 text-3xl transition-all duration-300 group-hover:text-[#B76E79]" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-black transition-all duration-300">
                            Free Shipping
                        </h2>
                        <p className="text-black text-sm transition-all duration-300">
                            Free shipping on all order
                        </p>
                    </div>

                    {/* ===== Box 2 ===== */}
                    <div className="w-[32%] text-center p-5 group transition-all duration-300 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-gray-300 rounded-full mb-4 transition-all duration-300 group-hover:border-[#B76E79]">
                            <FaRegCheckCircle className="text-gray-500 text-3xl transition-all duration-300 group-hover:text-[#B76E79]" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-black transition-all duration-300">
                            Money Return
                        </h2>
                        <p className="text-black text-sm transition-all duration-300">
                            Back guarantee under 7 days
                        </p>
                    </div>

                    {/* ===== Box 3 ===== */}
                    <div className="w-[32%] text-center p-5 group transition-all duration-300 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-gray-300 rounded-full mb-4 transition-all duration-300 group-hover:border-[#B76E79]">
                            <MdAccessTime className="text-gray-500 text-3xl transition-all duration-300 group-hover:text-[#B76E79]" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-black transition-all duration-300">
                            Online Support
                        </h2>
                        <p className="text-black text-sm transition-all duration-300">
                            Support online 24 hours a day
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}
