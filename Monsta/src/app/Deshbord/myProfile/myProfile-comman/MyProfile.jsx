import React from "react";

export default function MyProfile() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <form className="bg-white border border-gray-200 rounded-lg p-8">
        {/* Gender Radio Buttons */}
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="mr"
              defaultChecked
              className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-900 font-medium">Mr.</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="mrs"
              className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-900 font-medium">Mrs.</span>
          </label>
        </div>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-2">
            Name*
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-2">
            Email*
          </label>
          <input
            type="email"
            defaultValue="sevocyqore@mailinator.com"
            className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            readOnly
          />
        </div>

        {/* Mobile Number Field */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-2">
            Mobile Number*
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Address Field */}
        <div className="mb-8">
          <label className="block text-gray-900 font-medium mb-2">
            Address*
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-end">
          <button className="px-10 py-3 bg-[#C09578] text-white font-semibold rounded-full hover:bg-[#a67d61] transition-colors">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
}