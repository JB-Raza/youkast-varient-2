import { useEffect } from 'react'
import { Button } from '../universalComponents'

// icons
import { BackupIco, CollectFiles1, FeatureFrame1, FeatureFrame2, FeatureFrame3, FeatureFrame4, FeatureFrame5, FeatureFrame7, FeatureSecurityIco, FeatureUpdateIco, FileExport1, FilesIco, FoldersIco, FolderUser1, HourglassHalfIco, Link, LockKeyhole_3, MembersIco, MultipleRecipientsIco, PermissionControlIco, PhoneTabIco } from '../files'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faFeatherAlt, faFile, faFileExport, faHourglass, faLock, faUserCog, faUserGear, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

export default function Features() {
    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])
    return (
        <>
            {/* hero */}
            <div className="bg-[var(--light-sky-blue)] !mb-40">

                <div className="custom-container">
                    <div className="grid grid-cols-12 items-center gap-y-15 lg:gap-x-20 py-20">
                        {/* col 1 */}
                        <div className="col-span-12 lg:col-span-6 px-4">
                            <div className="max-w-[800px] lg:max-w-[470px] mx-auto lg:mx-0 lg:ms-auto lg:me-10 flex flex-col gap-y-6 items-start">
                                <h1 className="heading-2 lg:!leading-[72px] mx-auto lg:mx-0 blackish-gray-text text-center lg:text-start tracking-[-2.5px]">Simple tool to <span className="theme-text">work together</span> effectively.</h1>
                                <p className="sofia-light medium-gray-text text-center lg:text-start text-[18px] leading-[32px] tracking-[-0.5px]">Scattered content, constant interruptions, difficulty coordinating – there’s a better way to work. YouKast helps people be organised keep connect with their teams.</p>
                                <div className="flex flex-wrap gap-4 mt-4 mx-auto lg:mx-0">
                                    <Button content={"Getting Started"} className={"mx-auto lg:mx-0 text-sm"} />
                                    <Button content={"Learn More"} reverseStyle={true} className={"mx-auto lg:mx-0"} />
                                </div>
                            </div>
                        </div>
                        {/* col 2 */}
                        <div className="col-span-12 relative lg:col-span-6 ps-3 ms-auto">
                            <img src={FeatureFrame1} alt="" />
                            <img src={FeatureFrame2} className='absolute -bottom-20 -left-20' alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="custom-container !my-40 px-4">
                <h1 className="heading-2 !leading-[50px] lg:!leading-[72px] blackish-gray-text text-center tracking-[-1px] mb-3 lg:tracking-[-2.5px]"><span className="theme-text">Tools</span> to simplify your work</h1>
                <p className="sofia-light medium-gray-text text-center text-[18px] leading-[32px] tracking-[-0.5px]">Scattered content, constant interruptions, difficulty coordinating – there’s a better way to work.</p>


                {/* step 1 */}
                <div className='my-30 lg:my-45'>
                    <div className="grid grid-cols-12 max-w-[1200px] items-center mx-auto gap-y-15 lg:gap-x-10 mb-25">
                        {/* col 1 */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col items-start gap-y-7 lg:max-w-[470px] mt-3">
                                <div className="flex items-center gap-3 px-4 py-2 bg-[var(--light-theme-color)] rounded-md">
                                    {/* <img src={FileExport1} alt="" /> */}
                                    <FontAwesomeIcon icon={faFileExport} className='theme-text text-[20px]' />

                                    <span className="theme-text sofia-bold">File Sharing</span>
                                </div>
                                <h2 className="heading-3 !leading-[40px] lg:!leading-[64px] tracking-[-2px] blackish-gray-text">Share any file or folder easily, with anyone.</h2>
                                <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">Share data outside your organization without compromising file security. Create password-protected share links with an expiration date, download restrictions, and user information requirements as well.</p>

                                <Button content={"Learn More"} />

                            </div>

                        </div>
                        {/* col 2 */}
                        <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-highlight-color)]">
                            <img src={FeatureFrame3} alt="" />
                        </div>
                    </div>

                    {/* cards */}
                    <div className="grid grid-cols-12 gap-y-6 sm:gap-x-6 max-w-[1200px] mx-auto">
                        {/* card 1 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[var(--light-highlight-color)] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                {/* <img src={LockKeyhole_3} alt="" /> */}
                                <FontAwesomeIcon icon={faLock} className='highlight-text text-[30px]' />

                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Password protected</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Only those who know the password can access the shared file.</p>
                        </div>
                        {/* card 2 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[var(--light-highlight-color)] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                {/* <img src={PermissionControlIco} alt="" /> */}
                                <FontAwesomeIcon icon={faUserCog} className='highlight-text text-[30px]' />

                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Permission control</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">The recipient's permission can editing or view-only the shared folder.</p>
                        </div>
                        {/* card 3 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[var(--light-highlight-color)] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                {/* <img src={HourglassHalfIco} alt="" /> */}
                                <FontAwesomeIcon icon={faHourglass} className='highlight-text text-[30px]' />

                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Expiration time</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Set your shared link expire after exact period of time.</p>
                        </div>
                    </div>
                </div>
                {/* step 2 */}
                <div className='my-30 lg:my-45'>
                    <div className="grid grid-cols-12 max-w-[1200px] items-center mx-auto gap-y-15 lg:gap-x-10 mb-25">
                        {/* col 1 */}
                        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                            <img src={FeatureFrame4} alt="" />
                        </div>

                        {/* col 2 */}
                        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col items-start gap-y-7 mt-3">
                                <div className="flex items-center gap-3 px-4 py-2 bg-[#E0F7FA] rounded-md">
                                    {/* <img src={CollectFiles1} alt="" /> */}
                                    <FontAwesomeIcon icon={faFileExport} className='theme-text text-[20px]' />

                                    <span className="theme-text sofia-bold">Collect Files</span>
                                </div>
                                <h2 className="heading-3 !leading-[40px] lg:!leading-[64px] tracking-[-2px] blackish-gray-text">Send request and collect files from anyone.</h2>
                                <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px] mb-4">Whether you’re a recruiter collecting resumes or a professor gathering assignments or any collection process involves getting files from multiple people. Just create custom upload links, and enable users to submit their documents securely.</p>

                                <Button content={"Learn More"} />


                            </div>

                        </div>

                    </div>

                    {/* cards */}
                    <div className="grid grid-cols-12 gap-y-6 sm:gap-x-6 max-w-[1200px] mx-auto">
                        {/* card 1 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[#E0F7FA]  rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                <img src={Link} alt="" />
                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Create upload link</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Create a custom upload links, and enable users to submit their documents.</p>
                        </div>
                        {/* card 2 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[#E0F7FA]  rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                <img src={MultipleRecipientsIco} alt="" />
                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Send multiple recipients</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Send your request upload link to anyone via email with a custom message.</p>
                        </div>
                        {/* card 3 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[#E0F7FA] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                <img src={FoldersIco} alt="" />
                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Organize in folder</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Get your submissions in one pleace and know when people are done.</p>
                        </div>
                    </div>
                </div>

                {/* step 3 */}
                <div className=' my-30 lg:my-45'>
                    <div className="grid grid-cols-12 max-w-[1200px] items-center mx-auto gap-y-15 lg:gap-x-10 mb-25">
                        {/* col 1 */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col items-start gap-y-7 lg:max-w-[470px] mt-3">
                                <div className="flex items-center gap-3 px-4 py-2 bg-[var(--light-theme-color)] rounded-md">
                                    {/* <img src={FolderUser1} alt="" /> */}
                                    <FontAwesomeIcon icon={faFileExport} className='theme-text text-[20px]' />

                                    <span className="theme-text sofia-bold">Team Folder</span>
                                </div>
                                <h2 className="heading-3 !leading-[40px] lg:!leading-[64px] tracking-[-2px] blackish-gray-text">Easily edit and share files with team members.</h2>
                                <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px]">Bring all of your team members and files under one roof. Share instantly instead of sending threaded emails and copies of documents. Make your documents available immediately to your team by adding them to a Team Folder.</p>

                                <Button content={"Learn More"} />


                            </div>

                        </div>
                        {/* col 2 */}
                        <div className="col-span-12 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-highlight-color)]">
                            <img src={FeatureFrame5} alt="" />
                        </div>
                    </div>

                    {/* cards */}
                    <div className="grid grid-cols-12 gap-y-6 sm:gap-x-6 max-w-[1200px] mx-auto">
                        {/* card 1 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[var(--light-highlight-color)] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                {/* <img src={MembersIco} alt="" /> */}
                                <FontAwesomeIcon icon={faUserGear} className='highlight-text text-[30px]' />

                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Manage member</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Invite a members to join team folder seamlessly even without an account.</p>
                        </div>
                        {/* card 2 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[var(--light-highlight-color)] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                {/* <img src={FilesIco} alt="" /> */}
                                <FontAwesomeIcon icon={faFile} className='highlight-text text-[30px]' />

                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Organize your files</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Arrange them in folders and sub-folders within each Team Folder.</p>
                        </div>
                        {/* card 3 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[var(--light-highlight-color)] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                {/* <img src={FeatureUpdateIco} alt="" /> */}
                                <FontAwesomeIcon icon={faWandMagicSparkles} className='highlight-text text-[30px]' />

                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Stay up to date</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Focus on your work instead of checking for updates in your files.</p>
                        </div>
                    </div>
                </div>

                {/* step 4 */}
                <div className='my-30 lg:my-45'>
                    <div className="grid grid-cols-12 max-w-[1200px] items-center mx-auto gap-y-15 lg:gap-x-10 mb-25">
                        {/* col 1 */}
                        <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 rounded-3xl flex items-center justify-center px-4 md:px-0 py-10 bg-[var(--light-sky-blue)]">
                            <img src={FeatureFrame4} alt="" />
                        </div>

                        {/* col 2 */}
                        <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col items-start gap-y-7 mt-3">
                                <div className="flex items-center gap-3 px-4 py-2 bg-[#E0F7FA] rounded-md">
                                    {/* <img src={CollectFiles1} alt="" /> */}
                                    <FontAwesomeIcon icon={faFileExport} className='theme-text text-[20px]' />

                                    <span className="theme-text sofia-bold">Collect Files</span>
                                </div>
                                <h2 className="heading-3 !leading-[40px] lg:!leading-[64px] tracking-[-2px] blackish-gray-text">Send request and collect files from anyone.</h2>
                                <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px] mb-4">Whether you’re a recruiter collecting resumes or a professor gathering assignments or any collection process involves getting files from multiple people. Just create custom upload links, and enable users to submit their documents securely.</p>

                                <Button content={"Learn More"} />


                            </div>

                        </div>

                    </div>

                    {/* cards */}
                    <div className="grid grid-cols-12 gap-y-6 sm:gap-x-6 max-w-[1200px] mx-auto">
                        {/* card 1 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[#E0F7FA]  rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                <img src={BackupIco} alt="" />
                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Backup your file</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Simple and cost-effective data protection leveraging decentralized object storage.</p>
                        </div>
                        {/* card 2 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[#E0F7FA]  rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                <img src={PhoneTabIco} alt="" />
                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Access from anywhere</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">Whether you’re at work or on the road, your files are synced across your devices.</p>
                        </div>
                        {/* card 3 */}
                        <div className="col-span-12 sm:col-span-6 min-[930px]:!col-span-4 rounded-3xl px-7 py-8 shadow-md shadow-[rgba(0,0,0,0.05)] bg-white flex flex-col gap-y-4">
                            <div className="bg-[#E0F7FA] rounded-full flex items-center justify-center h-[64px] w-[64px] min-w-[64px]">
                                <img src={FeatureSecurityIco} alt="" />
                            </div>

                            <h5 className="text-[20px] sm:text-[24px] leading-[30px] mt-2 tracking-[-0.5px]">Protect your data</h5>
                            <p className="sofia-light leading-[24px] tracking-[-0.2px] cool-gray-text">If your device is lost or stolen, rest easy knowing your data is safe.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* get started */}
            <div className="px-4  my-40">

                <div className="max-w-[1200px] bg-[var(--light-sky-blue)] mx-auto items-center rounded-3xl px-4 sm:px-10 grid grid-cols-12 gap-y-10">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6 ps-0 py-10 lg:py-20 sm:ps-5 md:ps-10 flex items-start flex-col gap-6">
                        <h4 className="text-[35px] md:text-[48px] sofia-bold leading-[46px] md:leading-[56px] tracking-tight text-center lg:text-start mx-auto lg:mx-0">Ready to get started?</h4>
                        <p className="sofia-light medium-gray-text text-[18px] leading-[32px] tracking-[-0.5px] mx-auto lg:mx-0 text-center lg:text-start">Storing data on decentralized networks can be hard. YouKast removes that complexity. Upload data in seconds using the tools you already know and love.</p>

                        <div className="flex mt-3 gap-5 flex-wrap items-center mx-auto lg:mx-0">
                            <Button content={"Get Started"} className={"!sofia-medium !px-9 w-full min-[440px]:w-auto mx-auto xs:!mx-0"} />
                            <Button content={"Get $10 Credit"} reverseStyle={true} className={"!sofia-medium w-full min-[440px]:w-auto mx-auto xs:!mx-0"} />
                        </div>

                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 lg:col-span-6 mx-auto lg:mx-0">
                        <img src={FeatureFrame7} alt="" className='mx-auto md:mx-0 md:ms-auto h-full' />
                    </div>
                </div>

            </div>

        </>
    )
}
