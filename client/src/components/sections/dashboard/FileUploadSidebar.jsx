import { useState, useEffect, useRef } from 'react'

// icons
import { ICONS } from '../../files'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFile, faFileVideo, faFileImage, faUpload, faCopy } from '@fortawesome/free-solid-svg-icons'

// components
import { Button, InputBox, ProcessingModal } from '../../universalComponents/index.js'


// toast
import { toast } from 'react-toastify'

export default function FileUploadSidebar({ isSidebarOpen, onClose, sidebarOpenerRef }) {

    const sidebarRef = useRef()
    const inputRef = useRef()

    const [isProcessing, setIsProcessing] = useState(false)
    const [isPasswordProtected, setIsPasswordProtected] = useState(false)

    const [shareableLinks, setShareableLinks] = useState([])
    const [filesData, setFilesData] = useState({ senderEmail: "", recepientEmail: "", message: "", password: "", retention: "5", files: [] })

    const handleFilesDataChange = (e) => {
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

    // open sidebar body overlay effects
    useEffect(() => {
        const bodyWrapper = document.getElementById("body-wrapper")
        if (isSidebarOpen) {
            bodyWrapper.style.inset = "0px"
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.body.style.overflow = "auto"
            bodyWrapper.style.inset = "auto"
        }
    }, [isSidebarOpen])

    // click outside to close sidebar
    useEffect(() => {
        function hanldeClickOutside(e) {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target) && sidebarOpenerRef.current && !sidebarOpenerRef.current.contains(e.target)) {
                onClose()
            }
        }
        window.addEventListener("click", hanldeClickOutside)

        return () => window.removeEventListener("click", hanldeClickOutside)
    }, [])

    const handleDrop = (e) => {
        e.preventDefault()
        const newFiles = Array.from(e.dataTransfer.files)

        if (newFiles) {
            setFilesData({ ...filesData, files: newFiles })
        }
    }

    // files submit
    const handleFilesSubmit = (e) => {
        e.preventDefault()
        try {
            setIsProcessing(true)
            if (filesData.files.length == 0) {
                setTimeout(() => {
                    toast.error("At least 1 file is required")
                    setIsProcessing(false)
                }, 500)
                return
            }

            setTimeout(() => {
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
            <ProcessingModal isOpen={isProcessing} message="generating shareable links..." />
            <div ref={sidebarRef} className={`fixed right-0 top-0 h-screen overflow-y-auto z-[210] bg-white shadow-lg shadow-blue-100 min-w-[300px] max-w-[100%] sm:max-w-[500px] w-[450px] transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-[150%]"}`}>

                <div className="px-5 py-7">
                    {/* btn to close sidebar */}
                    <div className="flex justify-between items-center gap-x-5">

                        <img src="/YouKast logo_B1 1.png"
                            className='-ms-2 me-auto'
                            alt="logo..." />
                        <button
                            onClick={onClose}
                            className='w-[25px] cursor-pointer'>
                            <img src={ICONS.DelIconRed} alt="" />
                        </button>
                    </div>

                    <div className="mt-10 flex flex-col gap-y-5">

                        {/* file upload section */}
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            className="items-center">

                            {/* upload and show files */}
                            <div className='relative'>
                                <label className={`medium-gray-text font-bold`} htmlFor={"files"}>Upload Files</label>
                                <div className="rounded-xl mt-3 p-2 w-full h-[300px] border-2 border-neutral-300">

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

                                {/* sender email */}
                                <InputBox label="Your Email" type='email' name='senderEmail' handleOnInputChange={handleFilesDataChange} value={filesData.senderEmail || ""} placeholderText='email@example.com' labelClassName={"text-[15px]"} className={"!mt-0"} />
                                {/* recepient email */}
                                <InputBox label="Recepient's Email" type='email' name='recepientEmail' handleOnInputChange={handleFilesDataChange} value={filesData.recepientEmail || ""} placeholderText='email@example.com' labelClassName={"text-[15px]"} />
                                {/* retention */}
                                <div className="flex flex-col gap-y-3 mt-7">
                                    <label className={`medium-gray-text font-bold`} htmlFor={"retention"}>Retention</label>
                                    <select name="retention" id="retention"
                                        value={filesData.retention || "5"}
                                        onChange={handleFilesDataChange}
                                        className='custom-select font-medium text-[var(--dark-gray)] rounded-lg w-full bg-[var(--light-gray)] px-5 py-3 outline-none'
                                    >
                                        <option value="5">5 Min</option>
                                        <option value="30">30 Min</option>
                                        <option value="60">1 Hour</option>
                                        <option value="360">6 Hour</option>
                                        <option value="1440">1 Day</option>
                                        <option value="10080">7 Days</option>
                                        <option value="20160">14 Days</option>
                                        <option value="43200">30 Days</option>
                                    </select>
                                </div>
                                {/* Protect with password */}
                                <div>
                                    <div className="flex justify-between gap-x-5 mt-8">
                                        <h4 className={`medium-gray-text text-[16px] inter-font font-bold`} htmlFor={"message"}>Protect with Password</h4>
                                        {/* checkmark  */}
                                        <button
                                            onClick={() => {
                                                setIsPasswordProtected(prev => !prev)
                                                setFilesData(prev => ({ ...prev, password: "" }))
                                            }}
                                            className={` cursor-pointer flex items-center transition-all duration-200 ${isPasswordProtected ? "theme-bg" : "bg-[#D9D9D9]"} px-[1px] h-[24px] w-[44px] rounded-full`}>
                                            <p className={`h-[20px] w-[20px] rounded-full transition-all duration-200 ${isPasswordProtected ? "translate-x-[100%]" : ""} bg-white`}></p>
                                        </button>
                                    </div>
                                    {isPasswordProtected && <InputBox label="Set Password" type='password' name='password' handleOnInputChange={handleFilesDataChange} value={filesData.password || ""} placeholderText='password@123' labelClassName={"text-[15px]"} />}

                                </div>


                                {/* message */}
                                <div className={`flex flex-col gap-2 mt-4 sm:mt-8`}>
                                    <label className={`medium-gray-text font-bold`} htmlFor={"message"}>Message</label>
                                    <textarea name="message" id="message"
                                        rows={5}
                                        value={filesData.message || ""}
                                        onChange={handleFilesDataChange}
                                        className={`font-medium text-[var(--dark-gray)] rounded-lg w-full bg-[var(--light-gray)] px-5 py-3 outline-none`} placeholder='message (optional)'
                                    ></textarea>
                                </div>

                            </div>

                            {/* show links generated */}
                            {shareableLinks.length > 0 && <div className='mt-15'>
                                <h4 className="inter-font font-semibold text-neutral-800 mb-4">Generated Links</h4>
                                <div className="flex gap-2 justify-center sm:gap-4 flex-wrap">

                                    {shareableLinks?.map((link) => (
                                        <div key={link.url} className='flex justify-between group border-[1px] rounded-md border-neutral-300 px-3 py-1.5 w-min gap-x-5'>

                                            <p title='Link' className='text-blue-500 w-[320px] max-w-[320px] cursor-pointer text-nowrap truncate'>{link.filename}</p>
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

                            <input ref={inputRef} type="file" multiple
                                name='files'
                                onChange={handleFilesDataChange}
                                className='hidden' />

                            {/* generate button */}
                            <Button
                                disabled={filesData && filesData?.files?.length > 0 ? false : true}
                                onClick={handleFilesSubmit}
                                content={"Generate"}
                                className={"w-full mt-10 disabled:opacity-50 disabled:!bg-[var(--theme-color)] disabled:hover:text-white disabled:cursor-default"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
