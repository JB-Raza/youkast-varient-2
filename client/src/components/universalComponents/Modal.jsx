import React, { useRef, useEffect } from 'react'
import { RedXmark } from '../files'

export default function Modal({ modalData, isModalOpen, onClose }) {

    const modalRef = useRef()

    useEffect(() => {
        console.log(isModalOpen)
        if (isModalOpen) {

            document.body.style.position = "relative"
            document.body.classList.add("body-dark-overlay")
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.position = ""
            document.body.classList.remove('body-dark-overlay')
            document.body.style.overflow = ""
        }

        function closeModal(e) {

            if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
                onClose()
            }
        }

        const timeout = setTimeout(() => {
            window.addEventListener("click", closeModal);
        }, 0);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("click", closeModal);
            document.body.classList.remove("body-dark-overlay");
        };

    }, [isModalOpen])



    return (
        <div ref={modalRef} className={`fixed z-[220] top-1/2 left-1/2 shadow-xl -translate-x-1/2 transition-all duration-300 -translate-y-1/2 px-5 md:px-8 py-6 max-h-[350px] md:min-h-[500px] overflow-auto min-w-[60%] max-w-[700px] bg-white rounded-2xl ${isModalOpen ? "opactify-100" : "opacity-0 translate-y-1/4"}`}>
            <div className="flex justify-between mb-10">
                <h6 className="heading-6">{modalData.title}</h6>
                <button onClick={onClose} className="h-[25px] w-[25px] flex items-center cursor-pointer justify-center">
                    <img src={RedXmark} alt="" />
                </button>
            </div>
            <div className='sofia-light leading-[25px]'>
                {modalData.description || "nothing"}
            </div>
        </div>
    )
}
