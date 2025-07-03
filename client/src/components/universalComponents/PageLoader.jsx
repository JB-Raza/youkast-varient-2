import React from 'react'

export default function PageLoader() {
    return (
        <div className='fixed inset-0 bg-[rgb(27,92,129)] flex items-center justify-center'>
            <div className="flex items-center justify-center  animate-loader absolute h-[190px] w-[190px] md:h-[210px] md:w-[210px] border-t-4 border-red-500 rounded-full">
            </div>

            <div className="flex items-center justify-center animate-loader-reverse absolute h-[160px] md:h-[185px] w-[160px] md:w-[185px] border-t-4 border-[var(--theme-color)] rounded-full">
            </div>
            <h1 className="heading-5 text-white text-center animate-pulse">Loading...</h1>
        </div>
    )
}
