import React, { useEffect, useRef, useState } from 'react'
import { Angleup } from '../files.js'
import { useAnimate } from '../../hooks/useAnimate.js'

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState(0)



    return (
        <div className='custom-container px-2'>
            <h2 className="animate-scale-up sofia-bold text-[35px] md:text-[40px] lg:text-[48px] leading-[50px] lg:leading-15 text-center mb-4 text-wrap tracking-tight">Frequently Asked Questions</h2>
            <p className="animate-scale-up cool-gray-text text-center">Need anwers? Find them here..</p>

            {/* all questions */}
            <div className="flex gap-8 flex-col mt-10">

                {(FAQ_Data || []).map((FAQ, index) => (

                    <FaqButton key={index}
                        isOpen={openIndex == index}
                        onToggle={() => setOpenIndex(openIndex == index ? null : index)}
                        question={FAQ.question}
                        answer={FAQ.answer}
                    />
                ))}
            </div>



        </div>
    )
}



const FaqButton = ({ question, answer, isOpen, onToggle }) => {
    const answerRef = useRef()

    useEffect(() => {
        if (isOpen && answerRef.current) {
            answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight + 20}px`
        }
        else {
            answerRef.current.style.maxHeight = `${0}px`
        }
    }, [isOpen])
    return (
        <div className="flex max-w-[700px] mx-auto flex-col gap-4" >
            <div className="faq">
                <button
                    onClick={onToggle}
                    className={`animate-elem-right cursor-pointer sofia-light text-[18px] flex justify-between gap-3 items-center text-white py-5 px-7 theme-bg w-full transition-[border-radius]  ${isOpen ? "rounded-t-2xl" : "rounded-2xl duration-1000"}`}>
                    <span className='text-start'>{question}</span>
                    <img src={Angleup}
                        className={`transition-rotate duration-200 ${isOpen ? "" : "rotate-180"}`}
                        alt="" />
                </button>
                <div ref={answerRef}
                    className='overflow-clip transition-all duration-300'>
                    <p className="blackish-gray-text sofia-light overflow-clip text-[20px] leading-[30px] tracking-[0.32px] px-6 pt-4 pb-9 border-2 border-[var(--theme-color)] border-t-0 rounded-b-2xl">
                        {answer}
                    </p>
                </div>
            </div>
        </div >
    )
}

const FAQ_Data = [
    {
        question: "How is file transfer secured in decentralized systems?",
        answer: "Files are encrypted before transfer and broken into smaller chunks. These chunks are sent through secure peer-to-peer connections."
    },
    {
        question: "Can someone intercept my file during transfer?",
        answer: "No, files are end-to-end encrypted and fragmented. Without the decryption key, intercepted data is useless and unreadable."
    },
    {
        question: "What encryption methods are used?",
        answer: "Most platforms use AES-256 or similar high-standard encryption to secure data both in transit and at rest."
    },
    {
        question: "Do I need to install anything to transfer files?",
        answer: "Not always. Many decentralized platforms offer web-based or lightweight apps that handle file encryption and transfer automatically."
    }
];
