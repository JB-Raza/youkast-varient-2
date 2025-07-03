import React, { useState } from 'react';

export default function UpdatePasswordInModal() {
    const [form, setForm] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.oldPassword || !form.newPassword || !form.confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (form.newPassword !== form.confirmPassword) {
            alert("New password and confirm password do not match.");
            return;
        }

        // Submit logic here
        alert("Password updated!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-[800px] bg-white rounded-xl px-6 py-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Old Password */}
                <div className="sm:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Old Password</label>
                    <input
                        type="password"
                        placeholder='********'
                        name="oldPassword"
                        value={form.oldPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* New Password */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        placeholder='********'
                        value={form.newPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder='********'
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="mt-6 text-end">
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Save Password
                </button>
            </div>
        </form>
    );
}
