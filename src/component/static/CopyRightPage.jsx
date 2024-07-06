import React from 'react';

const CopyrightPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center gap-y-4 bg-gradient-to-b from-gray-300 to-gray-500  opacity-90 px-6 py-1 sm:px-3.5">
            <div className="absolute left-[max(-7rem, calc(50% - 52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div className="aspect-[577/310] w-[25.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
            </div>
            <div className="absolute left-[max(45rem, calc(50% + 8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div className="aspect-[577/310] w-[25.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
            </div>
            <div className="flex flex-col items-center gap-y-2 text-center">
                <p className="text-sm leading-6 text-gray-900">
                    <strong className="font-semibold">&#169; 2024 </strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx="1" cy="1" r="1" />
                    </svg>KJXSOFTTECH <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx="1" cy="1" r="1" /> </svg> All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default CopyrightPage;
