import React, { useEffect } from 'react'
// icons 
import { FileTransferColabPic, Frame_1, Frame_2, LightingIcon, SpeedMeter, PaperPlane_1, Tags_2, ShieldCheck_3, ChartMixed_1, ClockRotateLeft_3, ArrowRight, LockKeyhole_3, BoxCheck_1, Link_5 } from '../files.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faLink, faLock, faCheckToSlot } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router'

// components
import { Hero, FAQ, Pricing } from '../sections/index.js'
import { Button } from '../universalComponents/index.js'

// animation
import { useAnimate } from '../../hooks/useAnimate.js'


export default function Home() {

  // animations
  // scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const animateElem = useAnimate()
  useEffect(() => {
    animateElem(".animate-elem-left", { duration: 0.4, x: -200 })
    animateElem(".animate-elem-right", { duration: 0.4, x: 200 })
    animateElem(".animate-scale-up", { duration: 0.4, scale: 0.5, start: "top 75%" })
  }, [])

  return (
    <div className='overflow-clip'>
      <Hero />

      {/* premium file transfer tool */}
      <div className="custom-container py-25">
        {/* frame */}
        <div className="frame flex items-center justify-center mb-8">
          <img src={Frame_1} alt="" />
        </div>
        <h3 className="animate-scale-up text-[48px] sofia-bold leading-15 text-center mb-4 text-wrap tracking-tighter">Premium file transfer tool</h3>

        <p className='animate-scale-up medium-gray-text sofia-light max-w-[900px] px-3 text-wrap text-center mx-auto text-[18px] leading-[32px] tracking-tight'>YouKast Transfer is a great way to share large files that you don’t need to collaborate on or don’t want recipients to edit. You can send any file stored in your YouKast account – or you can skip adding files or checking that you have enough space. Your recipient doesn’t need an account to receive the files you’ve transferred. And you can confirm delivery with notifications and see exactly how many times a file is downloaded.</p>

        {/* buttons */}
        <div className="py-5 px-3 flex flex-wrap justify-center my-10 gap-5">
          <Link to={"/signup"} className='w-full xs:!w-auto'>
            <Button content={"Get Started"} />
          </Link>

          <Button content={"More About Us"} reverseStyle={true} />
        </div>
      </div>

      {/* list features */}
      <div className="bg-white py-25">

        <div className="custom-container">
          <div className="grid grid-cols-12 grid-rows-2 gap-5 px-2 sm:px-5 md:px-10 max-w-[1200px] mx-auto">

            {/* col 1 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 h-min mt-auto sm:mt-0">
              <h3 className="blackish-gray-text sofia-bold text-[42px] leading-15 tracking-tight mb-4 text-center lg:text-start text-wrap">List Features</h3>
            </div>
            {/* col 2 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-5">
              <div className="card flex flex-col min-h-[300px] p-10 bg-[#EDF0F4] rounded-3xl justify-between">
                <div className="container flex justify-between items-center">
                  <h4 className="animate-scale-up blackish-gray-text sofia-bold text-[28px] leading-[36px] tracking-tight">Send large file</h4>

                  {/* <img src={PaperPlane_1} alt="" /> */}
                  <FontAwesomeIcon icon={faPaperPlane} className='text-[var(--highlight-color)] text-[30px]' />

                </div>
                <p className='animate-scale-up cool-gray-text sofia-light max-w-[900px] px-3 text-wrap mx-auto text-[16px] leading-[32px] tracking-tight'>Hand off up to 100 GB of files and let anyone access files, even without an account.</p>
              </div>
            </div>

            {/* col 3 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-5">
              <div className="card flex flex-col min-h-[300px] p-10 bg-[#EDF0F4] rounded-3xl justify-between">
                <div className="container flex justify-between items-center">
                  <h4 className="animate-scale-up blackish-gray-text sofia-bold text-[28px] leading-[36px] tracking-tight">Shareable link</h4>
                  {/* <img src={Link_5} alt="" /> */}
                  <FontAwesomeIcon icon={faLink} className='text-[var(--highlight-color)] text-[30px]' />
                </div>
                <p className='animate-scale-up cool-gray-text sofia-light max-w-[900px] px-3 text-wrap mx-auto text-[16px] leading-[32px] tracking-tight'>Hand off up to 100 GB of files and let anyone access files, even without an account.</p>
              </div>
            </div>
            {/* col 4 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-5">
              <div className="card flex flex-col min-h-[300px] p-10 bg-[#EDF0F4] rounded-3xl justify-between">
                <div className="container flex justify-between items-center">
                  <h4 className="animate-scale-up blackish-gray-text sofia-bold text-[28px] leading-[36px] tracking-tight">Password protection</h4>
                  {/* <img src={LockKeyhole_3} alt="" /> */}
                  <FontAwesomeIcon icon={faLock} className='text-[var(--highlight-color)] text-[30px]' />

                </div>
                <p className='animate-scale-up cool-gray-text sofia-light max-w-[900px] px-3 text-wrap mx-auto text-[16px] leading-[32px] tracking-tight'>Hand off up to 100 GB of files and let anyone access files, even without an account.</p>
              </div>
            </div>
            {/* col 5 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-5">
              <div className="card flex flex-col min-h-[300px] p-10 bg-[#EDF0F4] rounded-3xl justify-between">
                <div className="container flex justify-between items-center">
                  <h4 className="animate-scale-up blackish-gray-text sofia-bold text-[28px] leading-[36px] tracking-tight">Confirm delivery</h4>
                  {/* <img src={BoxCheck_1} alt="" /> */}
                  <FontAwesomeIcon icon={faCheckToSlot} className='text-[var(--highlight-color)] text-[30px]' />

                </div>
                <p className='animate-scale-up cool-gray-text sofia-light max-w-[900px] px-3 text-wrap mx-auto text-[16px] leading-[32px] tracking-tight'>Hand off up to 100 GB of files and let anyone access files, even without an account.</p>
              </div>
            </div>

            {/* col 6 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 cursor-pointer group bg-[var(--theme-color)] rounded-3xl flex flex-col justify-between items-end px-3 py-10 text-white">
              <img src={Tags_2} alt="" className='px-5' />
              <p className='sofia-light font-semibold self-center flex items-center gap-1'>View Pricing <img src={ArrowRight} className='transition-transform duration-200  group-hover:translate-x-1' alt="" />
              </p>
            </div>

          </div>



        </div>
      </div>


      {/* benefit from many advantage features */}
      <div className="custom-container !py-25">
        <div className="grid grid-cols-12 gap-y-10 md:gap-y-0">
          <div className="col-span-12 animate-elem-right lg:col-span-6 flex items-center justify-center">
            <img src={Frame_2} alt="" />
          </div>

          <div className="col-span-12 lg:col-span-6 overflow-clip px-5 mt-15 lg:mt-0 md:px-10 flex flex-col items-center justify-start">
            <h2 className="animate-elem-left sofia-bold  heading-2 !leading-[45px] lg:!leading-[64px] tracking-[-1.7px] text-center lg:text-start text-[#0E0F10]">Benefit from the many advantages features.</h2>
            <p className='animate-elem-left medium-gray-text sofia-light text-wrap text-[18px] mx-auto lg:mx-0 text-center lg:text-start leading-[32px] self-start max-w-[550px] tracking-tight mt-3'>YouKast is the fastest and most secure way to share your files. Whether you want to send a confidential contract, over 100 holiday photos or a multi-gigabyte video, then TransferXL is the service that fulfills your needs for the perfect data transfer.</p>

            {/* features cards */}
            <div className="grid grid-cols-12 px-5 gap-x-5 !ms-auto gap-y-7 my-17">
              {/* col 1 */}
              <div className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start gap-2">
                {/* icon */}
                <div className='animate-scale-up relative h-[60px] w-[60px] rounded-full highlight-bg flex items-center justify-center'>
                  <img src={SpeedMeter}
                    alt="" />
                  <img src={LightingIcon}
                    className='absolute bottom-4 right-3'
                    alt="" />
                </div>
                <h5 className="animate-scale-up text-[22px] blackish-gray sofia-bold leading-loose tracking-tight">Fast file Sharing</h5>
                <p className='animate-scale-up cool-gray-text sofia-light text-wrap text-[16px] text-center sm:text-start leading-[24px] tracking-tighter'>Our servers are located all around the world to provide you with the fastest upload and download speed.</p>
              </div>
              {/* col 2 */}
              <div className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start gap-2">
                {/* icon */}
                <div className='animate-scale-up relative h-[60px] w-[60px] rounded-full highlight-bg flex items-center justify-center'>
                  <img src={ChartMixed_1}
                    alt="" />
                </div>
                <h5 className="animate-scale-up text-[22px] blackish-gray sofia-bold leading-loose tracking-tight">Track your transfers</h5>

                <p className='animate-scale-up cool-gray-text sofia-light text-wrap text-[16px] text-center sm:text-start leading-[24px] tracking-tighter'>We will also let you know when any of your recipients download your transferred files.</p>
              </div>
              {/* col 3 */}
              <div className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start gap-2">
                {/* icon */}
                <div className='animate-scale-up relative h-[60px] w-[60px] rounded-full highlight-bg flex items-center justify-center'>
                  <img src={ClockRotateLeft_3}
                    alt="" />
                </div>
                <h5 className="animate-scale-up text-[22px] blackish-gray sofia-bold leading-loose tracking-tight">Transfer history</h5>

                <p className='animate-scale-up cool-gray-text sofia-light text-wrap text-[16px] text-center sm:text-start leading-[24px] tracking-tighter'>All your data transfers are shown in a convenient time line, so you can instantly see which file transfers.</p>
              </div>
              {/* col 4 */}
              <div className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start gap-2">
                {/* icon */}
                <div className='animate-scale-up relative h-[60px] w-[60px] rounded-full highlight-bg flex items-center justify-center'>
                  <img src={ShieldCheck_3}
                    alt="" />
                </div>
                <h5 className="animate-scale-up text-[22px] blackish-gray sofia-bold leading-loose tracking-tight">Secure  data transfer</h5>
                <p className='animate-scale-up cool-gray-text sofia-light font-medium text-wrap text-[16px] text-center sm:text-start leading-[24px] tracking-tighter'>The file transfer is encrypted on your computer, so no unencrypted data is being sent to us.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-white py-25">
        <FAQ />
      </div>

      {/* pricing section */}
      <Pricing />


      {/* File transfer drive efficient colab  */}
      <div className="custom-container !my-40 px-4">
        <div className="grid grid-cols-12 items-center bg-[var(--light-sky-blue)] rounded-[24px] gap-y-10 max-w-[1200px] mx-auto px-3 sm:px-5 md:px-17 py-15">

          <div className="col-span-12 lg:col-span-6 xl:pe-20">
            <h2 className="animate-elem-left sofia-bold text-[35px] md:text-[40px] lg:text-[48px] leading-[45px] md:leading-[50px] lg:leading-15 mb-4 text-center lg:text-start text-wrap tracking-tighter">File transfers drive efficient colaboration</h2>
            <p className='animate-elem-left sofia-light medium-gray-text max-w-[900px] text-center lg:text-start px-3 text-wrap mx-auto text-[18px] leading-[32px] tracking-tight'>Transfer is available to any YouKast user – even Basic subscribers with a free plan. However, the file size you’re allowed may depend on the plan you have.</p>

            {/* buttons */}
            <div className="animate-scale-up flex flex-wrap justify-center lg:justify-start my-10 gap-5">
              <Link to={"/signup"} className='w-full xs:!w-auto'>
                <Button content={"Get Started"} />
              </Link>

              <Button content={"Get $10 Credit"} reverseStyle={true} />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img src={FileTransferColabPic} className='animate-scale-up' alt="no img found" />
          </div>
        </div>
      </div>

    </div>
  )
}
