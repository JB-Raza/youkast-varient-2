import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'

// icons
import { AngleDownDark, CheckMark, ColabIcon, CustomerSupportIcon, ExportUpIcon, IntegrationIcon, ManThinkingBro1, RanchesCrossIcon, SecurityIcon, TestimonialMember1, } from '../files.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload, faCheck, faHeadset, faPuzzlePiece, faShieldAlt, faTools, faUsers } from '@fortawesome/free-solid-svg-icons'

// components
import { Button, PricingCard } from '../universalComponents/index.js'

// animation
import { useAnimate } from '../../hooks/useAnimate.js'


export default function PricingPage() {

  // scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  // animations
  const animateElem = useAnimate()
  useEffect(() => {
    animateElem(".animate-elem-right", { duration: 0.4, x: 200, start: "top 70%" })
  }, [])


  const [activeIndex, setActiveIndex] = useState(0)
  const [pricingCards, setPricingCards] = useState(pricingCardsData.slice(0, 3))
  const [billedAnnuallyCheck, setBilledAnnuallyCheck] = useState(false)
  const btnRefs = useRef([])
  const overlayRef = useRef()

  const btns = ["personal", "professional"]

  useEffect(() => {
    const activeBtn = btnRefs.current[activeIndex]
    if (activeBtn.innerText.toLowerCase() == "personal") setPricingCards(pricingCardsData.slice(0, 3))
    else setPricingCards(pricingCardsData.slice(3))

    if (activeBtn && overlayRef.current) {
      overlayRef.current.style.left = `${activeBtn.offsetLeft}px`
      overlayRef.current.style.width = `${activeBtn.offsetWidth}px`
    }

  }, [activeIndex])
  return (
    <div className='overflow-clip'>
      {/* hero section */}
      <div className="max-w-[1200px] mx-auto px-10 py-35">
        <h3 className="animate-elem-right heading-2 mb-3 md:text-start sofia-bold blackish-gray-text tracking-tighter">Choose a plan that works for you</h3>
        <p className='animate-elem-right sofia-light medium-gray-text text-[18px] md:text-[20px] leading-[32px] tracking-[-0.4px]'>Access a complete decentralized storage with simple and transparent pricing.</p>
      </div>

      {/* pricing section */}
      <div className="max-w-[1200px] px-3 mx-auto py-10">
        <div className="flex justify-between flex-wrap gap-5 mb-15">
          {/* pricing plan navbar */}
          <div className="flex flex-nowrap justify-center relative gap-2 w-fit bg-[var(--light-highlight-color)] py-2 px-2 rounded-full ">
            <div
              ref={overlayRef}
              className="absolute transition-all duration-200 bg-[var(--highlight-color)] w-[160px] start-[5px] z-[1] h-[calc(100%-10px)] top-1/2 -translate-y-1/2 rounded-full"></div>
            {btns.map((btn, index) => (
              <button key={index}
                onClick={() => setActiveIndex(index)}
                ref={(el) => btnRefs.current[index] = el}
                className={`px-5 min-[450px]:px-14 py-2.5 cursor-pointer capitalize relative z-[2] w-full xs:!w-auto  text-[17px] rounded-full ${activeIndex == index ? "text-white" : "text-[var(--highlight-color)]"} font-bold text-center`}>{btn}</button>
            ))}
          </div>
          <div className="flex gap-2 justify-center items-start">
            <div>
              <p className='sofia-light text-[#838696]'>Billed Annually</p>
              <p className='sofia-light text-[13px] text-[#22C55E]'>Save up to 17%</p>
            </div>
            {/* checkmark  */}
            <button
              onClick={() => setBilledAnnuallyCheck(prev => !prev)}
              className={` cursor-pointer flex items-center transition-all duration-200 ${billedAnnuallyCheck ? "bg-[var(--highlight-color)]" : "bg-[#D9D9D9]"} px-[1px] h-[24px] w-[44px] rounded-full`}>
              <p className={`h-[20px] w-[20px] rounded-full transition-all duration-200 ${billedAnnuallyCheck ? "translate-x-[100%]" : ""} bg-white`}></p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6 mb-30 gap-y-8">
          {pricingCards?.map((card, index) => (
            <PricingCard key={index} label={card.label} storage={card.storage} price={card.price} isRecommended={card.isRecommended} features={card.features} />
          ))}
        </div>

        <p className=' medium-gray-text text-[20px] px-2 md:text-[24px] text-center leading-[38px] tracking-[-0.4px]'>Starting at 100 GB. All new sign up account include 10 GB of free storage.</p>
        <div className="btns flex flex-wrap justify-center gap-y-5 gap-x-10 my-10">
          <Link to={"/signup"}>
            <Button content={"Create an account"} />
          </Link>
          <Button content={"Get 10GB Storage"} reverseStyle={true} />
        </div>

      </div>

      {/* what's included */}
      <div className="bg-white py-25">

        <div className="custom-container px-4">
          <h3 className="animate-elem-right heading-3 sofia-bold blackish-gray-text text-center mb-3">What's Included?</h3>
          <p className='animate-elem-right sofia-light cool-gray-text text-center text-[18px] leading-[28px] tracking-[-0.2px]'>Get 100+ features out of the box with YouKast integrated per storage pricing</p>

          {/* all cards */}
          <div className="grid grid-cols-12 gap-y-10 sm:gap-x-6 max-w-[1200px] mx-auto px-2 md:px-5 mt-20">

            {/* card col 1 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="animate-elem-right card rounded-3xl bg-white px-10 py-12">
                {/* header */}
                <div className="flex gap-2 items-center">
                  {/* <img src={RanchesCrossIcon} alt="" /> */}
                  <FontAwesomeIcon icon={faTools} className='text-[var(--highlight-color)] text-[25px]' />


                  <h5 className="sofia-bold text-[24px] leading-[32px] tracking-[-0.3px] text-[var(--blackish-gray)]">Productivity</h5>
                </div>
                {/* features */}
                <div className="flex flex-col gap-2 mt-12">
                  {/* feature 1 */}
                  {(features || []).map((feature, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                      <div className="flex items-center justify-center h-[24px] w-[24px] bg-orange-100 rounded-full">
                        <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                      </div>
                      <p className='sofia-light medium-gray-text !font-medium leading-[20px] tracking-[-0.2px]'>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* card col 2 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="animate-elem-right card rounded-3xl bg-white px-10 py-12">
                {/* header */}
                <div className="flex gap-2 items-center">
                  {/* <img src={ColabIcon} alt="" /> */}
                  <FontAwesomeIcon icon={faUsers} className='text-[var(--highlight-color)] text-[25px]' />

                  <h5 className="sofia-bold text-[24px] leading-[32px] tracking-[-0.3px] text-[var(--blackish-gray)]">Collaboration</h5>
                </div>
                {/* features */}
                <div className="flex flex-col gap-2 mt-12">
                  {/* feature 1 */}
                  {(features || []).map((feature, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                      <div className="flex items-center justify-center h-[24px] w-[24px] bg-orange-100 rounded-full">
                        <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                      </div>
                      <p className='sofia-light medium-gray-text !font-medium leading-[20px] tracking-[-0.2px]'>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* card col 3 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="animate-elem-right card rounded-3xl bg-white px-10 py-12">
                {/* header */}
                <div className="flex gap-2 items-center">
                  {/* <img src={ExportUpIcon} alt="" /> */}
                  <FontAwesomeIcon icon={faCloudUpload} className='text-[var(--highlight-color)] text-[25px]' />
                  <h5 className="sofia-bold text-[24px] leading-[32px] tracking-[-0.3px] text-[var(--blackish-gray)]">Sharing</h5>
                </div>
                {/* features */}
                <div className="flex flex-col gap-2 mt-12">
                  {/* feature 1 */}
                  {(features || []).map((feature, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                      <div className="flex items-center justify-center h-[24px] w-[24px] bg-orange-100 rounded-full">
                        <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                      </div>
                      <p className='sofia-light medium-gray-text !font-medium leading-[20px] tracking-[-0.2px]'>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* card col 4 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="animate-elem-right card rounded-3xl bg-white px-10 py-12">
                {/* header */}
                <div className="flex gap-2 items-center">
                  {/* <img src={IntegrationIcon} alt="" /> */}
                  <FontAwesomeIcon icon={faPuzzlePiece} className='text-[var(--highlight-color)] text-[25px]' />

                  <h5 className="sofia-bold text-[24px] leading-[32px] tracking-[-0.3px] text-[var(--blackish-gray)]">Integration</h5>
                </div>
                {/* features */}
                <div className="flex flex-col gap-2 mt-12">
                  {/* feature 1 */}
                  {(features || []).map((feature, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                      <div className="flex items-center justify-center h-[24px] w-[24px] bg-orange-100 rounded-full">
                        <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                      </div>
                      <p className='sofia-light medium-gray-text !font-medium leading-[20px] tracking-[-0.2px]'>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* card col 5 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="animate-elem-right card rounded-3xl bg-white px-10 py-12">
                {/* header */}
                <div className="flex gap-2 items-center">
                  {/* <img src={SecurityIcon} alt="" /> */}
                  <FontAwesomeIcon icon={faShieldAlt} className='text-[var(--highlight-color)] text-[25px]' />

                  <h5 className="sofia-bold text-[24px] leading-[32px] tracking-[-0.3px] text-[var(--blackish-gray)]">Security</h5>
                </div>
                {/* features */}
                <div className="flex flex-col gap-2 mt-12">
                  {/* feature 1 */}
                  {(features || []).map((feature, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                      <div className="flex items-center justify-center h-[24px] w-[24px] bg-orange-100 rounded-full">
                        <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                      </div>
                      <p className='sofia-light medium-gray-text !font-medium leading-[20px] tracking-[-0.2px]'>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* card col 6 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="animate-elem-right card rounded-3xl bg-white px-10 py-12">
                {/* header */}
                <div className="flex gap-2 items-center">
                  {/* <img src={CustomerSupportIcon} alt="" /> */}
                  <FontAwesomeIcon icon={faHeadset} className='text-[var(--highlight-color)] text-[25px]' />

                  <h5 className="sofia-bold text-[24px] leading-[32px] tracking-[-0.3px] text-[var(--blackish-gray)]">Customer Support</h5>
                </div>
                {/* features */}
                <div className="flex flex-col gap-2 mt-12">
                  {/* feature 1 */}
                  {(features || []).map((feature, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                      <div className="flex items-center justify-center h-[24px] w-[24px] bg-orange-100 rounded-full">
                        <FontAwesomeIcon icon={faCheck} className='text-[var(--highlight-color)] text-[16px]' />
                      </div>
                      <p className='sofia-light medium-gray-text !font-medium leading-[20px] tracking-[-0.2px]'>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      {/* trusted by millions */}
      <div className="bg-[var(--light-sky-blue)] py-30">
        <div className="custom-container px-3">
          <h3 className="animate-elem-right heading-3 sofia-bold mb-4 blackish-gray-text leading-[64px] text-center tracking-tight">Trusted by million users</h3>
          <p className="animate-elem-right sofia-light medium-gray-text text-center text-[20px] leading-[28px] tracking-tight">Read what people have to say about YouKast</p>

          <div className="grid grid-cols-12 gap-y-10 md:gap-x-15 px-3 sm:px-10 max-w-[1060px] mt-20 mx-auto">
            {/* col 1 */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-20">
              <p className="animate-elem-right sofia-regular text-[var(--blackish-gray)] text-[20px] leading-[28px] tracking-tight">I was a little dubious at first about using YouKast but I can safely say I haven’t been let down at all by the experience! Storing my work documents and sharing them is easy and organising then is no problem at all. I highly recommend YouKast!</p>

              <div className="flex gap-3 items-center">
                <img src={TestimonialMember1} alt="" className='animate-elem-right ' />
                <div className="flex flex-col gap-y-0">
                  <h5 className="animate-elem-right sofia-bold text-[24px] leading-[28px] tracking-[-0.5px]">David Gain</h5>
                  <p className="animate-elem-right sofia-light text-[18px] medium-gray-text leading-[28px] tracking-[-0.5px]">Freelancer</p>
                </div>
              </div>

            </div>
            {/* col 2 */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-20">
              <p className="animate-elem-right sofia-regular text-[var(--blackish-gray)] text-[20px] leading-[28px] tracking-tight">I was a little dubious at first about using YouKast but I can safely say I haven’t been let down at all by the experience! Storing my work documents and sharing them is easy and organising then is no problem at all. I highly recommend YouKast!</p>

              <div className="flex gap-3 items-center">
                <img src={TestimonialMember1} alt="" className='animate-elem-right ' />
                <div className="flex flex-col gap-y-0">
                  <h5 className="animate-elem-right sofia-bold text-[24px] leading-[28px] tracking-[-0.5px]">John Doe</h5>
                  <p className="animate-elem-right sofia-light text-[18px] medium-gray-text leading-[28px] tracking-[-0.5px]">Marketing</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* faq */}
      <div className="custom-container !my-40">
        <h3 className="animate-elem-right heading-3 sofia-bold mb-3 blackish-gray-text !leading-[40px] md:!leading-[54px] lg:!leading-[64px] text-center tracking-tight">Frequently Asked Questions</h3>
        <p className="animate-elem-right cool-gray-text text-center text-[18px] leading-[28px] tracking-tight">Need anwers? Find them here..</p>

        {/* faq section */}
        <div className="flex flex-col gap-10 max-w-[750px] mx-auto my-20 px-4">

          {/* faq item */}

          {(FAQ_Data || []).map((FAQ, index) => (

            <FAQBtn key={index}
              question={FAQ.question}
              answer={FAQ.answer} />
          ))}

        </div>

        {/* still have a question */}
        <div className="px-4">

          <div className="max-w-[900px] bg-white mx-auto items-center rounded-3xl pt-3 sm:pt-5 px-4 sm:px-10 grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 ps-0 py-6 sm:ps-5 md:ps-10 flex items-start flex-col gap-6">
              <h4 className="text-[32px] sofia-bold leading-[36px] tracking-tight theme-text text-center xs:!text-start mx-auto xs:!mx-0">Still have questions?</h4>
              <p className="cool-gray-text sofia-light text-[18px] leading-[32px] tracking-tight max-w-[480px] text-center xs:!text-start">Have a complex setup or additional questions around pricing? Contact our sales team to get more information on pricing.</p>

              <Button content={"Contact Sale"} className={"!sofia-medium mx-auto xs:!mx-0"} />

            </div>
            <div className="col-span-12 md:col-span-4 mx-auto md:mx-0">
              <img src={ManThinkingBro1} alt="" className='translate-y-2.5' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}





// pricing cards data
const pricingCardsData = [
  { label: "Free", price: "0.00", storage: "500MB", isRecommended: false, features: ["Free 500 MB Storage", "10 Minutes video Limit", "30 Days Retention on Videos", "Ads Supported", "HD Video"] },
  { label: "Basic", price: "4.95", storage: "500GB", isRecommended: false, features: ["500 GB Storage", "No Limit on File Size or Length", , "No Ads", "HD Video"] },
  { label: "Pro", price: "14.95", storage: "1TB", isRecommended: false, features: ["Creators Page", "1 TB Storage", "2 TB Bandwidth", "No Limit on File Size or Length", "No Ads", "HD Video", "Ads share"] },
  { label: "Elite", price: "19.95", storage: "2TB", isRecommended: false, features: ["Creators Page", "2 TB Storage", "4 TB Bandwidth", "No Limit on File Size or Length", "No Ads", "HD Video", "Ads share"] },
]

// what's included features
const features = [
  "Zapier App integrated",
  "API documentation",
  "Development SDKs",
  "CID Ready for NFT",
  "IPFS gateway links",
  "Unlimited API calls",
]

// faq data
const FAQ_Data = [
  {
    question: "What is a decentralized cloud service?",
    answer: "It's a cloud system where data is stored across a distributed network of nodes instead of centralized servers, enhancing privacy and resilience."
  },
  {
    question: "How does it differ from traditional cloud services?",
    answer: "Traditional clouds store data in central locations, while decentralized clouds split and spread data across independent nodes globally."
  },
  {
    question: "Is my data safe on a decentralized cloud?",
    answer: "Yes, your data is encrypted, broken into pieces, and stored across multiple nodes. Only you hold the keys to access it."
  },
  {
    question: "What happens if one of the storage nodes fails?",
    answer: "Your data remains accessible because it’s redundantly stored on multiple nodes, ensuring high availability and fault tolerance."
  },
  {
    question: "Who can access my stored data?",
    answer: "Only you or those you share your encryption key with can access your data. No third party, including the network, can read it."
  },
  {
    question: "Is it more private than traditional cloud services?",
    answer: "Yes, decentralized clouds eliminate centralized control, reducing the risk of mass surveillance, censorship, and breaches."
  },
  {
    question: "How is the cost determined?",
    answer: "Pricing is usually based on how much storage and bandwidth you use. It’s often more affordable than centralized cloud providers."
  },
  {
    question: "Can I use it to host applications?",
    answer: "Yes, some platforms allow you to host web apps, websites, and services using decentralized compute and storage nodes."
  },
  {
    question: "Can I delete my data permanently?",
    answer: "Yes, since you control the encryption keys, revoking them or deleting data chunks removes access permanently."
  },
  {
    question: "What are some popular decentralized cloud platforms?",
    answer: "Storj, Filecoin, Sia, and Arweave are leading decentralized platforms offering secure, efficient, and scalable cloud solutions."
  }
];




// faq comp
const FAQBtn = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const answerRef = useRef()

  useEffect(() => {
    if (isOpen) {
      answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight + 20}px`
    }
    else {
      answerRef.current.style.maxHeight = `${0}px`
    }
  }, [isOpen])
  return (
    <div className=''>
      {/* btn / question */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={`animate-elem-right flex gap-3 cursor-pointer items-start text-[20px] md:text-[24px] leading-[32px] tracking-tight text-[var(--blackish-gray)] ${isOpen ? "highlight-text" : ""}`}>
        <img src={AngleDownDark}
          className={`transition-rotate translate-y-2 md:translate-y-1 duration-200 w-[15px] ${isOpen ? "rotate-180" : "rotate-0"}`}
          alt="#" />
        <span className="sofia-medium text-start">{question}</span>
      </button>
      {/* answer */}
      <div ref={answerRef}
        className='overflow-clip transition-all duration-300'>
        <p className="sofia-light overflow-clip text-[16px] md:text-[18px] medium-gray-text leading-[30px] tracking)-[0.32px] px-8  py-4">
          {answer}
        </p>
      </div>
    </div>
  )
}
