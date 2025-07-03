import React from 'react';

export default function ViewProfileInModal() {
    const user = {
        name: "John Doe",
        username: "johndoe123",
        email: "john.doe@example.com",
        subscription: "Platinum",
        profilePic: "https://i.pravatar.cc/150?img=5"
    };

    return (
        <>
            {/* Subscription */}
            <div className="flex items-center justify-between gap-5 my-3">
                <p className="text-lg font-semibold text-gray-800 mb-1 tracking-wide">Subscription Plan</p>
                <span className="inline-block bg-blue-600 text-white text-[16px] tracking-[0.8px] font-medium px-7 py-2 rounded-md">
                    {user.subscription}
                </span>
            </div>
            <div className="w-full max-w-[800px] px-6 py-6 flex gap-8 items-start bg-white rounded-xl">
                {/* Profile Image */}
                <div className="flex flex-col items-center w-[180px] shrink-0">
                    <img
                        src={user.profilePic}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                    />
                </div>

                {/* Profile Info */}
                <div className="flex-1 grid grid-cols-12 sm:grid-cols-2 gap-5 text-left">
                    {/* Name */}
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Full Name</p>
                        <p className="text-base font-medium text-gray-800">{user.name}</p>
                    </div>

                    {/* Username */}
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Username</p>
                        <p className="text-base font-medium text-gray-800">@{user.username}</p>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="text-base font-medium text-gray-800">{user.email}</p>
                    </div>
                </div>
            </div>
        </>

    );
}
