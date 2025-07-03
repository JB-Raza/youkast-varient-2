 {filesData.files.length > 0 && fileUploadModal && (filesData.files || []).map((file, index) =>
                                    <div key={index}
                                        className='flex flex-col items-center justify-between gap-1 group border border-neutral-400 p-2 rounded-md relative cursor-pointer'
                                    >
                                        {/* btn to remove file */}
                                        <button
                                            title='remove file'
                                            onClick={() => setFilesData(() => filesData.files.filter((f, i) => i !== index))}

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