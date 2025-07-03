import React, { lazy, Suspense, useEffect } from 'react'
import "./App.css"

import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router'
import { Navbar, Footer } from './components/sections/index.js'


// components

const Home = lazy(() => import("./components/pages/Home.jsx"))
const About = lazy(() => import("./components/pages/About.jsx"))
const Contact = lazy(() => import("./components/pages/Contact.jsx"))
const PricingPage = lazy(() => import("./components/pages/PricingPage.jsx"))

// protected files page
const ProtectedFilesPage = lazy(() => import("./components/pages/ProtectedFilePage.jsx"))

// auth
const Login = lazy(() => import("./components/pages/auth/Login.jsx"))
const Signup = lazy(() => import("./components/pages/auth/Signup.jsx"))
const ForgotPassword = lazy(() => import("./components/pages/auth/ForgotPassword.jsx"))
const ResetPassword = lazy(() => import("./components/pages/auth/ResetPassword.jsx"))
const EmailVerification = lazy(() => import("./components/pages/auth/EmailVerification.jsx"))

// dashboard

import Sidebar from './components/sections/dashboard/Sidebar.jsx'

import PrivateRoute from './components/pages/PrivateRoute.jsx'
const DashboardHome = lazy(() => import("./components/pages/dashboard/DashboardHome.jsx"))
const ActivityPage = lazy(() => import("./components/pages/dashboard/ActivityPage.jsx"))
const FileUpload = lazy(() => import("./components/pages/dashboard/FileUpload.jsx"))
const SettingsPage = lazy(() => import("./components/pages/dashboard/SettingsPage.jsx"))
const Subscription = lazy(() => import("./components/pages/dashboard/Subscription.jsx"))


// other
const Page404 = lazy(() => import("./components/pages/Page404.jsx"))

import { PageLoader } from './components/universalComponents/index.js'

function Layout() {


    //// this is a better approach to scrollToTop on route change but the animation's scrolltrigger triggers automatically and animations fires instantly

    // const location = useLocation()
    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "instant" })
    //     requestAnimationFrame(() => {
    //         requestAnimationFrame(() => [
    //             ScrollTrigger.refresh()
    //         ])
    //     })
    // }, [location.pathname]);


    return (
        <div className='bg-neutral-50'>

            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* website layout */}
                    <Route element={<WebsiteLayout />}>
                        <Route index element={<Home />} />
                        <Route path='files/:shareID' element={<ProtectedFilesPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/pricing' element={<PricingPage />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/account/forgot-password' element={<ForgotPassword />} />
                        <Route path='/account/reset' element={<ResetPassword />} />
                        <Route path='/account/verify' element={<EmailVerification />} />
                    </Route>

                    {/* dashboard routes (private routes) */}
                    <Route element={<PrivateRoute />}>
                        <Route path='dashboard' element={<DashboardLayout />}>
                            <Route index element={<DashboardHome />} />
                            <Route path='files' element={<ActivityPage />} />
                            <Route path='files/upload' element={<FileUpload />} />
                            <Route path='settings' element={<SettingsPage />} />
                            <Route path='subscriptions' element={<Subscription />} />
                        </Route>
                    </Route>


                    <Route path='*' element={<Page404 />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default Layout


function WebsiteLayout() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}



function DashboardLayout() {

    return <div className="dashboard-layout">
        <Sidebar />
        <div className='sm:ps-[80px]'>
            <Outlet />
        </div>
    </div>

}


