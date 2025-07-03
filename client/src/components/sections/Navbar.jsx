import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Button } from '../universalComponents/index.js'
import { RedXmark } from '../files.js'

// gsap
import gsap from 'gsap'

export default function Navbar() {

    const token = localStorage.getItem("accessToken")

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const sideBarToggleBtn = useRef()
    const navbarRef = useRef()
    const [isNavFixed, setIsNavFixed] = useState(false)
    const sidebarRef = useRef()

    // navbar animation
    useEffect(() => {
        if (isNavFixed) {
            gsap.from(navbarRef.current, {
                opacity: 0,
                y: -100,
                duration: 0.5,
                ease: "power3.out"
            })
        }
    }, [isNavFixed])

    // fixed navbar
    useEffect(() => {
        function scroll() {
            const scrollY = window.scrollY
            if (scrollY > 100) {
                setIsNavFixed(true)
            } else setIsNavFixed(false)
        }

        window.addEventListener("scroll", scroll)
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    // close sidebar
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("body-dark-overlay")
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.classList.remove("body-dark-overlay")
            document.body.style.overflow = ""
        }

        function closeSidebarOnClickOutside(e) {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target) && sideBarToggleBtn.current && !sideBarToggleBtn.current.contains(e.target)) {
                setIsSidebarOpen(false)
            }
        }
        window.addEventListener('click', closeSidebarOnClickOutside)


    }, [isSidebarOpen])
    return (
        <nav ref={navbarRef} className={`fixed top-0 z-[200] flex items-center w-full bg-white shadow-lg shadow-[rgba(0,0,0,0.05)]`}>

            <div className="custom-container flex items-center w-full px-5">
                {/* logo */}
                <div className="me-auto py-4">
                    <NavLink to={"/"}>
                        <img src="/YouKast logo_B1 1.png"
                            className=' min-w-[120px]'
                            alt="logo..." />
                    </NavLink>
                </div>
                {/* nav items */}
                <div className="hidden ps-10 md:flex justify-between w-full items-center gap-5">
                    {/* nav items */}
                    <ul className="flex sofia-light gap-[27px] lg:gap-[30px] items-center justify-start w-full">
                        <NavLink to={"/"} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px] leading-[150%] px-[10px] py-[20px]`}>Home</NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px] leading-[150%] px-[10px] py-[20px]`}>About</NavLink>
                        <NavLink to={"/pricing"} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px] leading-[150%] px-[10px] py-[20px]`}>Pricing</NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px] leading-[150%] px-[10px] py-[20px]`}>Contact US</NavLink>
                    </ul>
                    {/* action buttons */}

                    {token ?
                        <Link to={'/dashboard'}>
                            <Button
                                content={"Dashboard"}
                                className={"!px-7 hidden lg:flex"} />
                        </Link>
                        :
                        <div className="flex gap-6 items-center px-3">
                            <Link to={'/login'}>
                                <Button content={"Sign In"} reverseStyle={true} />
                            </Link>
                            <Link to={'/signup'}>
                                <Button content={"Create an account"} />
                            </Link>

                        </div>
                    }
                </div>

                {/* sidebar toggle button */}
                <button
                    ref={sideBarToggleBtn}
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                    className='flex md:hidden flex-col gap-[4px] hover:bg-purple-100 cursor-pointer p-2 rounded-md'>
                    <span className="inline-block border-2 rounded-full border-[var(--theme-color)] h-1 w-[30px]"></span>
                    <span className="inline-block border-2 rounded-full border-[var(--theme-color)] h-1 w-[30px]"></span>
                    <span className="inline-block border-2 rounded-full border-[var(--theme-color)] h-1 w-[30px]"></span>
                </button>

                {/* sidebar */}
                <div ref={sidebarRef}
                    className={`flex h-screen min-w-[260px] max-w-[300px] bg-white fixed left-0 bottom-0 me-auto transition-transform duration-200 flex-col md:hidden justify-start w-full px-5 py-5 items-center gap-10 ${isSidebarOpen ? "translate-x-[0%]" : "translate-x-[-100%]"}`}>
                    <div className="logo flex w-full items-center justify-between">

                        <img src="/YouKast logo_B1 1.png"
                            className='-ms-2 me-auto'
                            alt="logo..." />

                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="cursor-pointer w-[25px]">
                            <img src={RedXmark} alt="" />
                        </button>
                    </div>
                    {/* nav items */}
                    <ul className="flex sofia-light flex-col gap-5 items-start justify-start w-full">
                        <NavLink to={"/"} onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px]`}>Home</NavLink>
                        <NavLink to={"/about"} onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px]`}>About</NavLink>
                        <NavLink to={"/pricing"} onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px]`}>Pricing</NavLink>
                        <NavLink to={"/contact"} onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `${isActive ? "theme-text" : "medium-gray-text"} navitem text-[20px]`}>Contact US</NavLink>
                    </ul>
                    {/* action buttons */}
                    <div className="flex flex-col w-full gap-4">
                        <Button content={"Sign In"}
                            className={"!px-7 w-full"} />
                        <Button
                            content={"Create an account"}
                            className={"!px-7 flex"} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
