"use client";
import axios from "axios";
import React, { use } from "react";
import { useSelector } from "react-redux";

export default function ChangePass() {
  let token=useSelector((state)=>state.user.token);
  let baseUrl=process.env.NEXT_PUBLIC_BASE_URL;

  let changePassword=(e)=>{
    let obj={
      oldPassword:e.target.oldPassword.value,
      newPassword:e.target.newPassword.value,
      confirmPassword:e.target.confirmPassword.value
    }
    e.preventDefault();
    axios.post(`${baseUrl}user/change-password`,obj,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then((res)=>{
       if(res.data.success){
        alert(res.data.message)
       }
       else{
        alert(res.data.message)
       }
  
    } )
    // Add logic to handle password change
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Change Password</h1>

      <form onSubmit={changePassword} className="bg-white border border-gray-200 rounded-lg p-8">
        {/* Current Password */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-3">
            Current Password
          </label>
          <input
            type="password"
            name="oldPassword"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* New Password */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-3">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-8">
          <label className="block text-gray-900 font-medium mb-3">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Change Password Button */}
        <div className="flex justify-end">
          <button className="px-8 py-3 bg-[#C09578] text-white font-semibold rounded-full hover:bg-[#a67d61] transition-colors uppercase tracking-wide">
            CHANGE PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
}