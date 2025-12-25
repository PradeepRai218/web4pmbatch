import React from "react";

export default function Collection() {
    return (
        <div>
            <section className="py-12 bg-white">
                <h1 className="flex items-center justify-center text-4xl font-bold text-black mb-14 tracking-wide gap-4">
                    <span className="block w-[36%] h-[1px] bg-gradient-to-r from-[#C09578] to-[#e5b9b7]"></span>
                    Collection
                    <span className="block w-[36%] h-[1px] bg-gradient-to-l from-[#C09578] to-[#e5b9b7]"></span>
                </h1>


                <div className="max-w-[1320px] mx-auto flex justify-center gap-10 flex-wrap">

                    {/* ---------- Card 1 ---------- */}
                    <div className="relative w-[400px] h-[260px] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                        <img
                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp"
                            alt="Image 1"
                            className="w-full h-full object-cover transition-transform duration-700"
                        />

                        {/* Hover Overlay - Black Transparent from Bottom to Top */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>

                        <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:translate-y-[-8px]">
                            <h4 className="text-[14px] font-medium uppercase tracking-wide text-gray-300">
                                Design Creative
                            </h4>
                            <h1 className="text-[24px] font-bold leading-tight">
                                Chair Collection
                            </h1>
                        </div>
                    </div>

                    {/* ---------- Card 2 ---------- */}
                    <div className="relative w-[400px] h-[260px] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                        <img
                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp"
                            alt="Image 2"
                            className="w-full h-full object-cover transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>

                        <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:translate-y-[-8px]">
                            <h4 className="text-[14px] font-medium uppercase tracking-wide text-gray-300">
                                Bestselling Products
                            </h4>
                            <h1 className="text-[24px] font-bold leading-tight">
                                Chair Collection
                            </h1>
                        </div>
                    </div>

                    {/* ---------- Card 3 ---------- */}
                    <div className="relative w-[400px] h-[260px] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                        <img
                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp"
                            alt="Image 3"
                            className="w-full h-full object-cover transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>

                        <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:translate-y-[-8px]">
                            <h4 className="text-[14px] font-medium uppercase tracking-wide text-gray-300">
                                Onsale Products
                            </h4>
                            <h1 className="text-[24px] font-bold leading-tight">
                                Chair Collection
                            </h1>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
