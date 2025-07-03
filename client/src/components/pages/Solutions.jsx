import React, { useEffect } from 'react'
import { Button } from '../universalComponents'
import { PurpleArrowRight, SolutionFrame1, SolutionFrame10, SolutionFrame2, SolutionFrame3, SolutionFrame4, SolutionFrame5, SolutionFrame6, SolutionFrame7, SolutionFrame8, SolutionFrame9 } from '../files'

export default function Solutions() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <>
            {/* hero */}
            <div className="custom-container px-5 !my-25">
                <div className="max-w-[1200px] grid grid-cols-12 items-center gap-y-15 lg:gap-6 rounded-3xl bg-[#ECECFE] px-5 md:px-15 py-20 mx-auto">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 ">
                        <div className=" max-w-[550px] mx-auto lg:mx-0 lg:max-w-[500px] flex flex-col items-start gap-y-6">
                            <h1 className="heading-2 blackish-gray-text text-center lg:text-start tracking-[-2.5px]">Learn how to use step by step</h1>
                            <p className="sofia-light medium-gray-text text-center lg:text-start text-[18px] leading-[32px] tracking-[-0.5px]">Learn how to create, store, and share files on decentralized storage technologies with the frictionless experience you expect in a modern workflow.</p>

                            <Button content={"Getting Started"} className={"bg-[var(--theme-purple)] mx-auto lg:mx-0 text-white border-transparent hover:border-black hover:text-black hover:bg-transparent"} />
                        </div>
                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 mx-auto">
                        <img src={SolutionFrame1} alt="" />
                    </div>
                </div>
            </div>

            {/* Steps */}
            <div className='px-4'>

                {/* step 1 */}
                <div className="grid grid-cols-12 max-w-[1200px] items-center px-3 mx-auto gap-y-7 lg:gap-x-6 my-10 md:my-20 lg:my-40">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                        <h2 className="h-[80px] min-w-[80px] w-[80px] rounded-full bg-[var(--theme-purple)] heading-4 flex items-center justify-center text-white">1.</h2>
                        <div className="flex flex-col gap-y-6 mt-3">
                            <h5 className="text-[30px] sm:text-[36px] tracking-[-3px] blackish-gray-text">Create an account</h5>
                            <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">When you create a Deupoad Account, we ask for some personal info. By providing accurate info, you can help keep your account secure and make our services more useful.</p>

                            <ol className='sofia-light px-4 medium-gray-text text-[18px] list-decimal'>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click Create Account button on header.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Enter your email address.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>In the "Full name" field, enter your name.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Enter and confirm your password.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click Create Account.</li>
                            </ol>

                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                        <img src={SolutionFrame2} alt="" />
                    </div>
                </div>

                {/* step 2 */}
                <div className="grid grid-cols-12 max-w-[1200px] items-center px-3 mx-auto gap-y-7 lg:gap-x-6 my-10 md:my-20 lg:my-40">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                        <h2 className="h-[80px] min-w-[80px] w-[80px] rounded-full bg-[var(--theme-purple)] heading-4 flex items-center justify-center text-white">2.</h2>
                        <div className="flex flex-col gap-y-6 mt-3">
                            <h5 className="text-[30px] sm:text-[36px] tracking-[-1px] sm:tracking-[-3px] blackish-gray-text">Upload files from desktop</h5>
                            <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">You can upload, view, share, and edit files with YouKast. When you upload a file to YouKast, it will take up space in your Disk, even if you upload to a folder owned by someone else.</p>

                            <ol className='sofia-light px-4 medium-gray-text text-[18px] list-decimal'>
                                <li className='leading-[32px] tracking-[-0.6px]'>On your computer, go to drive.google.com.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>At the top left, click New and then  Upload Files or Upload Folder.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Choose the file or folder you want to upload.</li>
                            </ol>

                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                        <img src={SolutionFrame3} alt="" />
                    </div>
                </div>
                {/* step 3 */}
                <div className="grid grid-cols-12 max-w-[1200px] items-center px-3 mx-auto gap-y-7 lg:gap-x-6 my-10 md:my-20 lg:my-40">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row  gap-4">
                        <h2 className="h-[80px] min-w-[80px] w-[80px] rounded-full bg-[var(--theme-purple)] heading-4 flex items-center justify-center text-white">3.</h2>
                        <div className="flex flex-col gap-y-6 mt-3">
                            <h5 className="text-[30px] sm:text-[36px] tracking-[-1px] sm:tracking-[-3px] blackish-gray-text">Retrieve data uploaded</h5>
                            <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">All data stored using YouKast is made available for retrieval via IPFS, the InterPlanetary File System. IPFS is a distributed, peer-to-peer network for storing and sharing content-addressed data.</p>

                            <ol className='sofia-light px-4 medium-gray-text text-[18px] list-decimal'>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click on any files and folder.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click on info icon at top left to see file details.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Copy CID or IPFS link to use on your NFT.</li>
                            </ol>

                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                        <img src={SolutionFrame4} alt="" />
                    </div>
                </div>
                {/* step 4 */}
                <div className="grid grid-cols-12 max-w-[1200px] items-center px-3 mx-auto gap-y-7 lg:gap-x-6 my-10 md:my-20 lg:my-40">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                        <h2 className="h-[80px] min-w-[80px] w-[80px] rounded-full bg-[var(--theme-purple)] heading-4 flex items-center justify-center text-white">4.</h2>
                        <div className="flex flex-col gap-y-6 mt-3">
                            <h5 className="text-[30px] sm:text-[36px] tracking-[-1px] sm:tracking-[-3px] blackish-gray-text">Share files and folders</h5>
                            <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">You can control whether people can edit or can only view your files and folders when you share them and even after you share them. Edits made to a shared file or folder are updated live for everyone they’ve been shared with.</p>

                            <ol className='sofia-light px-4 medium-gray-text text-[18px] list-decimal'>
                                <li className='leading-[32px] tracking-[-0.6px]'>Hover over the file or folder you’d like to share.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click the share icon at menu.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Type the email you’d like to share with.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Select Can edit or Can view.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click generate link for your file or folder</li>
                            </ol>

                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                        <img src={SolutionFrame5} alt="" />
                    </div>
                </div>
                {/* step 5 */}
                <div className="grid grid-cols-12 max-w-[1200px] items-center px-3 mx-auto gap-y-7 lg:gap-x-6 my-10 md:my-20 lg:my-40">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                        <h2 className="h-[80px] min-w-[80px] w-[80px] rounded-full bg-[var(--theme-purple)] heading-4 flex items-center justify-center text-white">5.</h2>
                        <div className="flex flex-col gap-y-6 mt-3">
                            <h5 className="text-[30px] sm:text-[36px] tracking-[-1px] sm:tracking-[-3px] blackish-gray-text">Convert to team folder</h5>
                            <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">Team folders help admins manage team files and folders. You can share team folders with with specific group. You can convert  any folder to a team folder and the folder to be shared with the folder members only.</p>

                            <ol className='sofia-light px-4 medium-gray-text text-[18px] list-decimal'>
                                <li className='leading-[32px] tracking-[-0.6px]'>Hover over the folder you’d like to convert.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click the Conver as a Team folder on dropdown.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Type the email of members you’d like to invite.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click on Move & Invite Member button.</li>
                            </ol>

                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                        <img src={SolutionFrame6} alt="" />
                    </div>
                </div>
                {/* step 6 */}
                <div className="grid grid-cols-12 max-w-[1200px] items-center px-3 mx-auto gap-y-7 lg:gap-x-6 my-10 md:my-20 lg:my-40">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                        <h2 className="h-[80px] min-w-[80px] w-[80px] rounded-full bg-[var(--theme-purple)] heading-4 flex items-center justify-center text-white">6.</h2>
                        <div className="flex flex-col gap-y-6 mt-3">
                            <h5 className="text-[30px] sm:text-[36px] tracking-[-1px] sm:tracking-[-3px] blackish-gray-text">Recover or restore files</h5>
                            <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">Unlike accidentally deleted data on remote storage devices such as USB flash drives, memory cards and external hard drives, YouKast file recovery means you can always get your data back.</p>

                            <ol className='sofia-light px-4 medium-gray-text text-[18px] list-decimal'>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click Trash in the left sidebar.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click on the file or folder you want to recover.</li>
                                <li className='leading-[32px] tracking-[-0.6px]'>Click Restore. Restorations can take time if you’re restoring a large number of files.</li>
                            </ol>

                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                        <img src={SolutionFrame7} alt="" />
                    </div>
                </div>
            </div>

            {/* get started */}
            <div className="px-4  my-40">

                <div className="max-w-[1200px] bg-[var(--bright-cyan)] mx-auto items-center rounded-3xl px-4 sm:px-10 grid grid-cols-12 gap-y-10">
                    {/* col 1 */}
                    <div className="col-span-12 md:col-span-7 ps-0 py-6 sm:ps-5 md:ps-10 flex items-start flex-col gap-6">
                        <h4 className="text-[48px] sofia-bold leading-[56px] tracking-tight text-center md:text-start mx-auto md:mx-0 text-white">Ready to get started?</h4>
                        <p className="text-[#ECECFE] sofia-light text-[18px] leading-[32px] tracking-tight max-w-[480px] mx-auto md:mx-0 text-center md:text-start">Storing data on decentralized networks can be hard. YouKast removes that complexity. Upload data in seconds using the tools you already know and love.</p>

                        <div className="flex mt-10 gap-5 flex-wrap items-center mx-auto sm:mx-0">
                            <Button content={"Get Started"} className={"!sofia-medium !px-9 w-full min-[440px]:w-auto border-transparent bg-[var(--theme-purple)] text-[#EDF0F4] hover:border-black hover:text-black hover:bg-transparent mx-auto xs:!mx-0"} />
                            <Button content={"Get $10 Credit"} className={"!sofia-medium w-full min-[440px]:w-auto hover:bg-[var(--theme-purple)] text-white border-white hover:border-transparent mx-auto xs:!mx-0"} />
                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 md:col-span-5 mx-auto md:mx-0">
                        <img src={SolutionFrame8} alt="" className='mx-auto md:mx-0 md:ms-auto h-full' />
                    </div>
                </div>

            </div>

            <div className="px-4 my-40">
                <div className="grid grid-cols-12 max-w-[1200px] mx-auto gap-y-7 md:gap-x-7">
                    {/* col 1 */}
                    <div className="col-span-12 md:col-span-6 group bg-white transition-transform duration-200 shadow-xl shadow-[rgba(0,0,0,0.05)] hover:shadow-[rgba(0,0,0,0.1)] flex flex-col overflow-clip items-center justify-center gap-y-5 rounded-3xl py-12 px-5">
                        <img src={SolutionFrame10} alt="" className='group-hover:scale-110 transition-transform duration-300 cursor-pointer' />
                        {/* data */}
                        <div className="flex flex-col gap-y-3 max-w-[400px]">
                            <h4 className="heading-5 text-[#0B0D0E] duration-100 hover:text-[var(--theme-purple)] w-max mx-auto cursor-pointer text-center md:tracking-[-1px]">Knowledge base</h4>
                            <p className="sofia-light medium-gray-text text-center leading-[24px] tracking-[-0.5px]">Search for help from support articles, product documentation, community.</p>

                            <button className="theme-purple relative w-max mx-auto sofia-bold leading-[24px] flex items-center justify-center gap-2 cursor-pointer group/button">
                                <span>Browse the guides</span>
                                <img src={PurpleArrowRight} alt="" className='relative top-[2px] group-hover/button:translate-x-1 transition-transform duration-200' />
                            </button>

                        </div>
                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 md:col-span-6 group bg-white transition-transform duration-200 shadow-xl shadow-[rgba(0,0,0,0.05)] hover:shadow-[rgba(0,0,0,0.1)] flex flex-col overflow-clip items-center justify-center gap-y-5 rounded-3xl py-12 px-5">
                        <img src={SolutionFrame9} alt="" className='group-hover:scale-110 translate-y-[5px] transition-transform duration-300 cursor-pointer' />
                        {/* data */}
                        <div className="flex flex-col gap-y-3 max-w-[400px]">
                            <h4 className="heading-5 text-[#0B0D0E] duration-100 hover:text-[var(--theme-purple)] w-max mx-auto cursor-pointer text-center md:tracking-[-1px]">FAQs</h4>
                            <p className="sofia-light cool-gray-text text-center leading-[24px] tracking-[-0.5px]">Sometimes you need a quick answer to your question. You can get it right away here.</p>

                            <button className="theme-purple relative w-max mx-auto sofia-bold leading-[24px] flex items-center justify-center gap-2 cursor-pointer group/button">
                                <span>Find an answer</span>
                                <img src={PurpleArrowRight} alt="" className='relative top-[2px] group-hover/button:translate-x-1 transition-transform duration-200' />
                            </button>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
