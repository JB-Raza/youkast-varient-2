import React, { useState, useEffect, useRef } from 'react'

import { Button, PricingCard } from '../universalComponents/index.js'
import { Link } from 'react-router'

export default function Pricing() {



    const [activeIndex, setActiveIndex] = useState(0)
    const [pricingCards, setPricingCards] = useState(pricingCardsData.slice(0, 3))
    const btnRefs = useRef([])
    const overlayRef = useRef()



    const btns = ["personal", "professional"]

    useEffect(() => {
        const activeBtn = btnRefs.current[activeIndex]

        if (activeBtn.innerHTML.toLowerCase() == "personal") setPricingCards(pricingCardsData.slice(0, 3))
        else setPricingCards(pricingCardsData.slice(3))

        // add filters here that shows cards of active index

        if (activeBtn && overlayRef.current) {
            overlayRef.current.style.left = `${activeBtn.offsetLeft}px`
            overlayRef.current.style.width = `${activeBtn.offsetWidth}px`
        }

    }, [activeIndex])

    return (
        // <div className='!mt-30 relative px-3 before:absolute before:bg-[var(--bright-cyan)] before:top-0 before:bottom-2/5 before:left-0 before:right-0 before:z-[1]'>
        <div className='relative px-3 before:absolute before:bg-[var(--theme-color)] before:top-0 before:bottom-2/5 before:left-0 before:right-0 before:z-[1]'>

            <div className="custom-container py-15 relative z-10">
                <div className="flex flex-col gap-10 max-w-[1100px] mx-auto">
                    <div className="sofia-bold heading-1 flex justify-center flex-wrap text-white text-center mb-10">
                        <h2 className='animate-elem-right !text-white'>Simple. </h2> &nbsp;
                        <h2 className='animate-elem-left !text-[var(--accent-color)]'>Fair Pricing<span className="sofia-bold text-white">.</span></h2>
                    </div>

                    {/* pricing plan navbar */}
                    <div className="flex flex-nowrap justify-start w-fit relative gap-2 overflow-auto bg-white p-1 rounded-full ">
                        <div
                            ref={overlayRef}
                            className="absolute transition-all duration-200 highlight-bg w-[160px] start-[5px] z-[1] h-[calc(100%-8px)] top-1 rounded-full"></div>
                        {btns.map((btn, index) => (
                            <button key={index}
                                onClick={() => setActiveIndex(index)}
                                ref={(el) => btnRefs.current[index] = el}
                                className={`px-5 min-[450px]:px-14 py-2.5 min-w-[100px] cursor-pointer capitalize relative z-[2] text-[17px] rounded-full ${activeIndex == index ? "text-white" : "highlight-text"} font-bold text-center`}>{btn}</button>
                        ))}
                    </div>

                    {/* pricing cards */}
                    <div className="grid grid-cols-12 gap-x-6 gap-y-8">
                        {pricingCards?.map((card, index) => (
                            <PricingCard key={index} label={card.label} storage={card.storage} price={card.price} isRecommended={card.isRecommended} features={card.features} />
                        ))}
                    </div>
                    <Link to={"/pricing"}>
                        <Button content={"View All Pricing"} className={"mx-auto mt-7"} />
                    </Link>

                </div>

            </div>
        </div>
    )
}

const pricingCardsData = [
    { label: "Free", price:"0.00", storage: "500MB", isRecommended: false, features: ["Free 500 MB Storage", "10 Minutes video Limit", "30 Days Retention on Videos", "Ads Supported", "HD Video"] },
    { label: "Basic", price: "4.95", storage: "500GB", isRecommended: false, features: ["500 GB Storage", "No Limit on File Size or Length",, "No Ads", "HD Video"] },
    { label: "Pro", price: "14.95", storage: "1TB", isRecommended: false, features: ["Creators Page", "1 TB Storage", "2 TB Bandwidth", "No Limit on File Size or Length", "No Ads", "HD Video", "Ads share"] },
    { label: "Elite", price: "19.95", storage: "2TB", isRecommended: false, features: ["Creators Page", "2 TB Storage", "4 TB Bandwidth", "No Limit on File Size or Length", "No Ads", "HD Video", "Ads share"] },
]
