import React, { useEffect } from 'react';

export default function WarningPopup({ isOpen, onClose, onContinue, warningHead, message }) {

    return (
        <div className={`absolute left-1/2 z-[120] -translate-x-1/2 top-1/2 -translate-y-1/2 transition-transform duration-300  ${isOpen ? "scale-100 visible" : "scale-0 invisible"} bg-white w-[90%] max-w-[500px] rounded-xl shadow-xl p-6 transition-transform duration-300`}>
            <div className="flex flex-col items-center text-center gap-4">

                {/* Warning Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M12 5c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
                    />
                </svg>

                {/* Title */}
                <h2 className="text-xl font-semibold text-yellow-700">{warningHead ? warningHead : "Warning"}</h2>

                {/* Message */}
                <p className="text-sm text-gray-600">{message || "Are you sure you want to continue?"}</p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 cursor-pointer py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onContinue}
                        className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
