import React, { useState } from 'react'

export default function InputBox({
    label = "",
    labelClassName,
    name = "",
    value = "",
    type = "text",
    placeholderText = "",
    handleOnInputChange,
    required = false,
    className,
    inputClassName,
    min
}) {


    return (
        <div className={`flex flex-col gap-2 mt-4 sm:mt-8 ${className}`}>
            <label className={`medium-gray-text ${labelClassName} font-bold`} htmlFor={name}>{label}{required ? "*" : ""}</label>
            <input type={type}
            min={min}
                name={name}
                id={name}
                required={required}
                value={value}
                onChange={handleOnInputChange}
                placeholder={placeholderText}
                className={`font-medium text-[var(--dark-gray)] rounded-lg w-full bg-[var(--light-gray)] px-5 py-3 outline-none ${inputClassName}`} />

        </div>
    )
}
