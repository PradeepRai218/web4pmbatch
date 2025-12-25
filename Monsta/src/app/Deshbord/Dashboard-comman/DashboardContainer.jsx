"use client"
import React from 'react'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'
import MainDashboard from './MainDashboard'
import Order from '../orders/order-comman/Order'
import Addresses from '../addresses/addresses-comman/Adresses'
import MyProfile from '../myProfile/myProfile-comman/MyProfile'
import ChangePass from '../change-password/changePassword-comman/ChangePass'

export default function DashboardContainer() {
    let pathName = usePathname()
  return (
    <div className='w-[1320px] mx-auto grid grid-cols-[20%_78%] justify-center gap-2 items-start border-t border-b border-gray-300 py-5 my-10'>
        <Sidebar/>
        {
            pathName == '/Deshbord' ? <MainDashboard/>
            
            :

            pathName == '/Deshbord/orders' ? <Order/>

            :

            pathName == '/Deshbord/addresses' ? <Addresses/>

            :

            pathName == '/Deshbord/myProfile' ? <MyProfile/>

            :

            pathName == '/Deshbord/change-password' ? <ChangePass/>

            :

            ''
        }
    </div>
  )
}
