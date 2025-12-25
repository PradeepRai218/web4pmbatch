"use client";
import React, { useState } from "react";
import Breadcrumds from "../common/Breadcrumds";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userData } from "../slice/userLogin";
import { redirect } from "next/navigation";

export default function Page() {

  let baseURL=process.env.NEXT_PUBLIC_BASE_URL
  let [loading,setLoading]=useState(false)
  console.log(baseURL);
  
  let pageName = "My Account";

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register states
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [userName, setuserName] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [otp, setOtp] = useState("");

  // Forget password states
  const [forgetEmail, setForgetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Flags
  const [showOtp, setShowOtp] = useState(false);
  const [showForget, setShowForget] = useState(false);

  // Error states (per field)
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [otpError, setOtpError] = useState("");
  const [forgetErrors, setForgetErrors] = useState({});


  //Call Action

 let dispatch =useDispatch()

  // ---------------- LOGIN HANDLER ----------------
  const handleLogin = (e) => {
    e.preventDefault();
    let errors = {};
    if (!loginEmail) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(loginEmail))
      errors.email = "Invalid email address.";
    if (!loginPassword) errors.password = "Password is required.";
    setLoginErrors(errors);

    let loginObj={
      loginEmail,
      loginPassword
    }
    
     axios.post(`${baseURL}user/login`,loginObj)
      .then((res)=>res.data)
      .then((finalRes)=>{
        if(finalRes.success){
          let {userCheck,token}=finalRes
            let data={
              _id:userCheck._id,
              userName:userCheck.userName
            }

            dispatch(userData({data,token}))
            redirect('/Deshbord')
        }
        else{
          alert(finalRes.message)
        }
        
      })
    

    // if (Object.keys(errors).length === 0) {
    //   alert("✅ Login successful!");
    //   setLoginEmail("");
    //   setLoginPassword("");
    // }
  };

  // ---------------- REGISTER HANDLER ----------------
  const handleRegister = (e) => {
    setLoading(true)
    e.preventDefault();
    let errors = {};
    if (!registerEmail) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(registerEmail))
      errors.email = "Invalid email address.";
    if (!registerPassword) errors.password = "Password is required.";
    setRegisterErrors(errors);


      let userObj={
          userName,
          userEmail:registerEmail,
          userPassword:registerPassword,
          userPhone
      }
      axios.post(`${baseURL}user/send-otp`,userObj)
      .then((res)=>res.data)
      .then((finalRes)=>{
        if(finalRes.success){
          setShowOtp(true);
          setLoading(false)
        }
        else{
           setLoading(false)
          alert(finalRes.message)
        }
        
      })
    



    // if (Object.keys(errors).length === 0) {
    //   setShowOtp(true);
    // }
  };

  // ---------------- OTP HANDLER ----------------
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      setOtpError("Please enter the OTP.");
      return;
    }
     let userObj={
          userName,
          userEmail:registerEmail,
          userPassword:registerPassword,
          userPhone,
          otp
      }

      axios.post(`${baseURL}user/create`,userObj)
      .then((res)=>res.data)
      .then((finalRes)=>{
        console.log(finalRes);
        
        if(finalRes.success){
          // setShowOtp(true);
          // setLoading(false)
        }
        
      })
      
    setOtpError("");
   
  };

  // ---------------- FORGET PASSWORD HANDLER ----------------
  const handleForgetSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!forgetEmail) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(forgetEmail))
      errors.email = "Invalid email address.";
    if (!newPassword) errors.password = "New password is required.";
    setForgetErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("✅ Password reset successfully!");
      setShowForget(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumds pageName={pageName} />

      <div className="flex justify-center mt-6">
        <hr className="w-4/5 border-t-[1.5px] border-gray-300" />
      </div>

      <section className="w-4/5 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE - LOGIN */}
        <div>
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">Login</h1>

          {!showForget ? (
            <form
              onSubmit={handleLogin}
              className="border border-gray-300 rounded-xl p-8 shadow-sm h-[410px] flex flex-col justify-between"
            >
              <div>
                {/* Email */}
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {loginErrors.email && (
                  <p className="text-red-600 text-sm mb-3">
                    {loginErrors.email}
                  </p>
                )}

                {/* Password */}
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {loginErrors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {loginErrors.password}
                  </p>
                )}

                <p className="text-sm mt-3">
                  <a
                    href="#"
                    onClick={() => setShowForget(true)}
                    className="text-gray-600 hover:text-[#b76e79] transition-colors duration-300"
                  >
                    Lost your password?
                  </a>
                </p>
                <a
                  href="/Deshbord"
                  onClick={() => setShowForget(true)}
                  className="text-gray-600 hover:text-[#b76e79] transition-colors duration-300"
                >
                  Deshbord
                </a>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  className="bg-gray-800 hover:bg-[#b76e79] text-white px-6 py-2 rounded-lg transition duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          ) : (
            // Forget Password
            <form
              onSubmit={handleForgetSubmit}
              className="border border-gray-300 rounded-xl p-8 shadow-sm h-[410px] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Reset Password
                </h2>

                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={forgetEmail}
                  onChange={(e) => setForgetEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {forgetErrors.email && (
                  <p className="text-red-600 text-sm mb-3">
                    {forgetErrors.email}
                  </p>
                )}

                <label className="block text-gray-700 text-sm font-medium mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {forgetErrors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {forgetErrors.password}
                  </p>
                )}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowForget(false)}
                  className="text-gray-600 hover:text-[#b76e79] transition duration-300"
                >
                  ← Back to Login
                </button>
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-[#b76e79] text-white px-6 py-2 rounded-lg transition duration-300"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>

        {/* RIGHT SIDE - REGISTER */}
        <div>
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">
            Register
          </h1>

          {!showOtp ? (
            <form
              onSubmit={handleRegister}
              className="border border-gray-300 rounded-xl p-8 shadow-sm h-[410px] flex flex-col justify-between"
            >
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                   value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                  name="userName"
                  placeholder="Enter your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />

                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {registerErrors.email && (
                  <p className="text-red-600 text-sm mb-3">
                    {registerErrors.email}
                  </p>
                )}

                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="userPassword"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {registerErrors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {registerErrors.password}
                  </p>
                )}

                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="userPhone"
                    value={userPhone}
                  onChange={(e) => setuserPhone(e.target.value)}
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
              </div>

              <div className="flex justify-end">
            
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gray-800 flex gap-3 hover:bg-[#b76e79] text-white px-6 py-2 rounded-lg transition duration-300"
                >
                  {
                    loading ?
                    <>
                      Register ....
                     <div class="w-5 h-5 rounded-full animate-spin
                    border border-solid border-white border-t-transparent"></div>
                    </>
                    :
                    <b>Register</b> 
                  }

                  


                </button>
              </div>
            </form>
          ) : (
            // OTP
            <form
              onSubmit={handleOtpSubmit}
              className="border border-gray-300 rounded-xl p-8 shadow-sm h-[410px] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Verify OTP
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Enter the 6-digit OTP sent to your email.
                </p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#b76e79] placeholder-black"
                />
                {otpError && (
                  <p className="text-red-600 text-sm mt-1">{otpError}</p>
                )}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowOtp(false)}
                  className="text-gray-600 hover:text-[#b76e79] transition duration-300"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-[#b76e79] text-white px-6 py-2 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
