import React from 'react'

export default function Bgimfsection() {
    return (
        <div>
            <section
                className="relative w-full h-[70vh] bg-cover bg-center flex items-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg')",
                }}
            >
                <div className="max-w-[1320px] mx-auto w-full px-6">
                    <div className="w-1/2 text-left text-black transform transition-all duration-500 hover:scale-[1.05] p-6 rounded-xl">
                        <h1 className="text-5xl font-bold mb-4">New Trending Collection</h1>
                        <p className="text-lg mb-6">
                            We Believe That Good Design is Always in Season
                        </p>
                        <button className="border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
                            SHOPPING NOW
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
