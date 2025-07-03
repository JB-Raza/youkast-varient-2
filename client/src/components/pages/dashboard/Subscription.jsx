import { useEffect } from 'react'
import { ICONS } from '../../files.js'

export default function Subscription() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])


    return (
        <div className="max-w-[1200px] mx-auto px-3 sm:px-5 md:px-10 py-20">

            <h4 className="dm-sans-font mb-5 font-bold tracking-wide text-[20px] sm:text-[24px] md:text-[28px]">Subscription</h4>

            <div className="flex justify-between items-center gap-4 flex-wrap xs:!flex-nowrap mb-20">
                <p className="text-[#838281] text-[16px] sm:text-[18px] tracking-wide">Current Package:</p>
                <button className="cursor-pointer dm-sans-font ms-auto xs:!ms-0 leading-[30px] px-7 font-medium py-2 rounded-xl justify-center flex gap-2 items-center bg-[#1e53ac] text-white">
                    <span className=''>Upgrade package</span>
                    <img src={ICONS.PlusSign} className='w-[15px]' alt="" />
                </button>
            </div>

            {/* plan card */}
            <div className="w-full bg-[radial-gradient(at_bottom_center,#363636,#050505,#141414)] relative rounded-3xl px-4 sm:px-10 md:px-7 lg:px-15 py-15 shadow-lg shadow-[rgba(0,0,0,0.2)]">
                <img src={ICONS.LineVector1} alt="" className="absolute z-[1] right-0 top-0 scale-100 w-1/3" />
                <img src={ICONS.LineVector2} alt="" className="absolute z-[1] left-0 bottom-0 scale-100 w-1/3" />

                <div className="max-w-[350px] mx-auto relative z-[10] card h-full rounded-2xl py-7 px-6 flex flex-col justify-between items-center gap-3 bg-[#EDEDED]">
                    <div className='flex flex-col gap-3'>
                        <p className="dm-sans-font text-[16px] md:text-[18px]">{currPlanData.title}</p>
                        {/* price */}
                        <div className="flex items-end gap-1 mt-2">
                            <h5 className="dm-sans-font font-bold text-[30px] sm:text-[35px] md:text-[40px] text-center leading-[24px] sm:leading-[30px] tracking-[0.8px]">${currPlanData.price}</h5>
                            <span className='text-[#686767]'>per month</span>
                        </div>
                        <p className='text-[#686767]'>{currPlanData.tagline}</p>

                        <hr className='border-b border-1 my-4 border-dashed' />

                        {/* benefits */}
                        <div className="flex flex-col gap-y-4">
                            {(currPlanData.benefits || []).map((benefit, index) => (

                                <div key={index} className="flex gap-2 items-start">
                                    <img src={ICONS.CheckCircleBlack} className='scale-80' alt="" />
                                    <span className='text-[#686767] text-sm tracking-[0.4px]'>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap xs:!flex-nowrap gap-4 mt-8">

                        <button className="cursor-pointer dm-sans-font leading-[30px] w-full xs:!w-[140px] px-7 py-1 rounded-xl flex gap-2 justify-center items-center bg-[#1F1F20] text-white">
                            <img src={ICONS.UpdateWhiteIcon} className='w-[10px]' alt="" />
                            <span className=''>Upgrade</span>
                        </button>
                        <button className="cursor-pointer dm-sans-font leading-[30px] w-full xs:!w-[140px] py-1 rounded-xl justify-center flex gap-2 items-center bg-[#1F1F20] text-white">
                            <img src={ICONS.CrossWhiteIcon} className='w-[10px]' alt="" />
                            <span className=''>Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


const currPlanData = {
    title: "Professional Plan",
    price: "49",
    tagline: "Small businesses & professionals.",
    benefits: [
        "10 AI consultations per month",
        "Document drafting and review (up to 20 pages)",
        "Advanced legal research"
    ]
}