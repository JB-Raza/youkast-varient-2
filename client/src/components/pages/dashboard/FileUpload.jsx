import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ICONS } from '../../files'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFile, faFileVideo, faFileImage, faUpload, faShieldAlt, faCopy } from '@fortawesome/free-solid-svg-icons'


// toast
import { toast } from 'react-toastify'
// components
import { Modal } from '../../universalComponents/dashboard/index.js'
import { WarningPopup, ProcessingModal, InputBox } from '../../universalComponents/index.js'


export default function FilesUpload() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    const inputRef = useRef()
    const fileToDelRef = useRef()
    const token = localStorage.getItem("accessToken")

    // modal
    const [fileUploadModal, setFileUploadModal] = useState(false)
    const [showWarning, setShowWarning] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [shareableLinks, setShareableLinks] = useState([])
    const [recentUploadedFiles, setRecentUploadedFiles] = useState([
        { _id: 1, fileName: "React Questions.pdf" },
        { _id: 2, fileName: "Summery.xls" },
        { _id: 3, fileName: "Notes.docx" },
        { _id: 4, fileName: "Notes.docx" },
        { _id: 5, fileName: "Notes.docx" },
    ])


    const [filesData, setFilesData] = useState({ senderEmail: "", recepientEmail: "", message: "", privacyStatus: "public", expiryDate: "", files: [] })

    const handleFileDataChange = (e) => {
        const { files, name, value } = e.target;
        const newFiles = Array.from(files || []);

        // creating a set to get only unique values (no duplicates)
        const existingNames = new Set((filesData?.files || []).map(f => f.name));

        const validFiles = newFiles.filter(file => !existingNames.has(file.name));

        const allFiles = [...(filesData.files || []), ...validFiles];

        setFilesData(prev => ({
            ...prev,
            [name]: name === "files" ? allFiles : value
        }));

        e.target.value = null
    };





    function deleteRecentFile(fileId) {
        setRecentUploadedFiles(recentUploadedFiles.filter((file) => file._id !== fileId))
        setShowWarning(false)
        setTimeout(() => {
            toast.success("file deleted successfully")
        }, 100)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        const newFiles = Array.from(e.dataTransfer.files)

        if (newFiles) {
            setFilesData({ ...filesData, files: newFiles })
        }
        setFileUploadModal(true)
    }

    // files submit
    const handleFilesSubmit = (e) => {
        e.preventDefault()
        try {
            setIsProcessing(true)
            // check if all data is passed
            if (token) {

                if (!filesData.expiryDate || filesData.files.length == 0 || !filesData.privacyStatus) {
                    setTimeout(() => {
                        toast.error("All fields are required!")
                        setIsProcessing(false)
                    }, 500)
                    return
                }
            }
            else {
                if (filesData.files.length == 0) {
                    setTimeout(() => {
                        toast.error("At least 1 file is required")
                        setIsProcessing(false)
                    }, 500)
                    return
                }
            }

            setTimeout(() => {
                // setFileUploadModal(false)
                setIsProcessing(false)
                // setting shareable links
                const newLinks = filesData.files.map((file) => {
                    return { filename: file.name, url: URL.createObjectURL(file), expiresOn: Date.now() + 2 * 60 * 1000 }
                })
                setShareableLinks([...shareableLinks, ...newLinks])
                toast.success("Links Generated!")
                setFilesData({})
            }, 2000)
        } catch (error) {
            setIsProcessing(false)
            console.log(error)
        }
    }

    // expire links after 2 minutes
    useEffect(() => {
        if (shareableLinks.length === 0) return;

        const timeouts = []
        shareableLinks.forEach((link, i) => {
            const timeLeft = link.expiresOn - Date.now()
            if (timeLeft > 0) {

                const timeout = setTimeout(() => {
                    setShareableLinks(prev => prev.filter((_, index) => index !== i))
                }, timeLeft)
                timeouts.push(timeout)
            }
            else {
                setShareableLinks(prev => prev.filter((_, index) => index !== i))
            }
        })

        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout))
        }

    }, [shareableLinks]);


    return (
        <>
            {/* file upload modal */}
            {fileUploadModal && <Modal isModalOpen={fileUploadModal} title='Upload Files' onClose={() => setFileUploadModal(false)} onSubmit={handleFilesSubmit}>
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className="items-center">

                    {/* upload and show files */}
                    <div className='relative'>
                        {/* go home */}
                        {!token && <div className='flex justify-end w-full px-5 py-3'>
                            <Link to={"/"} className='text-blue-600 hover:underline'>Go Home</Link>
                        </div>}

                        <div className="rounded-xl p-2 w-full h-[300px] border-2 border-neutral-300">

                            <button
                                onClick={() => inputRef.current?.click()}
                                className='rounded-xl w-full h-full flex flex-col items-center justify-center gap-4 cursor-pointer bg-neutral-100 text-neutral-500'
                            >
                                <FontAwesomeIcon icon={faUpload} className='text-[50px] text-neutral-600' />
                                {filesData.files?.length > 0 ? filesData.files?.length + ` file${filesData.files?.length > 1 ? "s" : ""} selected` : "Click or drag and drop to upload files"}
                            </button>

                        </div>

                        {/* show selected files (if any) */}
                        <div className="flex mt-10 gap-3 md:gap-5 flex-wrap">
                            {filesData && filesData.files?.length > 0 && (filesData.files || []).map((file, index) =>
                                <div key={index}
                                    className='flex flex-col items-center justify-between gap-1 group border border-neutral-400 p-2 rounded-md relative cursor-pointer'>
                                    {/* btn to remove file */}
                                    <button
                                        title='remove file'
                                        onClick={() => setFilesData({ ...filesData, files: filesData.files.filter((f, i) => i !== index) })}

                                        className="absolute hover:scale-110 transition-transform duration-100 cursor-pointer -top-[7px] -right-[7px] w-[15px]"><img src={ICONS.DelIconRed} alt="" /></button>

                                    {/* file icon */}
                                    {file.type.split("/")[0] == "image" ?
                                        <FontAwesomeIcon icon={faFileImage} className='text-blue-500 text-[30px]' /> :

                                        file.type.split("/")[0] == "video" ?
                                            <FontAwesomeIcon icon={faFileVideo} className='text-[30px] text-gray-800' /> :
                                            file.type == "application/pdf" ? <FontAwesomeIcon icon={faFilePdf} className='text-[30px] text-amber-800' />
                                                : <FontAwesomeIcon icon={faFile} className='text-[30px] text-gray-800' />}
                                    {/* file name */}
                                    <p className="line-clamp-1 text-sm w-[70px] text-center">{file.name}</p>
                                </div>
                            )}
                        </div>

                    </div>
                    {/* other form data */}
                    <div className='mt-5'>

                        {/* privacy and expiry */}
                        {token && <div>
                            {/* privacy status */}
                            <div className="flex flex-col gap-y-3 mb-6">
                                <h6 className="font-semibold text-[15px] inter-font medium-gray-text">Privacy Status*</h6>
                                <div className='col-span-8 flex gap-5'>
                                    {/* private */}
                                    <div className=" flex items-center gap-2">
                                        <label htmlFor="private" className={`inter-font font-medium border-2 rounded-lg py-1 px-4 cursor-pointer ${filesData.privacyStatus == 'private' ? "text-neutral-800 border-[var(--theme-purple)]" : "text-neutral-500 border-transparent"}`}>Private</label>
                                        <input
                                            type="radio" id="private" name='privacyStatus'
                                            value="private"
                                            checked={filesData.privacyStatus === "private"}
                                            onChange={handleFileDataChange}
                                            className='hidden'
                                        />
                                    </div>
                                    {/* public */}
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="public" className={`inter-font font-medium border-2 rounded-lg py-1 px-4 cursor-pointer ${filesData.privacyStatus == 'public' ? "text-neutral-800 border-[var(--theme-purple)]" : "text-neutral-500 border-transparent"}`}>Public</label>

                                        <input type="radio" id="public" name='privacyStatus'
                                            value="public"
                                            checked={filesData.privacyStatus === "public"}
                                            onChange={handleFileDataChange}
                                            className='hidden'
                                        />
                                    </div>
                                </div>
                            </div>

                            <InputBox label="Expires On" min={new Date().toISOString().split("T")[0]} required={true} type='date' name='expiryDate' handleOnInputChange={handleFileDataChange} value={filesData?.expiryDate || ""} labelClassName={"text-[15px]"} />
                        </div>}

                        {/* sender email */}
                        {!token &&
                            <InputBox label="Your Email" type='email' name='senderEmail' handleOnInputChange={handleFileDataChange} value={filesData.senderEmail || ""} placeholderText='email@example.com' labelClassName={"text-[15px]"} className={"!mt-0"} />
                        }
                        {/* recepient email */}
                        <InputBox label="Recepient's Email" type='email' name='recepientEmail' handleOnInputChange={handleFileDataChange} value={filesData.recepientEmail || ""} placeholderText='email@example.com' labelClassName={"text-[15px]"} />

                        {/* message */}
                        <div className={`flex flex-col gap-2 mt-4 sm:mt-8`}>
                            <label className={`medium-gray-text font-bold`} htmlFor={"message"}>Message</label>
                            <textarea name="message" id="message"
                                rows={5}
                                value={filesData.message || ""}
                                onChange={handleFileDataChange}
                                className={`font-medium text-[var(--dark-gray)] rounded-lg w-full bg-[var(--light-gray)] px-5 py-3 outline-none`} placeholder='message (optional)'
                            ></textarea>
                        </div>

                    </div>

                    {/* show links generated */}
                    {shareableLinks.length > 0 && <div className='mt-15'>
                        <h4 className="inter-font font-semibold text-neutral-800 mb-4">Generated Links</h4>
                        <div className="flex gap-2 sm:gap-4 flex-wrap">

                            {shareableLinks?.map((link) => (
                                <div key={link.url} className='flex justify-between group border-[1px] rounded-md border-neutral-300 px-3 py-1.5 w-full gap-x-5'>

                                    <p className='text-blue-500 max-w-[200px] min-[400px]:max-w-[300px] w-full sm:max-w-full truncate cursor-pointer text-nowrap line-clamp-1'>{link.filename}</p>
                                    <button
                                        title='copy link'
                                        onClick={() => {
                                            navigator.clipboard.writeText(link.url)
                                            toast.success("Link Copied!")
                                        }}
                                        className='invisible group-hover:visible'><FontAwesomeIcon icon={faCopy} className='text-neutral-500 hover:text-neutral-800 cursor-pointer' /></button>
                                </div>
                            ))}
                        </div>

                    </div>}


                </div>



            </Modal>}





            {/* warning popup */}
            <WarningPopup isOpen={showWarning} onContinue={() => deleteRecentFile(fileToDelRef.current)} warningHead={"Are you Sure!"} message={"Do you want to delete this File?"} onClose={() => setShowWarning(false)} />

            {/* processing modal */}
            <ProcessingModal isOpen={isProcessing} message="generating shareable links..." />


            <div className=' grid grid-cols-12 mx-w-[1200px] !mx-auto min-h-screen'>

                {/* docs sidebar */}
                <div className={`absolute top-0 md:relative hidden md:block px-4 py-15 col-span-4 lg:col-span-3 border-e-1 overflow-y-auto border-[#B8B8B8] h-[${document.documentElement.scrollHeight}] min-h-screen`}>
                    <h3 className="inter-font text-[21px] sm:text-[25px] tracking-[0.8px] leading-[25px] font-semibold">Docs</h3>

                    <button
                        onClick={() => {
                            inputRef?.current.click()
                            setFileUploadModal(true)
                        }}
                        className="w-full mt-5 cursor-pointer flex items-center justify-center gap-3 rounded-lg py-3 px-10 bg-[#2F63BA] text-white font-semibold tracking-[0.32px] text-[14px] leading-[25px] text-nowrap">
                        <span className='inter-font'>Upload Document</span>
                        <img src={ICONS.PlusSign} alt="" />
                    </button>
                    {/* recent uploaded files */}
                    <div className="docs flex flex-col gap-5 mt-14">
                        {recentUploadedFiles.map((file) => (

                            <div key={file._id} className='w-full flex items-center justify-between gap-3 border-1 shadow-sm shadow-[rgba(0,0,0,0.1)] border-neutral-300 rounded-lg tracking-[0.32px] text-[18px] leading-[25px]'>
                                <img src={ICONS.FileVector} alt="" className='ps-2 w-[23px]' />
                                <p className='truncate flex-1 text-[13px]'>{file.fileName}</p>
                                <button
                                    onClick={() => {
                                        setShowWarning(true)
                                        fileToDelRef.current = file._id
                                    }}
                                    className='bg-[#BCBBBB] min-w-[40px] w-[40px] p-2 cursor-pointer flex items-center justify-center rounded-r-lg'>
                                    <img src={ICONS.DeleteIcon} className='w-[15px]' alt="" />
                                </button>
                            </div>
                        ))}

                    </div>
                </div>

                {/* main area */}
                <div className={`col-span-12 md:col-span-8 lg:col-span-9 bg-white px-5 md:px-8 lg:px-15 py-15`}>
                    <h3 className="inter-font text-[19px] sm:text-[21px] md:text-[25px] tracking-[0.8px] font-medium">Upload New Document</h3>

                    <div className="py-6 px-6 rounded-lg mt-8 border-1 max-w-[650px] bg-white border-neutral-300">
                        <h3 className="inter-font text-[19px] sm:text-[21px] tracking-[0.8px] mb-2 font-medium">Hello, Alan Sanders 👋</h3>
                        <p className="text-sm sm:text-[15px] tracking-[0.8px] leading-[25px] sm:leading-[30px] mb-5 text-[#0B0C0D]">To summarize your document, upload it to the area below.</p>

                        <button
                            onClick={() => setFileUploadModal(true)}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            className="dm-sans-font py-8 px-8 cursor-pointer w-full rounded-3xl bg-[#F6F6F6] border-2 border-dashed border-neutral-300 text-[18px]">Click to browse or drag and drop files</button>

                        <input ref={inputRef} type="file" multiple
                            name='files'
                            onChange={handleFileDataChange}
                            className='hidden'
                        />
                    </div>

                    {/* show shareable links */}
                    {/* {shareableLinks.length > 0 && <div className='flex flex-col gap-y-2 mt-15'>
                        <h4 className="inter-font font-semibold text-neutral-800 mb-4">Generated Links</h4>
                        {shareableLinks?.map((link) => (
                            <div key={link.url} className='flex justify-between group border-b-[1px] border-neutral-300'>

                                <p className='text-blue-500 underline cursor-pointer'>{link.filename}</p>
                                <button
                                    title='copy link'
                                    onClick={() => {
                                        navigator.clipboard.writeText(link.url)
                                        toast.success("Link Copied!")
                                    }}
                                    className='hidden group-hover:inline'><FontAwesomeIcon icon={faCopy} className='text-neutral-500 hover:text-neutral-800 cursor-pointer' /></button>
                            </div>
                        ))}

                    </div>} */}
                </div>

            </div>
        </>
    )
}

