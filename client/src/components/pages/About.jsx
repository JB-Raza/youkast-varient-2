import React, { useEffect } from 'react'

// icons
import { AboutPageFrame2, AboutPageFrame4, AboutPageFrame5, CloudArrowDown, HardDrive, PeopleFrame, PinDown, PurpleStar, SquareStar, TeamMember1, TeamMember10, TeamMember11, TeamMember2, TeamMember3, TeamMember4, TeamMember5, TeamMember6, TeamMember7, TeamMember8, TeamMember9, TestimonialMember1, UserGroupIcon } from '../files.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown, faHardDrive, faStar, faThumbtack, faUserGroup } from '@fortawesome/free-solid-svg-icons'


import { useAnimate } from '../../hooks/useAnimate.js'

export default function About() {

    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    // animations
    const animateElem = useAnimate()

    useEffect(() => {
        animateElem(".animate-elem-left", { duration: 0.4, x: -200 })
        animateElem(".animate-elem-right", { duration: 0.4, x: 200 })
        animateElem(".animate-elem-up", { duration: 0.4, y: 100, start: "top 90%" })
        animateElem(".animate-scale-up", { duration: 0.4, scale: 0.5, start: "top 85%" })
    }, [])


    return (
        <>
            {/* hero */}
            <div className='pt-40 pb-10 bg-[var(--deep-navy)] mb-5'>
                <div className='max-w-[1000px] px-5 flex flex-col gap-5 mx-auto'>
                    <h3 className="animate-elem-up heading-2 sofia-bold md:text-start !leading-[45px] md:!leading-[60px] lg:!leading-[72px] tracking-tighter !text-white !text-center">Building the world’s best IPFS Storage powered by decentralized network.</h3>
                    <p className=' animate-elem-up text-[#ECECFE] sofia-light text-center text-[20px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto'>We make decentralized file storage on IPFS as simple as using the tools you love and interoperable via API with developer-friendly documentation.</p>
                    <img src={PeopleFrame} className='mt-10' alt="" />
                </div>
            </div>
            {/* our mission */}
            <div className="custom-container overflow-clip">

                <div className="grid grid-cols-12 max-w-[1200px] mx-auto items-center gap-5 py-20 px-5">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col lg:px-5 items-end">
                        <h3 className="animate-elem-right text-[35px] md:!leading-[40px] lg:!leading-[48px]  lg:text-[42px] sofia-bold text-center lg:text-start mb-6 tracking-tight">Our mission is to protect human knowledge through freedom of information.</h3>
                        <p className='animate-elem-right medium-gray-text sofia-light text-center lg:text-start text-[18px] leading-[32px]'>Our goal is to make decentralized storage accessible and easy to use for everyone. We're doing this by building a scalable, secure and performant access layer to decentralized storage networks, with a seamless user experience interface.</p>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6">
                        <img src={AboutPageFrame2} alt="" className='animate-elem-left' />
                    </div>
                </div>
                {/* stats cards */}
                <div className="grid grid-cols-12 gap-5 max-w-[1200px] mb-20 px-5 lg:px-10 mx-auto">
                    {/* card 1 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl px-7 py-10 flex flex-col gap-3 theme-bg hover:!scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="animate-scale-up flex justify-center items-center mb-3 h-[60px] w-[60px] rounded-full bg-white">
                            {/* <img src={PinDown} alt="" className='w-[30px]' /> */}
                            <FontAwesomeIcon icon={faThumbtack} className='text-[var(--highlight-color)] text-[30px]' />

                        </div>

                        <p className='animate-elem-left text-white sofia-light text-[48px] leading-[48px] tracking-tight'>500M+</p>
                        <span className="text-sm sofia-light text-white">IPFS pinned</span>

                    </div>
                    {/* card 2 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl px-7 py-10 flex flex-col gap-3 bg-[var(--highlight-color)] hover:!scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="animate-scale-up flex justify-center items-center mb-3 h-[60px] w-[60px] rounded-full bg-white">
                            {/* <img src={HardDrive} alt="" className='w-[30px]' /> */}
                            <FontAwesomeIcon icon={faHardDrive} className='text-[var(--highlight-color)] text-[30px]' />

                        </div>

                        <p className='animate-elem-left text-white sofia-light text-[48px] leading-[48px] tracking-tight'>100TB+</p>
                        <span className="text-sm sofia-light text-white">IPFS pinned</span>

                    </div>
                    {/* card 3 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl px-7 py-10 flex flex-col gap-3 bg-[var(--surface-color)] hover:!scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="animate-scale-up flex justify-center items-center mb-3 h-[60px] w-[60px] rounded-full bg-white">
                            {/* <img src={CloudArrowDown} alt="" className='w-[30px]' /> */}
                            <FontAwesomeIcon icon={faCloudArrowDown} className='text-[var(--highlight-color)] text-[30px]' />

                        </div>

                        <p className='animate-elem-left text-white sofia-light text-[48px] leading-[48px] tracking-tight'>200k+</p>
                        <span className="text-sm sofia-light text-white">Requests per day</span>

                    </div>
                    {/* card 4 */}
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-xl px-7 py-10 flex flex-col gap-3 bg-[var(--theme-color)] hover:!scale-105 transition-transform duration-200 cursor-pointer">
                        <div className="animate-scale-up flex justify-center items-center mb-3 h-[60px] w-[60px] rounded-full bg-white">
                            {/* <img src={UserGroupIcon} alt="" className='w-[30px]' /> */}
                            <FontAwesomeIcon icon={faUserGroup} className='text-[var(--highlight-color)] text-[30px]' />
                        </div>

                        <p className='animate-elem-left text-white sofia-light text-[48px] leading-[48px] tracking-tight'>50k+</p>
                        <span className="text-sm sofia-light text-white">Happy users</span>

                    </div>
                </div>
            </div>
            {/* our story */}
            <div className="py-25 bg-neutral-100">

                <div className="grid grid-cols-12 px-5 lg:px-10 max-w-[1200px] mx-auto gap-y-10 lg:gap-x-10 items-center">

                    <div className="col-span-12 lg:col-span-6 mx-auto">
                        <img src={AboutPageFrame4} alt="" className='animate-elem-right' />
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <h4 className="animate-elem-left sofia-bold blackish-gray-text text-[48px] leading-[64px] tracking-tight">Our story</h4>
                        <div className="flex flex-col gap-y-7 mt-5">

                            <p className='animate-elem-left sofia-light medium-gray-text text-[18px] leading-[28px] tracking-[0.4px] max-w-[800px] mx-auto'>In the past few years, I have been learning about blockchain and found that IPFS is a distributed system for storing and accessing files, websites, applications and data developed by Juan Benet</p>

                            <p className='animate-elem-left sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto'>IPFS is an amazing technology that changes the way humans and computers communicate in a decentralized world. However, accessing and using this technology is still difficult for an average user</p>

                            <p className='animate-elem-left sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto'>Why is it difficult? To store a file on IPFS in a decentralized network like Filecoin, you need some computer knowledge to install software on your desktop, buy some cryptocurrency, and learn how to interact with the network.</p>

                            <p className='animate-elem-left sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto'>For that reason, I have developed a solution to store files on IPFS in a simpler way but still keep secure called YouKast. YouKast lets you store files on IPFS with file sharing, file request, and team collaboration features with a seamless user experience like the tools you've come to know and love.</p>

                            <p className='animate-elem-left sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto'>I hope YouKast can improve the file storage experience on a decentralized network and realize IPFS's vision of a future decentralized world.</p>

                        </div>

                    </div>

                </div>
            </div>


            {/* our value */}
            < div className="bg-[var(--theme-color)]" >
                <div className="custom-container pb-10">
                    <div className="max-w-[1200px] mx-auto px-10 py-20">

                        <h4 className="animate-elem-up text-[35px] md:text-[40px] lg:text-[48px] sofia-bold leading-[64px] tracking-tight text-white">Our value</h4>
                        <div className="grid grid-cols-12 mt-20 gap-y-15">
                            {/* col 1 */}
                            <div className="col-span-12 md:col-span-6 flex flex-col items-center xs:!flex-row xs:!items-start justify-center md:justify-start gap-7">

                                <h3 className='text-[36px] sofia-bold tracking-tighter flex items-center justify-center theme-text h-[80px] min-w-[80px] w-[80px] rounded-full bg-white '>01</h3>

                                <div className='flex flex-col gap-y-4'>
                                    <h4 className="sofia-bold text-[28px] md:text-[32px] text-white text-center xs:!text-start tracking-tight leading-[36px]">Make it exist</h4>
                                    <p className="text-sm sofia-light text-[#ECECFE] max-w-[300px] text-center xs:!text-start leading-[24px] tracking-tight">Our goal is to make decentralized storage accessible and easy to use for everyone.</p>
                                </div>

                            </div>
                            {/* col 2 */}
                            <div className="col-span-12 md:col-span-6 flex flex-col items-center xs:!flex-row xs:!items-start justify-center md:justify-start gap-7">

                                <h3 className='text-[36px] sofia-bold tracking-tighter flex items-center justify-center theme-text h-[80px] min-w-[80px] w-[80px] rounded-full bg-white '>02</h3>

                                <div className='flex flex-col gap-y-4'>
                                    <h4 className="sofia-bold text-[28px] md:text-[32px] text-white text-center xs:!text-start tracking-tight leading-[36px]">Make it simple</h4>
                                    <p className="sofia-light text-sm text-[#ECECFE] text-center xs:!text-start max-w-[300px] leading-[24px] tracking-tight">Our goal is to make decentralized storage accessible and easy to use for everyone.</p>
                                </div>

                            </div>
                            {/* col 3 */}
                            <div className="col-span-12 md:col-span-6 flex flex-col items-center xs:!flex-row xs:!items-start justify-center md:justify-start gap-7">

                                <h3 className='text-[36px] font-bold tracking-tighter flex items-center justify-center theme-text h-[80px] min-w-[80px] w-[80px] rounded-full bg-white '>03</h3>

                                <div className='flex flex-col gap-y-4'>
                                    <h4 className="sofia-bold text-[28px] md:text-[32px] text-white text-center xs:!text-start tracking-tight leading-[36px]">Make it useful</h4>
                                    <p className="sofia-light text-sm text-[#ECECFE] text-center xs:!text-start max-w-[300px] leading-[24px] tracking-tight">Our goal is to make decentralized storage accessible and easy to use for everyone.</p>
                                </div>

                            </div>
                            {/* col 4 */}
                            <div className="col-span-12 md:col-span-6 flex flex-col items-center xs:!flex-row xs:!items-start justify-center md:justify-start gap-7">

                                <h3 className='sofia-bold text-[36px] font-bold tracking-tighter flex items-center justify-center theme-text h-[80px] min-w-[80px] w-[80px] rounded-full bg-white '>04</h3>

                                <div className='flex flex-col gap-y-4'>
                                    <h4 className="sofia-bold text-[28px] md:text-[32px] text-white text-center xs:!text-start tracking-tight leading-[36px]">Make it worth</h4>
                                    <p className="sofia-light text-sm text-[#ECECFE] text-center xs:!text-start max-w-[300px] leading-[24px] tracking-tight">Our goal is to make decentralized storage accessible and easy to use for everyone.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* team and testimonial */}
            < div className="bg-white !py-25 px-4 overflow-x-clip" >
                <h4 className="animate-elem-up sofia-bold text-[35px] md:text-[40px] lg:text-[48px] leading-[44px] lg:leading-[64px] tracking-tight text-center mb-3">Get to know us</h4>
                <p className='animate-elem-up sofia-regular medium-gray-text text-center text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto'>YouKast is a 100% remote team. We believe that creative collaboration can happen anywhere and want our team to work where they feel most comfortable and inspired.</p>

                {/* team member */}
                <div className="flex justify-center flex-wrap max-w-[1200px] mx-auto mt-20 gap-7">
                    <img src={TeamMember1} alt="" className='animate-scale-up' />
                    <img src={TeamMember2} alt="" className='animate-scale-up' />
                    <img src={TeamMember3} alt="" className='animate-scale-up' />
                    <img src={TeamMember4} alt="" className='animate-scale-up' />
                    <img src={TeamMember5} alt="" className='animate-scale-up' />
                    <img src={TeamMember6} alt="" className='animate-scale-up' />
                    <img src={TeamMember7} alt="" className='animate-scale-up' />
                    <img src={TeamMember8} alt="" className='animate-scale-up' />
                    <img src={TeamMember9} alt="" className='animate-scale-up' />
                    <img src={TeamMember10} alt="" className='animate-scale-up' />
                    <img src={TeamMember11} alt="" className='animate-scale-up' />
                </div>

            </div>
            {/* testimonial */}
            <div className='mt-20 md:mt-30 lg:my-35'>

                <h3 className="animate-elem-up sofia-bold text-[35px] md:text-[40px] lg:text-[42px] leading-[44px] lg:leading-[64px] tracking-tight text-center">Testimonials</h3>

                <div className="grid grid-cols-12 gap-y-7 md:gap-x-7 max-w-[1200px] mb-15 md:mb-0 md:my-15 sm:px-2 mx-auto">
                    {/* testimonial card col 1 */}
                    <div className="col-span-12 min-[900px]:col-span-6">
                        <div className="animate-elem-right card rounded-3xl bg-white p-6 sm:p-12">

                            <p className='sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto line-clamp-6'>Our company uses YouKast, and I also use Box personally to store my documents, photos, videos, sensitive data etc. YouKast is amazing - so much more than just cloud storage. You can watch videos, share photos, scan documents, electronic sign and send documents, secure sensitive data and so much more.</p>

                            <div className="flex flex-wrap justify-between gap-y-3 mt-7">
                                {/* profile */}
                                <div className="profile flex gap-3 items-center">
                                    <img src={TestimonialMember1} alt="" />
                                    <div className="">
                                        {/* rating */}
                                        <div className="hidden max-[480px]:flex gap-x-1 max-[900px]:hidden max-[990px]:flex items-center">

                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            {/* <img src={SquareStar} className='h-[24px] w-[24px]' alt="" /> */}

                                        </div>
                                        <h5 className="sofia-bold text-[22px] leading-[24px] tracking-tight">Rodrigo Duarte</h5>
                                        <p className="text-sm sofia-light cool-gray-text mt-0.5 leading-[24px] tracking-tight">Graphic Designer</p>
                                    </div>
                                </div>

                                {/* rating */}
                                <div className="flex gap-x-1 max-[480px]:hidden max-[900px]:flex max-[990px]:hidden items-center">

                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>

                                    {/* <img src={SquareStar} className='h-[24px] w-[24px]' alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* testimonial card col 2 */}
                    <div className="col-span-12 min-[900px]:col-span-6">
                        <div className="animate-elem-left card rounded-3xl bg-white p-6 sm:p-12">

                            <p className='sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[0.4px] max-w-[800px] mx-auto line-clamp-6'>Our company uses YouKast, and I also use Box personally to store my documents, photos, videos, sensitive data etc. YouKast is amazing - so much more than just cloud storage. You can watch videos, share photos, scan documents, electronic sign and send documents, secure sensitive data and so much more.</p>

                            <div className="flex flex-wrap justify-between gap-y-3 mt-7">
                                {/* profile */}
                                <div className="profile flex gap-3 items-center">
                                    <img src={TestimonialMember1} alt="" />
                                    <div className="">
                                        {/* rating */}
                                        <div className="hidden max-[480px]:flex gap-x-1 max-[900px]:hidden max-[990px]:flex items-center">

                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>
                                            <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                            </div>

                                        </div>
                                        <h5 className="sofia-bold text-[22px] leading-[24px] tracking-tight">Rodrigo Duarte</h5>
                                        <p className="text-sm sofia-light cool-gray-text mt-0.5 leading-[24px] tracking-tight">Graphic Designer</p>
                                    </div>
                                </div>

                                {/* rating */}
                                <div className="flex gap-x-1 max-[480px]:hidden max-[900px]:flex max-[990px]:hidden items-center">

                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>
                                    <div className="rounded-sm flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)]">
                                        <FontAwesomeIcon icon={faStar} className='text-[var(--highlight-color)] text-[14px]' />
                                    </div>

                                    {/* <img src={SquareStar} className='h-[24px] w-[24px]' alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* our vision */}

            < div className="bg-white py-10 md:py-20 lg:py-30" >
                <div className="custom-container px-2 sm:px-4">
                    <h3 className="animate-elem-up heading-1 sofia-bold text-center leading-[64px] trackging-tighter mb-6">Our vision</h3>
                    <p className='animate-elem-up medium-gray-text sofia-regular text-center text-[20px] leading-[32px] tracking-[0.4px] max-w-[840px] mx-auto'>Our vision is that YouKast will democratize distributed data storage on a decentralized network in the next decade and empower everyone to escape the control of centralized data companies.</p>

                    <img src={AboutPageFrame5} className='mx-auto my-20  lg:max-w-[800px]' alt="" />

                </div>
            </div >

        </>
    )
}
