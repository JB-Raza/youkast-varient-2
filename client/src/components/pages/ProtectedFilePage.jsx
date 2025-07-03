import React, { useState, useEffect, useRef, use } from 'react';
import { useNavigate } from 'react-router'

// components
import AccessFilesModal from '../sections/AccessFilesModal.jsx'
import Modal from '../universalComponents/dashboard/Modal.jsx'


// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';


const ProtectedFilesPage = () => {

    const navigate = useNavigate()


    // here i will have to verify if the user actually sent files or the user is navigating through urlbar.
    // for that the redirect link will contain the shareable links ID (shareID), i will send a request to backend to check if that shareID exists.
    // if the shareID exists, let him use this page otherwise show an error and redirect to home page.

    const [showModal, setShowModal] = useState(true);
    const [accessGranted, setAccessGranted] = useState(false);
    const [showPreviewModal, setShowPreviewModal] = useState(false)

    const [currFilePreview, setCurrFilePreview] = useState({})
    const [percentageDownload, setPercentageDownlaod] = useState(0)

    const validatePassword = async (input) => {
        await new Promise((res) => setTimeout(res, 500));
        return input === '1234';
    };

    const downloadFile = () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <Modal isModalOpen={showPreviewModal} title='File Name' onClose={() => setShowPreviewModal(false)}>
                {/* video file preview comes here */}
                <video src={"/password generator.mp4"} controls muted className='h-[300px] w-full'></video>
            </Modal>
            <div className='py-40 px-3 sm:px-5'>
                <AccessFilesModal
                    isOpen={showModal && !accessGranted}
                    onSuccess={() => {
                        setAccessGranted(true);
                        setShowModal(false);
                    }}
                    onClose={() => {
                        setShowModal(false)
                        navigate("/")
                    }}
                    validatePassword={validatePassword}
                />

                {/* {accessGranted && ( */}
                {true && (

                    <div className="max-w-[600px] mx-auto bg-white rounded-lg shadow-lg shadow-[rgba(0,0,0,0.1)] py-10 px-3 sm:px-6">

                        <div className="mb-5 flex flex-wrap gap-5 items-center">
                            <h5 className="text-[18px] text-neutral-700 tracking-[0.5px]">Uploaded By:</h5>
                            <p className='text-neutral-700 inter-font tracking-[0.5px]'>example@gmail.com</p>

                        </div>

                        {/* files */}
                        <div className="flex flex-col gap-y-5 mt-10">
                            {sampleFiles.map((file, index) =>
                                <div key={index} className="card shadow-md rounded-md w-full py-5 px-4 min-[400px]:px-5 flex flex-col items-start min-[400px]:flex-row min-[400px]:justify-between min-[400px]:items-center gap-4">
                                    <div>
                                        <div className="flex flex-wrap gap-x-3 items-center">
                                            <h6 className="text-[17px] text-wrap line-clamp-2 max-w-[250px] truncate text-neutral-700 inter-font-font-medium">{file.name}</h6>
                                            <p className="text-[13px] text-neutral-600">(expires in 3 days)</p>
                                        </div>
                                        <p className="text-sm text-neutral-500 inter-font">Size: {file.size}</p>
                                    </div>
                                    {/* actions */}
                                    <div className="bg-neutral-100 rounded-md px-4 py-2 flex content-center gap-5">
                                        {/* if file type is video show a preview button */}
                                        {file.type == "video" ?
                                            <button
                                                onClick={() => {
                                                    setShowPreviewModal(prev => !prev)
                                                    setCurrFilePreview(file)
                                                }}
                                                className="group cursor-pointer">
                                                <FontAwesomeIcon icon={faEye} className='text-neutral-700 group-hover:text-[var(--theme-purple)]' />
                                            </button> : null}

                                        {/* download files button */}
                                        <button
                                            onClick={downloadFile}
                                            className="group cursor-pointer">
                                            <FontAwesomeIcon icon={faDownload} className='text-neutral-700 group-hover:text-[var(--theme-purple)]' />
                                        </button>
                                    </div>


                                </div>
                            )}
                        </div>
                    </div>


                )}
            </div>
        </>
    );
};

export default ProtectedFilesPage;




const sampleFiles = [
    { name: 'video.mp4', type: 'video', size: '998 MB', url: "https://youtu.be/XyDPPtOsBeY?si=PyPWUCWxaeXqwVKt" },
    { name: 'notes_of_5th_semester_Subjects_along_with_examples.txt', type: 'text', size: '10 KB', url: "" },
    { name: 'document.pdf', type: 'pdf', size: '120 KB', url: "" },
];