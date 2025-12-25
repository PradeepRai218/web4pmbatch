import Link from 'next/link'
import React from 'react'

export default function Breadcrumds({ pageName }) {
    return (
        <div>
            <section className='text-center py-5 bg-[#FFFFFF] mt-0.5'>
                <h1 className='font-bold text-6xl text-[#C09578]'>{pageName}</h1>
                <p className='mt-2 text-[#000000]'>
                    <Link href="/" className="text-gray-800 hover:underline transition-all duration-300">Home</Link>
                    <span className="mx-1 text-black">/</span>
                    <a href="#" className="text-[#C09578] hover:underline transition-all duration-300">{pageName}</a>
                </p>
            </section>
        </div>
    )
}
