import React, { useState, useEffect } from 'react'

// icons
import { Truck_1, ArrowRight, AuthFrame, CommunityFrame, SettingWheel, ArrowRightLong, MapLocationDot, EnvelopeOpen, PhoneFlip, Store1, UserHeadset, NewsPaper } from '../files.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHeadphones, faNewspaper } from '@fortawesome/free-solid-svg-icons'

// components
import { InputBox, Button } from '../universalComponents/index.js'

// animation
import { useAnimate } from '../../hooks/useAnimate.js'


export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", company: "", phoneNumber: "", subject: "", message: "" })

    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    // animations
    const animateElem = useAnimate()

    useEffect(() => {
        animateElem(".animate-elem-left", { duration: 0.4, x: -200 })
        animateElem(".animate-elem-right", { duration: 0.4, x: 200 })
        animateElem(".animate-elem-up", { duration: 0.4, y: 70, stagger: 0.5, start: "top 80%" })
        animateElem(".animate-scale-up", { duration: 0.4, scale: 0.5, start: "top 85%" })
    }, [])



    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='mb-40 overflow-clip'>
            {/* hero */}
            <div className="bg-[var(--theme-color)] min-h-[500px] flex items-end justify-start">
                <div className="custom-container w-full px-5 sm:px-10 md:px-18 xl:px-30 py-30">
                    <h1 className="animate-elem-up heading-1 sofia-bold !text-white">Get in touch</h1>
                    <p className="animate-elem-up text-neutral-200 sofia-light text-[18px] md:text-[20px] tracking-[-2%] leading-[32px]">Our team would love to hear from you!</p>
                </div>
            </div>
            <div className="custom-container">
                <div className="grid grid-cols-12">
                    {/* contact info */}
                    <div className="col-span-12 mx-auto sm:mx-0 lg:col-span-5 py-25 px-5 sm :px-15">
                        <div className="flex flex-col gap-10 items-center sm:items-start max-w-[450px] lg:ms-auto">

                            {/* card 1 */}
                            <div className="animate-elem-right flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <div className="rounded-full mt-auto flex items-center justify-center highlight-bg !min-w-[70px] h-[70px]">
                                    <img src={MapLocationDot} alt="truck..." />
                                </div>
                                <div className=''>
                                    <h4 className="sofia-bold text-[20px] text-center sm:text-start font-semibold tracking-tight">Address</h4>
                                    <p className='sofia-light medium-gray-text text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>17224 S. Figueroa Street, Gardena, CA 90248, USA</p>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className="animate-elem-right flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <div className="rounded-full mt-auto flex items-center justify-center highlight-bg !min-w-[70px] h-[70px]">
                                    <img src={EnvelopeOpen} alt="truck..." />
                                </div>
                                <div className=''>
                                    <h4 className="sofia-bold text-[20px] text-center sm:text-start font-semibold tracking-tight">Email</h4>
                                    <p className='sofia-light medium-gray-text text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>hello@YouKast.com</p>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className="animate-elem-right flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <div className="rounded-full mt-auto flex items-center justify-center highlight-bg !min-w-[70px] h-[70px]">
                                    <img src={PhoneFlip} alt="truck..." />
                                </div>
                                <div className=''>
                                    <h4 className="sofia-bold text-[20px] text-center sm:text-start font-semibold tracking-tight">Phone</h4>
                                    <p className='sofia-light medium-gray-text text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>+1 415 800-3128</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* form */}
                    <div className="col-span-12 relative lg:col-span-7 py-10 px-3 md:px-5 xl:pe-35">
                        <form className='relative lg:absolute w-full mx-auto lg:mx-0 lg:-top-2/3 rounded-2xl max-w-[700px] lg:max-w-[565px] xl:max-w-[600px] shadow-lg px-3 xs:!px-5 sm:px-10 py-15 bg-white flex flex-col gap-2 sm:gap-0'>
                            <InputBox label={"YOUR NAME"} labelClassName={"text-sm"} type='text' name='name' placeholderText={"Vitalik Buterin"} value={formData.name} handleOnInputChange={handleInputChange} />
                            <InputBox label={"EMAIL ADDRESS"} labelClassName={"text-sm"} type='email' name='email' placeholderText={"vitalik@company.com"} value={formData.email} handleOnInputChange={handleInputChange} />
                            <InputBox label={"COMPANY (OPTIONAL)"} labelClassName={"text-sm"} type='text' name='company' placeholderText={"One Solution LLC"} value={formData.company} handleOnInputChange={handleInputChange} />
                            <InputBox label={"PHONE NUMBER (OPTIONAL)"} labelClassName={"text-sm"} type='text' name='phoneNumber' placeholderText={"+1 415 800-1287"} value={formData.phoneNumber} handleOnInputChange={handleInputChange} />
                            <InputBox label={"SUBJECT"} labelClassName={"text-sm"} type='text' name='subject' placeholderText={"I want to ask something"} value={formData.subject} handleOnInputChange={handleInputChange} />

                            {/* text area / message */}
                            <div className='mt-7'>
                                <label className='text-[var(--dark-gray)] font-bold text-sm' htmlFor="message">MESSAGE</label>
                                <textarea name="message" id="message" value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder='Hi there, i would like to....'
                                    rows={5}
                                    className="font-medium mt-2 text-[var(--dark-gray)] rounded-xl w-full bg-[var(--light-gray)] px-5 py-3 outline-none"
                                ></textarea>

                            </div>

                            <div className="flex mt-5 gap-3 justify-end">
                                <Button
                                    content={"Send"}
                                    className={"w-full xs:!w-auto !px-15"} />

                            </div>

                        </form>
                    </div>
                </div>
            </div>


            {/* contact us (team) */}
            <div className="bg-[var(--light-sky-blue)] mt-30 lg:!mt-80 px-5 md:px-10 py-20">
                <div className="custom-container">
                    <div className="max-w-[1150px] mx-auto">

                        <h3 className='animate-elem-up text-[35px] md:text-[40px] lg:text-[48px] sofia-bold blackish-gray-text leading-[64px] tracking-[-2px] my-2'>Contact us</h3>
                        <p className="animate-elem-up sofia-light medium-gray-text text-[18px] !tracking-[-0.5px] leading-[32px]">Get in touch and let us know how we can help.</p>
                        <div className="grid grid-cols-12 mt-12 gap-6 mb-20">
                            {/* card 1 */}
                            <div className="animate-elem-right col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="card flex flex-col items-start gap-7 bg-white rounded-3xl px-7 py-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="flex items-center justify-center h-[70px] w-[70px] bg-[var(--light-highlight-color)] rounded-full">
                                            {/* <img src={Store1} alt="" /> */}
                                            <FontAwesomeIcon icon={faStore} className='text-[var(--highlight-color)] text-[30px]' />

                                        </div>

                                        <h4 className="text-[22px] md:text-[24px] leading-[150%] tracking-tight text-[var(--blackish-gray)]">Sales & Enterpise</h4>

                                    </div>
                                    <p className="cool-gray-text sofia-light text-[18px] !tracking-[-0.5px] leading-[24px]">We'd love to talk about how we can work together.</p>
                                    {/* btn */}
                                    <button className={`sofia-light group text-sm flex items-center gap-2 justify-center cursor-pointer px-[20px] py-[7px] text-white highlight-bg text-nowrap text-center transition-all duration-300 rounded-full`}>
                                        <span>Contact Sales</span>
                                        <img src={ArrowRight} alt="" className='group-hover:translate-x-1 duration-100' />
                                    </button>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className="animate-elem-up col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="card flex flex-col items-start gap-7 bg-white rounded-3xl px-7 py-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="flex items-center justify-center h-[70px] w-[70px] bg-[var(--light-highlight-color)] rounded-full">
                                            {/* <img src={UserHeadset} alt="" /> */}
                                            <FontAwesomeIcon icon={faHeadphones} className='text-[var(--highlight-color)] text-[30px]' />

                                        </div>

                                        <h4 className="text-[22px] md:text-[24px]  leading-[150%] tracking-tight text-[var(--blackish-gray)]">Help & Support</h4>
                                    </div>
                                    <p className="cool-gray-text sofia-light text-[18px] !tracking-[-0.5px] leading-[24px]">Get in touch and let us know how we can help.</p>
                                    {/* btn */}
                                    <button className={`sofia-light group text-sm flex items-center gap-2 justify-center cursor-pointer px-[20px] py-[7px] text-white highlight-bg text-nowrap text-center transition-all duration-300 rounded-full`}>
                                        <span>Get Support</span>
                                        <img src={ArrowRight} alt="" className='group-hover:translate-x-1 duration-100' />
                                    </button>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className="animate-elem-left col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="card flex flex-col items-start gap-7 bg-white rounded-3xl px-7 py-7">
                                    <div className="flex gap-5 items-center">
                                        <div className="flex items-center justify-center h-[70px] w-[70px] bg-[var(--light-highlight-color)] rounded-full">
                                            {/* <img src={NewsPaper} alt="" /> */}
                                            <FontAwesomeIcon icon={faHeadphones} className='text-[var(--highlight-color)] text-[30px]' />

                                        </div>

                                        <h4 className="text-[22px] md:text-[24px] leading-[150%] tracking-tight text-[var(--blackish-gray)]">Media & Press</h4>

                                    </div>
                                    <p className="cool-gray-text sofia-light text-[18px] !tracking-[-0.5px] leading-[24px]">Get YouKast news, company info, and media resources.</p>
                                    {/* btn */}
                                    <button className={`sofia-light group text-sm flex items-center gap-2 justify-center cursor-pointer px-[20px] py-[7px] text-white highlight-bg text-nowrap text-center transition-all duration-300 rounded-full`}>
                                        <span>Visit Newsroom</span>
                                        <img src={ArrowRight} alt="" className='group-hover:translate-x-1 duration-100' />
                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* join us on discord */}
                        <div className="grid grid-cols-12 gap-y-10 items-center">
                            {/* card 1 */}
                            <div className="animate-elem-right col-span-12 sm:col-span-6 flex gap-1">
                                {/* icon */}
                                <div className="flex items-center justify-center h-[25px] min-w-[25px] mt-1 rounded-full highlight-bg">
                                    <img src={Truck_1} alt="" className='w-[15px]' />

                                </div>
                                {/* content */}
                                <div className="flex flex-col gap-3 pt-1 px-2">
                                    <h5 className='text-[20px] leading-[24px] tracking-[-0.5px]'>Join us on Discord</h5>
                                    <p className="sofia-light medium-gray-text max-w-[400px] text-[16px] font-medium !tracking-[-0.5px] leading-[24px]">If you have technical questions, chat live with developers in the official YouKast Discord server</p>
                                </div>
                            </div>

                            {/* card 2 */}
                            <div className="animate-elem-left col-span-12 sm:col-span-6 flex gap-1">
                                {/* icon */}
                                <div className="flex items-center justify-center  h-[25px] min-w-[25px] mt-1 rounded-full highlight-bg">
                                    <img src={Truck_1} alt="" className='w-[15px]' />
                                </div>
                                {/* content */}
                                <div className="flex flex-col gap-3 px-2 pt-1">
                                    <h5 className='text-[20px] leading-[24px] tracking-[-0.5px]'>General communications</h5>
                                    <p className="sofia-light medium-gray-text max-w-[400px] text-[16px] font-medium !tracking-[-0.5px] leading-[24px]">For general queries, including partnership opportunities, please email info@YouKast.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* we work worldwide */}
            <div className="bg-white py-30 px-3 md:px-10">
                <div className="custom-container">
                    {/* we work world wide */}
                    <div className="grid grid-cols-12 gap-y-10">
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center ">
                            <img src={AuthFrame} alt="" className='animate-elem-right' />
                        </div>

                        <div className="col-span-12 lg:col-span-6 mx-auto lg:mx-0 px-5">
                            <div className='flex flex-col gap-y-15'>
                                <h3 className="animate-elem-left text-[35px] md:text-[40px] lg:text-[48px]">We work worldwide.</h3>
                                <div className="grid grid-cols-12 gap-x-5 max-w-[450px] gap-y-10 ">
                                    {/* col-1 */}
                                    <div className="animate-elem-left col-span-12 xs:!col-span-6">
                                        <h6 className="text-[18px] medium-gray-text">London</h6>
                                        <p className='sofia-regular medium-gray-text leading-[28px] !font-medium'>508 Bridle Avenue <br /> Newnan, GA <br /> 30263</p>
                                    </div>
                                    {/* col-2 */}
                                    <div className="animate-elem-left col-span-12 xs:!col-span-6">
                                        <h6 className="text-[18px] medium-gray-text">New York</h6>
                                        <p className='sofia-regular medium-gray-text leading-[28px] !font-medium'>508 Bridle Avenue <br /> Newnan, GA <br /> 30263</p>

                                    </div>
                                    {/* col-3 */}
                                    <div className="animate-elem-left col-span-12 xs:!col-span-6">
                                        <h6 className="text-[18px] medium-gray-text">Singapore</h6>
                                        <p className='sofia-regular medium-gray-text leading-[28px] !font-medium'>508 Bridle Avenue <br /> Newnan, GA <br /> 30263</p>

                                    </div>
                                    {/* col-4 */}
                                    <div className="animate-elem-left col-span-12 xs:!col-span-6">
                                        <h6 className="text-[18px] medium-gray-text">Paris</h6>
                                        <p className='sofia-regular medium-gray-text leading-[28px] !font-medium'>508 Bridle Avenue <br /> Newnan, GA <br /> 30263</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* get tips */}
                    <div className="grid grid-cols-12 items-center gap-y-10 max-w-[1150px] mx-auto rounded-3xl mt-10 py-20 px-3 md:px-10 bg-[var(--light-gray)]">
                        {/* col-1 */}
                        <div className="col-span-12 md:col-span-6 px-2">
                            <h4 className="text-[28px] md:text-[32px] text-center md:text-start leading-[40px] mb-3 tracking-tight">Get the tips to improve your work</h4>
                            <p className='cool-gray-text sofia-light text-center md:text-start text-[16px] leading-[24px] tracking-tight'>Stay up to date on our latest tutorials, tech talks, events, blog posts, and product launches by sign up our newsletter.</p>

                        </div>
                        {/* col-2 */}
                        <div className="col-span-12 flex flex-col items-center my-auto md:col-span-6">
                            <form className='relative w-[85%] mx-auto'>
                                <input type="text"
                                    placeholder='Enter your Email'
                                    className='outline-none w-full py-3 px-6 border-1 border-neutral-300 bg-white  rounded-xl placeholder:text-slate-500' />

                                <Button content={"Sign Up"}
                                    className={"xs:!absolute xs:!right-1 xs:!top-1/2 xs:!-translate-y-1/2 w-full xs:!w-auto mt-2 xs:!mt-0 !py-2 hover:scale-105"}
                                />
                            </form>
                            <p className='text-center text-sm mt-4 cool-gray-text sofia-light'>You can unsubscribe at any time. Read our <span className='text-[var(--theme-purple)] hover:underline cursor-pointer'>privacy policy</span>.</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* join our community */}
            <div className="custom-container">
                <div className="grid grid-cols-12 max-w-[1100px] items-stretch mx-auto px-4 py-30 gap-y-8 md:gap-x-7 ">
                    {/* col 1 */}
                    <div className="col-span-12 md:col-span-8">
                        <div className="rounded-3xl shadow-md px-10 bg-white grid grid-cols-12 pt-4 items-center">
                            {/* col 1 - 1 */}
                            <div className="col-span-12 sm:col-span-6 flex h-full pt-8 pb-10 flex-col justify-between items-start gap-y-10">

                                <div>
                                    <h5 className="text-[28px] md:text-[32px] text-center sm:text-start theme-text">Join our community</h5>
                                    <p className='cool-gray-text sofia-light text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>Learn from others, share your work, and extend your tool set with a diverse group of developers from around the world.</p>

                                </div>
                                <Button content={"Submit a question"} className={"mx-auto sm:mx-0"} />

                            </div>
                            {/* col 1 - 2 */}
                            <div className="col-span-12 sm:col-span-6 flex justify-center pt-10">
                                <img src={CommunityFrame} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* col 2 */}
                    <div className="col-span-12 md:col-span-4 px-2 pt-10 shadow-md bg-white rounded-2xl">
                        <div className='px-8'>
                            <h5 className="text-[28px] md:text-[32px] theme-text">Changelog</h5>
                            <p className='cool-gray-text sofia-light max-w-[200px] text-center md:text-start text-[16px] leading-[24px] tracking-tight'>Keep track of changes and upgrades to the YouKast API.</p>
                            <p className="sofia-bold text-[#00E5FF] group hover:cursor-pointer font-bold flex items-center gap-1 mt-1">
                                Releases <img src={ArrowRightLong} className='group-hover:translate-x-1 duration-100' alt="" />
                            </p>
                        </div>
                        <div className="flex items-center mt-8 sm:mt-0 justify-end w-full">
                            <img src={SettingWheel} alt="" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
