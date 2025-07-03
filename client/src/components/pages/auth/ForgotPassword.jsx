import React, { useState, useEffect } from 'react'
import { InputBox, Button } from '../../universalComponents/index.js'
import { AuthFrame } from '../../files.js'

import { Link } from 'react-router'
import { useAnimate } from '../../../hooks/useAnimate.js'


export default function ForgotPassword() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])
  // animations
  const animateElem = useAnimate()
  useEffect(() => {
    animateElem(".animate-elem-up", { duration: 0.4, y: 70, stagger: 0.5, start: "top 70%" })
  }, [])

  const [formData, setFormData] = useState({ email: "" })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='mb-50'>

      {/* hero */}
      <div className="bg-[var(--theme-purple)] min-h-[500px] flex items-end justify-start">
        <div className="custom-container h-full w-full px-5 sm:px-13 md:px-20 lg:px-30 py-30">
          <h2 className="animate-elem-up heading-1 !text-white">Forgot Password</h2>
          <p className="animate-elem-up text-neutral-200 text-[18px] md:text-[20px] tracking-[-2%] leading-[32px]">No Worries, We will send you instructions.</p>
        </div>
      </div>

      <div className="custom-container !my-50">
        <div className="grid grid-cols-12 items-center gap-5 px-5">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img src={AuthFrame} alt="" />
          </div>
          <div className="col-span-12 lg:col-span-6 px-5">
            <form className='rounded-3xl bg-white shadow-lg px-10 py-15 flex flex-col'>
              <h4 className="animate-elem-up sofia-medium text-center tracking-[0.8px] text-[30px] mb-6" style={{ fontWeight: "500" }}>Forgot Password?</h4>

              <InputBox label={"EMAIL ADDRESS"} type='email' name='email' required={true} placeholderText={"Info@gmail.com"} value={formData.email} handleOnInputChange={handleInputChange} />

              <div className="flex flex-col mt-13 gap-4 items-center">
                <Button
                  content={"Submit"}
                  className={" w-full xs:!w-auto !px-15"} />
                <p className='font-medium text-sm'>Back To <Link to={"/login"} className='theme-text'>Login</Link></p>

              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
