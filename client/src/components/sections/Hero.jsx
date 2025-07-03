import { useRef, useState } from 'react'
import { Link } from 'react-router'
// icons
import { CheckDouble_1, HomeBanner, PenPaintBrush_1, Truck_1 } from '../files.js'

// components
import { Button } from '../universalComponents/index.js'
import { FileUploadSidebar } from '../sections/index.js'

export default function Hero() {

    const [isSidebarOpen, setIsSidebarOpen] = useState()
    const token = localStorage.getItem("accessToken")

    const sidebarOpener = useRef()

    return (

        // <div className="bg-[linear-gradient(to_bottom,#EDF0F4,#FFFFFF)] py-10">
        <div className="bg-white py-10">
            <FileUploadSidebar isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} sidebarOpenerRef={sidebarOpener} />

            <div className='bg-neutral-100'>

                <div className='custom-container grid items-center grid-cols-12 !py-20 px-5 lg:py-0'>
                    <div className="col-span-12 mx-auto lg:col-span-6 px-3 max-w-[600px] lg:mx-0 lg:ms-auto flex flex-col items-start gap-7">
                        <h2 className="animate-elem-left heading-1 sofia-bold text-center lg:text-start leading-[5vw] tracking-tight">Quickly and easily deliver any large file</h2>
                        <p className='animate-elem-left medium-gray-text text-[18px] text-center lg:text-start mx-auto lg:mx-0 sofia-regular max-w-[500px] leading-[32px]'>Deliver up to 100 GB of files to anyone – even if they don’t have YouKast accounts. You can deliver your large file transfers by sending an email or copying a download link to share with your intended recipients.</p>

                        {/* action btns */}
                        <div className="py-5 animate-scale-up flex mx-auto lg:m-0 flex-wrap gap-5">

                            {token ?
                                <Link to={"/dashboard/files/upload"} className='w-full min-[420px]:w-auto'>
                                    <Button
                                        content={"Transfer Now"}
                                    />
                                </Link>
                                :
                                <div className="flex mx-auto lg:m-0 flex-wrap gap-5">
                                    <Button
                                        ref={sidebarOpener}
                                        onClick={() => setIsSidebarOpen(prev => !prev)}
                                        content={"Transfer Now"}
                                    />
                                    <Link to={"/login"} className='w-full min-[420px]:w-auto'>
                                        <Button content={"Sign in"} reverseStyle={true} />
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex justify-center items-stretch px-3">
                        <img src={HomeBanner} alt="banner" />
                    </div>
                </div>
            </div>


            <div className="bg-white">

            <div className="max-w-[850px] mx-auto !mt-35 px-3">
                <h2 className="animate-scale-up heading-2 sofia-bold leading-15 text-center mb-4 tracking-tighter">Deliver files hassle-free</h2>
                <p className='animate-scale-up medium-gray-text sofia-light text-center mx-auto text-[18px] leading-[32px] tracking-tight'>Securely transferring a large file or collection of files in real time – for example a finished design project or set of high-resolution photos – is simple with YouKast Transfer. Easily drag and drop files without uploading them to the cloud first, worrying about storage space, permissions or managing file access.</p>
            </div>
            {/* all cards */}
            <div className="custom-container py-25 ">
                <div className="max-w-[1100px] mx-auto grid grid-cols-12 gap-y-20 sm:gap-10 !px-4 justify-center">
                    {/* card 1 */}
                    <div className="animate-elem-left col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-3 max-w-[400px] items-center sm:items-start mx-auto sm:mx-0">
                        <div className="p-3 h-16 w-16 rounded-full flex items-center justify-center bg-[var(--highlight-color)] mb-3">
                            <img src={Truck_1} alt="truck..." />
                        </div>
                        <h5 className="text-[24px] sofia-bold font-semibold tracking-tight">Deliver any large file</h5>
                        <p className='text-[var(--cool-gray)] sofia-light text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>You can deliver your large file transfers by sending an email or copying a download link to share with your intended recipients.</p>
                    </div>

                    {/* card 2 */}
                    <div className="animate-elem-left col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-3 max-w-[400px] items-center sm:items-start mx-auto sm:mx-0">
                        <div className="p-3 h-16 w-16 rounded-full flex items-center justify-center bg-[var(--highlight-color)] mb-3">
                            <img src={CheckDouble_1} alt="truck..." />
                        </div>
                        <h3 className="text-[24px] sofia-bold font-semibold tracking-tight">Ensure your files get delivered</h3>
                        <p className='text-[var(--cool-gray)] sofia-light text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>Confirm delivery of your file transfers with notifications, control access with password protection and set link expiry to encourage.</p>
                    </div>

                    {/* card 3 */}
                    <div className="animate-elem-left col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-3 max-w-[400px] items-center sm:items-start mx-auto sm:mx-0">
                        <div className="p-3 h-16 w-16 rounded-full flex items-center justify-center bg-[var(--highlight-color)] mb-3">
                            <img src={PenPaintBrush_1} alt="truck..." />
                        </div>
                        <h3 className="text-[24px] sofia-bold font-semibold tracking-tight">Make a strong impression</h3>
                        <p className='text-[var(--cool-gray)] sofia-light text-center sm:text-start text-[16px] leading-[24px] tracking-tight'>Add your logo to your transfer download page. And, coming soon, you’ll be able to customise the links for your file transfers.</p>
                    </div>
                </div>

            </div>
        </div>

        </div>
    )
}
