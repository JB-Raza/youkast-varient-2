import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider, faSpinner } from '@fortawesome/free-solid-svg-icons'

const AccessFilesModal = ({ isOpen, onSuccess, onClose, validatePassword }) => {

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const isValid = await validatePassword(password);

            setTimeout(() => {
                if (isValid) {
                    setError('');
                    onSuccess();
                } else {
                    setError('Incorrect password. Please try again.');
                    setPassword('');
                }
            }, 1000)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error.message)
        }

    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[220]">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Protected Files</h2>
                <p className="text-sm text-gray-600 mb-3">
                    This content is password protected. Please enter the password to access the files.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded cursor-pointer bg-gray-300 hover:bg-gray-400 text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded theme-bg text-white hover:opacity-90 cursor-pointer text-sm"
                        >
                            {loading ? <FontAwesomeIcon icon={faSpinner} className='animate-spin' /> : "Unlock"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccessFilesModal;
