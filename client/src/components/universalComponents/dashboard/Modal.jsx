import React, { useRef, useEffect } from 'react'
import { ICONS } from '../../files.js'

export default function Modal({ title = "", isModalOpen = false, onClose, onSubmit, children, className }) {

    const modalRef = useRef()
    const token = localStorage.getItem('accessToken')

    useEffect(() => {
        let wrapper = document.getElementById("body-wrapper")
        if (isModalOpen) {

            wrapper.style.backgroundColor = "rgba(0,0,0,0.5)"
            wrapper.style.inset = "0px"
            document.body.style.overflow= "hidden"

        }

        // i am not able to use this closeModal method because the input i am refering to while seleting files is placed outside of it causing to close it on file select
        // function closeModal(e) {
        //     if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        //         onClose()
        //     }
        // }

        // const timeout = setTimeout(() => {
        //     window.addEventListener("click", closeModal);
        // }, 0);

        return () => {
            wrapper.style.backgroundColor = "none"
            wrapper.style.inset = "auto"
            document.body.style.overflow= "auto"


        };

    }, [isModalOpen])


    return (
        <div ref={modalRef} className={`fixed z-[215] max-h-[550px] overflow-auto px-3 sm:px-5 top-1/2 left-1/2 shadow-xl -translate-x-1/2 transition-all duration-300 -translate-y-1/2 min-w-[95%] sm:min-w-[70%] lg:w-[60%] lg:min-w-auto max-w-[800px] bg-white rounded-2xl ${isModalOpen ? "opactify-100" : "opacity-0 translate-y-1/4"} ${className} flex flex-col justify-between`}>
            {/* header */}
            <div className="flex justify-between items-center border-b border-neutral-300">
                <div className="w-full py-4 flex items-center justify-between gap-x-5">
                    <h6 className="inter-font text-[23px] tracking-[0.8px] font-semibold capitalize">{title}</h6>
                    {onClose && <button onClick={onClose} className="h-[25px] w-[25px] flex items-center cursor-pointer justify-center">
                        <img src={ICONS.Xmark} alt="" className='w-[15px]' />
                    </button>}
                </div>
            </div>
            <div className='sofia-light mb-auto px-3 md:px-5 py-6 leading-[25px] h-full min-h-[350px] overflow-auto'>
                {children}
            </div>

            {/* footer for modal */}
            <div className="w-full border-t-1 border-neutral-300 px-3 py-4 flex items-center justify-between gap-x-5">
                {onClose && <button
                    onClick={onClose}
                    className={`hover:text-white text-sm bg-neutral-100 hover:bg-neutral-500 font-medium cursor-pointer tranistion-all duration-200 rounded-lg px-6 py-1 flex items-center justify-center`}>
                    Close
                </button>}
                {onSubmit &&
                    <button
                        onClick={onSubmit}
                        className={`bg-blue-700 ms-auto text-sm text-white hover:bg-blue-600 cursor-pointer tranistion-all duration-200 rounded-lg px-6 py-1 flex items-center justify-center`}>
                        Submit
                    </button>
                }
            </div>

        </div>
    )
}
