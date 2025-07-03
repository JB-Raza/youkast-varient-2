import { Button } from './index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const PricingCard = ({ label, storage, price, features, isRecommended = false }) => {

    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative rounded-3xl bg-white shadow-lg py-14 px-9 transition-all duration-200 border-transparent hover:-translate-y-2 border-2 hover:border-black">
            {isRecommended && <span className="absolute sofia-light -top-[2px] left-1/2 -translate-x-1/2 bg-[#263238] text-white px-14 py-1 text-sm rounded-b-full">Recommended</span>}
            {/* pricing card heading */}
            <div className="flex justify-between gap-3 mb-6">
                <span className="animate-card-elem text-[20px] sofia-medium blackish-gray-text">{label}</span>
                <span className='sofia-bold border border-[var(--theme-color)] rounded-lg px-7 bg-[var(--light-theme-color)] theme-text text-center py-1'>{storage}</span>
            </div>
            {/* pricing */}
            {price &&
                <div className="animate-scale-up flex items-end gap-2 mb-3">
                    <h2 className="animate-card-elem sofia-bold blackish-gray-text text-[48px] leading-[50px] tracking-tighter">${price}</h2> / <span className='font-medium'> month</span>
                </div>}
            {price && <span className="animate-scale-up text-neutral-600">Billed montly</span>}
            {/* button get started */}
            <Button content={"Get started"}
                className={"mx-auto mt-7 w-[calc(100%-20px)]"} />

            {/* divider */}
            <div className="animate-scale-up  border border-dashed border-neutral-200 my-5"></div>

            {/* features */}
            <div className="flex flex-col gap-3">
                {/* feature 1 */}
                {(features || []).map((feature, index) => (

                    <div key={index} className="animate-scale-up flex gap-2 items-center">
                        <div className="flex items-center justify-center h-[24px] w-[24px] bg-[var(--light-highlight-color)] rounded-full">
                            <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                        </div>
                        <span className="sofia-regular leading-[20px] tracking-[-0.2px] medium-gray-text">{feature}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}