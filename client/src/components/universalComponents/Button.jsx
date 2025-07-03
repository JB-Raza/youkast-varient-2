import React from 'react'

export default function Button({ className, ref, content, onClick, disabled = false, reverseStyle = false }) {
    return (
        <button
            disabled={disabled}
            ref={ref || null}
            onClick={onClick}
            className={`flex items-center justify-center cursor-pointer px-[30px] py-[10px] rounded-[12px] text-nowrap  text-center transition-all duration-300 sofia-medium !text-[16px] border-2 ${className} ${reverseStyle ? "border-[var(--theme-color)] text-[var(--theme-color)] hover:text-white hover:bg-[var(--theme-color)] " : "text-white border-transparent bg-[var(--theme-color)] hover:text-[var(--theme-color)] hover:bg-transparent hover:border-[var(--theme-color)]"}`}>{content}</button>
    )
}
