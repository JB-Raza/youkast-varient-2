import React, { useState, useEffect } from 'react'

import PinField from 'react-pin-field'

import { useAnimate } from '../../../hooks/useAnimate.js'


export default function EmailVerification() {

    const [otp, setOtp] = useState("")

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])
    // animations
    const animateElem = useAnimate()
    useEffect(() => {
        animateElem(".animate-elem-up", { duration: 0.4, y: 70, stagger: 0.5, start: "top 70%" })
    }, [])

    // as the otp is entered, submit to check if the otp is correct or not


    return (
        <div className=' mb-50'>
            {/* hero */}
            <div className="theme-bg min-h-[500px] flex items-end justify-start">
                <div className="custom-container h-full w-full px-5 sm:px-13 md:px-20 lg:px-30 py-30">
                    <h2 className="heading-1 !text-white">Verify Your Email</h2>
                    <p className="sofia-light text-neutral-200 text-[18px] md:text-[20px] tracking-[-2%] leading-[32px]">Reset your Password Here.</p>
                </div>
            </div>


            <div className="max-w-[600px] mx-auto px-5 my-50">
                <form className='rounded-2xl bg-white shadow-lg px-5 sm:px-10 py-15 flex flex-col'>
                    <h4 className="animate-elem-up sofia-medium text-center font-medium tracking-[0.8px] text-[22px] sm:text-[30px] mb-4">Please Verify Your Account</h4>
                    <p className="animate-elem-up sofia-light text-[16px] sm:text-[19px] leading-[25px] tracking-[0.8px] text-center">If email not received check spam emails</p>

                    <div className="wrapper mt-15 mb-30">
                        <p className="animate-elem-up sofia-medium text-center font-medium tracking-[0.8px] text-[25px] sm:text-[30px] mb-4">Enter OTP</p>
                        {/* otp numbers circles */}
                        <div className="flex gap-2 md:gap-4 justify-center">
                            {/* <PinField /> */}
                            <PinField
                                length={6}
                                onChange={setOtp}
                                format={(e) => e.toUpperCase()}
                                validate="0123456789"
                                className={`otp-input h-[30px] w-[30px] md:h-[44px] md:w-[44px] border-2 border-[#6F809A] rounded-full text-center text-2xl $`}
                                autoFocus
                            />
                        </div>
                    </div>
                    <p className="animate-elem-up sofia-regular text-[16px] sm:text-[19px] leading-[25px] tracking-[0.8px] text-center">Don’t received OTP yet? <span className='text-[#6F809A]'>Resend</span></p>
                    <p className="animate-elem-up sofia-regular  text-[16px] sm:text-[19px] leading-[25px] tracking-[0.8px] text-center mt-5">Logout!</p>


                </form>
            </div>

        </div>
    )
}
