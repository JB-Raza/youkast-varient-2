import { useEffect } from 'react'
import { Page404Frame, House1 } from '../files.js'
import { Link } from 'react-router'

export default function Page404() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])
    return (
        <div className='my-30 flex flex-col items-center px-4'>
            <img src={Page404Frame} alt="" />

            <h3 className="heading-3 sofia-bold mt-20">Opps! Page not found.</h3>
            <p className="cool-gray-text sofia-light text-center max-w-[400px] mt-5">We are sorry! The page you request can not be found.
                Please go back to the homepage.</p>

            <Link to={"/"} className="px-10  mt-13 cursor-pointer py-3 flex gap-3 rounded-md bg-[var(--theme-purple)] flex-nowrap justify-center items-center">
                <span className='sofia-bold text-white'>Go home</span>
                <img src={House1} alt="" />
            </Link>
        </div>
    )
}
