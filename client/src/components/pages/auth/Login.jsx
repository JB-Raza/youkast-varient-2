import React, { useState, useEffect } from 'react'
import { InputBox, Button } from '../../universalComponents/index.js'
import { AuthFrame } from '../../files.js'
import { Link, useNavigate } from 'react-router'

import { useAnimate } from '../../../hooks/useAnimate.js'

export default function Login() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    const [formData, setFormData] = useState({ email: "", password: "" })
    // animations
    const animateElem = useAnimate()
    useEffect(() => {
        animateElem(".animate-elem-up", { duration: 0.4, y: 70, stagger: 0.5, start: "top 70%" })
    }, [])


    const navigate = useNavigate()



    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleFormSubmit = (e) => {
        e.preventDefault()
        try {
            localStorage.setItem("accessToken", "token")
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            {/* hero */}
            <div className="theme-bg min-h-[500px] flex items-end justify-start">
                <div className="custom-container h-full w-full px-5 sm:px-13 md:px-20 lg:px-30 py-30">
                    <h2 className="animate-elem-up heading-1 !text-white">Welcome To YouKast</h2>
                    <p className="animate-elem-up sofia-light text-neutral-200 text-[18px] md:text-[20px] tracking-[-2%] leading-[32px]">Login to your Account to Access your Files.</p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto !my-50">
                <div className="grid grid-cols-12 items-center gap-5 px-4 lg:px-5">
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
                        <img src={AuthFrame} alt="" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:px-5">

                        <form
                            className='rounded-3xl bg-white shadow-lg px-5 sm:px-10 py-15 flex flex-col'>
                            <InputBox label={"Email"} type='email' name='email' required={true} placeholderText={"Info@gmail.com"} value={formData.email} handleOnInputChange={handleInputChange} />
                            <InputBox label={"Password"} type='password' name='password' required={true} placeholderText={"**********"} value={formData.password} handleOnInputChange={handleInputChange} />

                            <div className="flex flex-wrap justify-between items-center px-3 mt-3">
                                <div className="checkbox flex gap-2 items-center">
                                    <input type="checkbox" id='remeberMe' className='h-[17px] w-[17px]' />
                                    <label htmlFor="remeberMe" className='font-medium text-[var(--dark-gray)]'>Remeber me</label>
                                </div>
                                <Link to={"/account/forgot-password"} className='text-slate-500 font-normal leading-[26px] tracking-[-1px]'>Forgot Password?</Link>
                            </div>

                            <div className="flex flex-col mt-15 gap-3 items-center">
                                <Button
                                    onClick={handleFormSubmit}
                                    content={"Submit"}
                                    className={"w-full xs:!w-auto !px-15"} />
                                <p className='sofia-medium text-sm'>Don't have an account? <Link to={"/signup"} className='theme-text'>Sign Up</Link></p>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
