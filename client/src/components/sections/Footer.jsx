
import { EmailOutline, Facebook, LocationDot, Msymblol, PhoneOutline, Twitter, Youtube } from '../files'

export default function Footer() {
  return (
    <div className="theme-bg">
      <div className="custom-container flex flex-col gap-20">
        <div className='grid grid-cols-12 py-15 px-5 md:px-10 lg:px-20 gap-y-10 sm:gap-5 md:gap-10'>

          {/* col 1 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-7 lavender-gray-text order-1">
            <h5 className="text-[16px] sofia-bold">What is YouKast?</h5>
            <p className='text-[16px] sofia-light leading-[24px] md:pe-15 lg:pe-20 text-wrap'>YouKast is a cloud storage services based on Blockchain and Web3 technology, designed to help teams collaborate and file sharing in a completely private like never before.</p>
          </div>

          {/* col 2 */}
          <div className="col-span-12 xs:!col-span-6 sm:!col-span-3 lg:!col-span-2 lavender-gray-text flex flex-col gap-7 order-2 md:order-3 lg:order-2">
            <h5 className="text-[16px] sofia-bold">Quick Links</h5>
            <ul className='flex flex-col gap-2 sofia-light'>
              <li className='leading-[24px]'>Features</li>
              <li className='leading-[24px]'>Solutions</li>
              <li className='leading-[24px]'>Pricing</li>
            </ul>
          </div>

          {/* col 3 */}
          <div className="col-span-12 xs:!col-span-6 sm:!col-span-3 md:!col-span-6 lg:!col-span-2 lavender-gray-text flex flex-col gap-7 order-3 md:order-4 lg:order-3">
            <h5 className="text-[16px] sofia-bold">Resources</h5>
            <ul className='flex flex-col gap-2 sofia-light'>
              <li className='leading-[24px]'>Privacy Policy</li>
              <li className='leading-[24px]'>Terms of Service</li>
              <li className='leading-[24px]'>Contact Us</li>
            </ul>
          </div>

          {/* col 4 */}
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex flex-col lavender-gray-text gap-7 order-4 md:order-2 lg:order-4">
            <h5 className="text-[16px] sofia-bold lavender-gray-text">Contact Details</h5>
            <ul className='flex flex-col gap-3 sofia-light'>
              <li className='flex gap-2 items-center leading-[24px]'>
                <img src={LocationDot} alt="" />
                <span>631  ST. Celina, State 111111</span>
              </li>
              <li className='flex gap-2 items-center leading-[24px]'>
                <img src={EmailOutline} alt="" />
                <span>email@example.com</span>
              </li>
              <li className='flex gap-2 items-center leading-[24px]'>
                <img src={PhoneOutline} alt="" />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* trademark */}
      <div className="highlight-bg">
        <div className="px-5 custom-container md:px-10 lg:px-20 py-3.5 flex flex-col sm:flex-row gap-5 justify-between flex-wrap text-white">
          <span className='text-center sofia-light lavender-gray-text'>© 2025 YouKast. All Rights Reserved.</span>
          <div className="flex gap-4 justify-center items-center">
            <img src={Facebook} alt="facebook..." />
            <img src={Twitter} alt="twitter..." />
            <img src={Youtube} alt="youtube..." />
            <img src={Msymblol} alt="Msymbol..." />
          </div>
        </div>
      </div>
    </div>
  )
}
