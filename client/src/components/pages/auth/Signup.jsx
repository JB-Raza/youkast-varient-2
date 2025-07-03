import { useState, useEffect } from 'react'
import { InputBox, Button, Modal } from '../../universalComponents/index.js'
import { AuthFrame } from '../../files.js'
import { Link } from 'react-router'

import { useAnimate } from '../../../hooks/useAnimate.js'

export default function Signup() {
  // scroll to top
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, [])
  // animations
  const animateElem = useAnimate()
  useEffect(() => {
    animateElem(".animate-elem-up", { duration: 0.4, y: 70, stagger: 0.5, start: "top 70%" })
  }, [])
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "" })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({ title: '', description: '' })


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  return (
    <div className='mb-50'>
      {/* modal */}
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modalData={modalData}>
      </Modal>

      {/* hero */}
      <div className="theme-bg min-h-[500px] flex items-end justify-start">
        <div className="custom-container h-full w-full px-5 sm:px-13 md:px-20 lg:px-30 py-30">
          <h2 className="animate-elem-up heading-1 !text-white">Welcome To YouKast</h2>
          <p className="animate-elem-up sofia-light text-neutral-200 text-[18px] md:text-[20px] tracking-[-2%] leading-[32px]">Our team would be love to hear from you!</p>
        </div>
      </div>

      <div className="custom-container !my-50">
        <div className="grid grid-cols-12 items-center gap-5 px-3">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img src={AuthFrame} alt="" />
          </div>
          <div className="col-span-12 lg:col-span-6 sm:px-5 lg:pe-10">
            <form className='rounded-3xl bg-white max-w-[750px] mx-auto shadow-lg px-4 py-15 flex flex-col'>
              <h6 className="animate-elem-up text-[20px] leading-[25px] tracking-[0.2px] text-center">Register here</h6>
              <h3 className="animate-elem-up sofia-medium text-center tracking-[0.8px] text-[30px] mb-6 theme-text" style={{ fontWeight: "500" }}>Register to YouKast!</h3>

              {/* first and last name */}
              <div className="grid grid-cols-12 gap-4">
                {/* first name */}
                <div className="col-span-12 sm:col-span-6">
                  <InputBox label={"First Name"} name='firstName' required={true} placeholderText={"first name"} value={formData.firstName} handleOnInputChange={handleInputChange} />
                </div>
                {/* last name */}
                <div className="col-span-12 sm:col-span-6">
                  <InputBox label={"Last Name"} name='lastName' required={true} placeholderText={"last name"} value={formData.lastName} handleOnInputChange={handleInputChange} />
                </div>

              </div>

              {/* email and phone */}
              <div className="grid grid-cols-12 gap-4">
                {/* email */}
                <div className="col-span-12 sm:col-span-6">
                  <InputBox label={"Email"} type='email' name='email' required={true} placeholderText={"Info@gmail.com"} value={formData.email} handleOnInputChange={handleInputChange} />
                </div>
                {/* phone */}
                <div className="col-span-12 sm:col-span-6">
                  <InputBox label={"Phone"} name='phone' required={true} placeholderText={"123456789"} value={formData.phone} handleOnInputChange={handleInputChange} />
                </div>
              </div>
              {/* password and confirm password */}
              <div className="grid grid-cols-12 gap-4">
                {/* password */}
                <div className="col-span-12 sm:col-span-6">
                  <InputBox label={"Password"} type='password' name='password' required={true} placeholderText={"**********"} value={formData.password} handleOnInputChange={handleInputChange} />
                </div>

                {/* confirm password*/}
                <div className="col-span-12 sm:col-span-6">
                  <InputBox label={"Confirm Password"} type='password' name='confirmPassword' required={true} placeholderText={"**********"} value={formData.confirmPassword} handleOnInputChange={handleInputChange} />
                </div>


              </div>
              <div className="flex flex-wrap justify-between items-center px-3 mt-3">
                <div className="checkbox flex gap-2 items-start mt-4">
                  <input type="checkbox" id='acknowledgePrivacy' className='h-[20px] w-[20px]' />

                  {/* open/close modal */}
                  <label htmlFor="acknowledgePrivacy" className='sofia-light cursor-pointer text-[14px] sm:text-[16px] leading-[20px] tracking-[0.8px] text-[#6F809A]'>
                    I agree with&nbsp;
                    <button type='button' onClick={() => {
                      setIsModalOpen(true)
                      setModalData(termsAndConditionsData)
                    }}
                      className="underline cursor-pointer hover:text-[#5987cc]">terms & conditions</button>
                    &nbsp;and&nbsp;
                    <button type='button' onClick={() => {
                      setIsModalOpen(true)
                      setModalData(privacyPolicyData)
                    }}
                      className="underline cursor-pointer hover:text-[#5987cc]">privacy policy</button>&nbsp;
                  </label>
                </div>
              </div>

              <div className="flex flex-col mt-15 gap-3 items-center">
                <Button
                  content={"Submit"}
                  className={"w-full xs:!w-auto !px-15"} />
                <p className='sofia-medium text-[15px] md:text-[17px] leading-[25px] tracking-[0.8px] mt-5'>Already have an Account? <Link to={"/login"} className='theme-text'>Login In</Link></p>

              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

const termsAndConditionsData = {
  title: "Terms & Conditions",
  description: `We respect your privacy and are committed to protecting your personal information. We collect minimal data necessary to provide our services, such as name and email. Your information is never sold or shared with third parties without consent. Data is stored securely and used only for communication or service improvements. can request to access, update, or delete your data at any time. We use cookies to enhance user experience, not to track you. By using our site, you agree to this privacy policy. We may update this policy; changes will be posted here. For questions, contact us at [your email or contact info].`
}

const privacyPolicyData = {
  title: "Privacy Policy",
  description: `We respect your privacy and are committed to protecting your personal information. We collect minimal data necessary to provide our services, such as name and email. Your information is never sold or shared with third parties without consent. Data is stored securely and used only for communication or service improvements. can request to access, update, or delete your data at any time. We use cookies to enhance user experience, not to track you. By using our site, you agree to this privacy policy. We may update this policy; changes will be posted here. For questions, contact us at [your email or contact info].`
}