import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ProcessingModal({ isOpen = false, message = "Processing...", className }) {
    return (
        <div
            className={`fixed inset-0 z-[220] bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } ${className}`}
        >
            <div className="bg-white px-8 py-6 rounded-xl shadow-lg flex items-center gap-4 animate-fade-in-down">
                <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    className="text-blue-500 text-3xl"
                />
                <span className="text-lg font-medium text-gray-700">{message}</span>
            </div>
        </div>
    );
}
