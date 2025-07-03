import React, { useRef, useState } from 'react';

export default function EditProfileInModal() {
  const fileInputRef = useRef();
  const [profile, setProfile] = useState({
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=5'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setProfile(prev => ({ ...prev, profilePic: previewURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('Profile updated!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[800px] px-6 py-6 flex gap-8 items-start bg-white rounded-xl"
    >
      {/* Left: Profile Image */}
      <div className="flex flex-col items-center w-[180px] shrink-0">
        <img
          src={profile.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="text-blue-600 text-sm mt-3 underline"
        >
          Change Photo
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Right: Form Fields */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 mt-2 text-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}
