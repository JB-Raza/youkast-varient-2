import React, { useEffect, useRef, useState } from 'react'
import { ICONS } from '../../files.js'
import { NavLink, useLocation } from 'react-router'

export default function Sidebar() {

    const location = useLocation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const sidebarRef = useRef()
    const toggleSidebarBtnRef = useRef()

    const [activeNavIndex, setActiveNavIndex] = useState(0)
    const navItemRefs = useRef([])
    const [offsetTop, setOffsetTop] = useState(null)

    // close sidebar on click outside of it.
    useEffect(() => {
        function clickOutside(e) {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target) && toggleSidebarBtnRef.current && !toggleSidebarBtnRef.current.contains(e.target)) {
                setIsSidebarOpen(false)
            }
        }
        window.addEventListener("click", clickOutside)

        return () => window.removeEventListener("click", clickOutside)
    }, [])

    // set curr active navitem
    useEffect(() => {
        const activeNav = location.pathname.split("/").pop()
        const index = navItems.findIndex((item) => item.to.split("/").pop() == activeNav)
        if (index) {
            setActiveNavIndex(index)
        }
    }, [])

    // animate activeNav link
    useEffect(() => {
        if (navItemRefs.current[activeNavIndex]) {
            const el = navItemRefs.current[activeNavIndex]
            const distFromTop = el.getBoundingClientRect().top
            setOffsetTop(distFromTop + 10)
        }

    }, [activeNavIndex])

    return (
        <div className={`w-[0px] sm:min-w-[80px]`}>

            <div ref={sidebarRef} className={`w-0 sm:w-[80px] fixed z-[100] left-0 top-0 flex flex-col justify-between gap-y-6 bg-white py-5 h-screen border-e-1 border-neutral-100 !transition-all !duration-200 ${isSidebarOpen ? "w-[250px] sm:w-[250px]" : "sm:w-[80px]"}`}>

                {/* active nav indicator */}
                <div
                    className="absolute -right-[2px] w-[3px] h-[35px] rounded-md bg-[var(--theme-purple)] transition-all duration-300"
                    style={{ top: offsetTop }}
                ></div>
                {/* toggle btn */}
                <button ref={toggleSidebarBtnRef}
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                    className={`absolute shadow-md shadow-[rgba(0,0,0,0.15)] z-[1000] bottom-10 ${isSidebarOpen ? "right-0" : "-right-[15px]"} sm:right-0 translate-x-1/2 h-[30px] w-[30px] p-1 cursor-pointer bg-white flex items-center justify-center border-1 border-neutral-200 rounded-full`}>
                    <img src={ICONS.AngleRight} alt="" className={`!w-[7px] transition-transform duration-200 ${isSidebarOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                {/* logo */}
                <NavLink to={"/"} className={`${isSidebarOpen ? "" : "hidden sm:flex"} flex items-center px-7 gap-1 overflow-clip`}>
                    <img src={ICONS.Logo} className='!w-[30px] max-w-[30px]' alt="" />
                    <p className={`text-[18px] transition-all duration-200 font-bold ${isSidebarOpen ? "block" : "hidden"}`}>YouKast</p>
                </NavLink>


                {/* navitems */}
                <div className="flex dash-navs flex-col gap-3 items-center overflow-clip">
                    {navItems.map((item, index) => (
                        <NavLink
                            to={item.to}
                            ref={(el) => navItemRefs.current[index] = el}
                            title={item.label}
                            key={index}
                            onClick={() => {
                                setIsSidebarOpen(false)
                                setActiveNavIndex(index)
                            }}
                            className={`dashboard-nav w-full flex flex-nowrap gap-x-9 items-center px-7 py-4 cursor-pointer ${isSidebarOpen ? "hover:bg-blue-50 hoverDashNav" : ""
                                }`}>
                            <img src={item.icon} className="w-[17px]" alt={item.label} />
                            <p className={`text-sm transition-all duration-200 text-nowrap`}>{item.label}</p>
                        </NavLink>
                    ))}
                </div>

                {/* setting & support */}
                <div className="relative flex flex-col items-center overflow-clip ">
                    <NavLink to={"/dashboard/settings"}
                        ref={(el) => navItemRefs.current[4] = el}
                        title='settings'
                        onClick={() => {
                            setIsSidebarOpen(false)
                            setActiveNavIndex(4)
                        }}
                        className={`dashboard-nav w-full flex gap-9 items-center px-7 py-4 cursor-pointer ${isSidebarOpen ? "hover:bg-blue-50 hoverDashNav" : ""
                            }`}>
                        <img src={ICONS.SettingWheel2} className='w-[17px]' alt="" />
                        <p className={`text-sm transition-all duration-200`}>Settings</p>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}


const navItems = [
    { to: "/dashboard", icon: ICONS.HomeIcon, label: "Dashboard" },
    { to: "/dashboard/files/upload", icon: ICONS.FileIcon, label: "Upload Files" },
    { to: "/dashboard/files", icon: ICONS.Vector, label: "My Files" },
    { to: "/dashboard/subscriptions", icon: ICONS.SubscriptionIcon, label: "Subscription" },
]



{/* <NavLink to={"/support"}
                        title='support'
                        onClick={() => setIsSidebarOpen(false)}
                        className={({ isActive }) => `${isActive ? "activeNav" : ""} navitem w-full flex gap-9 items-center px-7 py-4 cursor-pointer ${isSidebarOpen ? "hover:bg-blue-50" : ""}`}>
                        <img src={ICONS.SupportIcon} className='w-[17px]' alt="" />
                        <p className={`text-sm transition-all duration-200`}>Support</p>
                    </NavLink> */}