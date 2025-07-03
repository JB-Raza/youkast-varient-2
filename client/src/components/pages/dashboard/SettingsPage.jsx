import { useRef, useState, useCallback, useEffect } from 'react'
import { ICONS } from '../../files'
import { Modal, Profile, EditProfile, UpdatePassword } from '../../universalComponents/dashboard/index.js'

export default function SettingsPage() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    const [activeSubnav, setActiveSubnav] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleSubnavAccountClick = useCallback((e) => {
        setActiveSubnav(e.target.innerText.toLowerCase())
        setShowModal(true)
    }, [])

    const dropdownBtnData = [
        {
            heading: "Subscription",
            icon: ICONS.SubscribeIco,
            subnav: [
                {
                    label: 'Professional Plan',
                    // onClick: handleSubnavClick,
                }
            ]
        },
        {
            heading: "Customer Service",
            icon: ICONS.SubscribeIco,
            subnav: [
                {
                    label: 'Custom Service',
                    // onClick: handleSubnavClick,
                }
            ],
        },
        {
            heading: "Personal Info",
            icon: ICONS.PersonalInfoOutlineIco,
            subnav: [
                {
                    label: 'view personal info',
                    onClick: handleSubnavAccountClick,
                },
                {
                    label: 'edit profile',
                    onClick: handleSubnavAccountClick,
                },
                {
                    label: 'change password',
                    onClick: handleSubnavAccountClick,
                },
            ],
        },
        {
            heading: "Theme",
            icon: ICONS.SubscribeIco,
            subnav: [
                {
                    label: 'Switch to Dark Mode',
                    // onClick: handleSubnavClick,
                },
            ]
        },
    ]

    return (
        <>
            <Modal title={activeSubnav} isModalOpen={showModal} onClose={() => setShowModal(false)}>
                {activeSubnav == "view personal info" ? <Profile /> : activeSubnav == "edit profile" ? <EditProfile /> : activeSubnav == "change password" ? <UpdatePassword /> : null}
            </Modal>
            <div className='relative grid grid-cols-12 mx-w-[1200px] !mx-auto min-h-screen'>

                <div className={`absolute md:relative px-4 py-15 col-span-12 lg:col-span-3 max-h-screen overflow-auto bg-[#F9F9F9] border-e-1 border-[#B8B8B8] h-[${document.documentElement.scrollHeight}] min-h-screen`}>
                    <h3 className="inter-font text-[20px] sm:text-[22px] tracking-[0.8px] leading-[25px] font-bold">Profile</h3>

                    <div className="flex flex-col items-center gap-3 my-13">
                        {/* profile image here */}
                        <div className="h-[100px] w-[100px] rounded-full bg-neutral-200"></div>
                        <h4 className="inter-font text-[16px] md:text-[18px] tracking-[0.8px] capitalize font-semibold dm-sans-font">Alan Sanders</h4>
                    </div>

                    <h3 className="inter-font text-[18px] sm:text-[20px] tracking-[0.8px] leading-[25px] font-bold">Settings</h3>

                    <div className="flex flex-col my-10 rounded-xl overflow-clip shadow-[1px_1px_6px_1px_rgba(0,0,0,0.2)]">

                        {(dropdownBtnData || []).map((btn, index) => (
                            <DropdownBtn
                                key={index}
                                icon={btn.icon}
                                heading={btn.heading}
                                subnav={btn.subnav}
                            />
                        ))}
                    </div>
                    {/* logout btn */}
                    <button
                        className={`px-4 py-2.5 group rounded-xl shadow-md shadow-[rgba(0,0,0,0.2)] hover:bg-white w-full capitalize cursor-pointer flex justify-between items-center text-[15px] font-medium`}>
                        <span>Log out</span>
                        <img src={ICONS.LogoutIco} alt="" className={`w-[16px] transition-transform group-hover:scale-80 duration-200`} />
                    </button>



                </div>
            </div>
        </>
    )
}


const DropdownBtn = ({ icon, heading = "", subnav = [] }) => {

    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef()

    useEffect(() => {
        if (isOpen) {
            dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight + 20}px`
        }
        else {
            dropdownRef.current.style.maxHeight = `${0}px`
        }
    }, [isOpen])

    return (
        <div className="dm-sans-font bg-white">
            <div className="flex flex-col items-start">
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    className={`px-4 py-3 border-b-1 w-full border-neutral-200 capitalize cursor-pointer
          flex justify-between items-center text-[16px] font-medium
          `}>
                    <div className='flex items-center gap-2'>
                        {icon && <img src={icon} className='w-[16px]' alt="" />}
                        {heading}
                    </div>
                    <img src={ICONS.AngleRight} alt="" className={`scale-60 transition-transform duration-200 ${isOpen ? "rotate-270" : "rotate-90"}`} />
                </button>

                <div ref={dropdownRef} className="flex w-full flex-col items-start transition-all duration-300">
                    {(subnav || []).map((nav, index) => (
                        <button key={index}
                            onClick={nav.onClick}
                            className="px-5 py-3 w-full text-start text-[15px] text-neutral-600 hover:text-neutral-800 cursor-pointer capitalize">{nav.label}</button>
                    ))}
                </div>

            </div>
        </div>
    )
}

