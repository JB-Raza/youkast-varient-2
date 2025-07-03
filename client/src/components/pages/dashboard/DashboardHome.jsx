import {useEffect} from 'react'
import { ICONS } from '../../files.js'


export default function DashboardHome() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <div>
            {/* stats section */}
            <div className="px-3 sm:px-5 md:px-10 py-20">

                <div className="bg-blue-50 max-w-[1200px] mx-auto rounded-3xl border-[1px] border-[#B8B8B8] px-4 sm:px-5 md:px-7 pt-17 pb-12">

                    <h1 className="inter-font text-[25px] sm:text-[35px] md:text-[45px] leading-[35px] sm:leading-[45px] font-bold text-center tracking-[0.8px] text-[#0B0C0D]">Welcome back, Alan Sanders!</h1>

                    {/* all cards */}
                    <div className="grid grid-cols-12 gap-y-4 md:gap-y-6 gap-x-0 sm:gap-x-4 md:gap-x-6 mt-15">

                        {/* col 1 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <div className="card h-full bg-[linear-gradient(to_right,#03D9FB80,#2D63C580)] rounded-2xl px-2 !py-6 flex flex-col items-center justify-between gap-y-3">
                                <div className='flex flex-col items-center gap-y-4'>

                                    {/* img icon */}
                                    <div className="img relative flex items-center justify-center h-[60px] w-[60px]">
                                        <div className="absolute border-[#2D63C4] rounded-xl inset-0 bg-white rotate-45 border-1">
                                        </div>
                                        <img src={ICONS.TotalDocsUploadedIcon} className='relative z-[20]' alt="" />
                                    </div>

                                    <div className='flex flex-col gap-y-1'>
                                        <h5 className="inter-font text-[16px] text-center leading-[23px] font-bold tracking-[0.8px]">Total Documents Uploaded</h5>
                                        <p className="inter-font text-[#3E3E3E] text-center font-medium text-[14px] leading-[22px] tracking-[0.5px]">+3.5% increase from last month</p>
                                    </div>
                                </div>

                                <p className="text-[35px] leading-[25px] tracking-[0.8px] text-[#2D63C4] text-center">25</p>
                            </div>
                        </div>
                        {/* col 2 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <div className="card h-full bg-[linear-gradient(to_right,#03D9FB80,#2D63C580)] rounded-2xl px-2 !py-6 flex flex-col items-center justify-between gap-y-3">
                                <div className='flex flex-col items-center gap-y-4'>

                                    {/* img icon */}
                                    <div className="img relative flex items-center justify-center h-[60px] w-[60px]">
                                        <div className="absolute border-[#2D63C4] rounded-xl inset-0 bg-white rotate-45 border-1">
                                        </div>
                                        <img src={ICONS.DocReviewIcon} className='relative z-[20]' alt="" />
                                    </div>

                                    <div className='flex flex-col gap-y-1'>
                                        <h5 className="inter-font text-[16px] text-center leading-[23px] font-bold tracking-[0.8px]">Private Files</h5>
                                        <p className="inter-font text-[#3E3E3E] text-center font-medium text-[14px] leading-[22px] tracking-[0.5px]">No. of private files you added</p>
                                    </div>
                                </div>

                                <p className="text-[35px] leading-[25px] tracking-[0.8px] text-[#2D63C4] text-center">8</p>
                            </div>
                        </div>

                        {/* col 3 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <div className="card h-full bg-[linear-gradient(to_right,#03D9FB80,#2D63C580)] rounded-2xl px-2 !py-6 flex flex-col items-center justify-between gap-y-3">
                                <div className='flex flex-col items-center gap-y-4'>

                                    {/* img icon */}
                                    <div className="img relative flex items-center justify-center h-[60px] w-[60px]">
                                        <div className="absolute border-[#2D63C4] rounded-xl inset-0 bg-white rotate-45 border-1">
                                        </div>
                                        <img src={ICONS.ReportIcon} className='relative z-[20]' alt="" />
                                    </div>

                                    <div className='flex flex-col gap-y-1'>
                                        <h5 className="inter-font text-[16px] text-center leading-[23px] font-bold tracking-[0.8px]">Files Expiring This Week</h5>
                                        <p className="inter-font text-[#3E3E3E] text-center font-medium text-[14px] leading-[22px] tracking-[0.5px]">These files will not be available</p>
                                    </div>
                                </div>

                                <p className="text-[35px] leading-[25px] tracking-[0.8px] text-[#2D63C4] text-center">15</p>
                            </div>
                        </div>
                        {/* col 4 */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <div className="card h-full bg-[linear-gradient(to_right,#03D9FB80,#2D63C580)] rounded-2xl px-2 !py-6 flex flex-col items-center justify-between gap-y-3">
                                <div className='flex flex-col items-center w-full gap-y-4'>

                                    {/* img icon */}
                                    <div className="img relative flex items-center justify-center h-[60px] w-[60px]">
                                        <div className="absolute border-[#2D63C4] rounded-xl inset-0 bg-white rotate-45 border-1">
                                        </div>
                                        <img src={ICONS.ApprovedDocsIcon} className='relative z-[20]' alt="" />
                                    </div>

                                    <div className='flex flex-col gap-y-1 w-full'>
                                        <h5 className="inter-font text-[16px] text-center leading-[23px] font-bold tracking-[0.8px]">Storage Used</h5>
                                        {/* <div className="h-[7px] w-[calc(100%-20px)] mx-auto bg-blue-800 rounde-full mt-2"></div> */}
                                        <div className="w-full md:w-[calc(100%-20px)] mx-auto mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[35px] leading-[25px] tracking-[0.8px] text-[#2D63C4] text-center">12%</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* recent upload files section */}
            <div className="px-3 sm:px-5 md:px-10 py-10">
                <div className="max-w-[1200px] mx-2 sm:mx-auto bg-white rounded-3xl mb-10 px-4 md:px-11 py-11 shadow-lg shadow-[rgba(0,0,0,0.2)]">

                    <h3 className="inter-font text-[20px] sm:text-[25px] md:text-[28px] leading-[30px] sm:leading-[35px] md:leading-[40px] font-medium mb-4 tracking-[0.8px]">Recent Uploaded Files </h3>
                    {/* all cards */}
                    <div className="grid grid-cols-12 gap-y-6 gap-x-0 md:gap-x-6 mt-10">
                        {/* col 1 */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="card h-full rounded-2xl py-6 px-6 flex flex-col items-center gap-3 border-1 border-[#2C83E9] bg-[#F1F1F1]">
                                <div className="flex items-center justify-center h-[60px] w-[60px] bg-[#F5F5F5] p-2.5 border-1 border-blue-500 rounded-md">
                                    <img src={ICONS.FileStorageIcon} alt="" />
                                </div>
                                <h5 className="inter-font line-clamp-1 text-[18px] text-center leading-[24px] font-bold tracking-[0.8px]">Employment Contract</h5>
                                <p className="inter-font text-[#535353] text-center text-[14px] leading-[20px] tracking-[0.8px]"> Uploaded: August 12, 2024</p>
                                <p className="inter-font text-[#535353] text-center text-[14px] leading-[20px] tracking-[0.8px] line-clamp-3">The AI identified potential issues with the non-compete clause, recommending revisions to ensure enforceability.</p>
                            </div>
                        </div>
                        {/* col 2 */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="card h-full rounded-2xl py-6 px-6 flex flex-col items-center gap-3 border-1 border-[#2C83E9] bg-[#F1F1F1]">
                                <div className="flex items-center justify-center h-[60px] w-[60px] bg-[#F5F5F5] p-2.5 border-1 border-blue-500 rounded-md">
                                    <img src={ICONS.FileStorageIcon} alt="" />
                                </div>
                                <h5 className="inter-font line-clamp-1 text-[18px] text-center leading-[24px] font-bold tracking-[0.8px]">Analysis of Lease Agreement</h5>
                                <p className="inter-font text-[#535353] text-center text-[14px] leading-[20px] tracking-[0.8px]">Uploaded:  August 10, 2024</p>
                                <p className="inter-font text-[#535353] text-center text-[14px] leading-[20px] tracking-[0.8px] line-clamp-3">The AI flagged the rent increase clause for negotiation. Suggested actions include discussing terms with the landlord.</p>
                            </div>
                        </div>
                        {/* col 3 */}
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="card h-full rounded-2xl py-6 px-6 flex flex-col items-center gap-3 border-1 border-[#2C83E9] bg-[#F1F1F1]">
                                <div className="flex items-center justify-center h-[60px] w-[60px] bg-[#F5F5F5] p-2.5 border-1 border-blue-500 rounded-md">
                                    <img src={ICONS.FileStorageIcon} alt="" />
                                </div>
                                <h5 className="inter-font line-clamp-1 text-[18px] text-center leading-[24px] font-bold tracking-[0.8px]">NDA with Vendor Feedback</h5>
                                <p className="inter-font text-[#535353] text-center text-[14px] leading-[20px] tracking-[0.8px]">Uploaded: August 08, 2024</p>
                                <p className="inter-font text-[#535353] text-center text-[14px] leading-[20px] tracking-[0.8px] line-clamp-3">The AI noted that the confidentiality terms are broad, suggesting refinement for clearer scope.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
