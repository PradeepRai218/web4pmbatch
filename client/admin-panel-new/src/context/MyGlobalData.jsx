import React, { createContext, useEffect, useState } from 'react'
import Cookies from "js-cookie"
export let loginContext=createContext()
export default function MyGlobalData({children}) {

  let [adminId,setAdminId]=useState( Cookies.get('ADMINID') ?? '' )

  let obj={adminId,setAdminId}

  useEffect(()=>{
      Cookies.set('ADMINID',adminId)
  },[adminId])

  return (
    <loginContext.Provider value={obj}>
      {children}
    </loginContext.Provider>
  )
}
