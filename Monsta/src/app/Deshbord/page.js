import React from 'react'
import Breadcrumds from '@/app/common/Breadcrumds'
import DashboardContainer from './Dashboard-comman/DashboardContainer'


export default function Deshbord() {
  return (
    <div>
      <Breadcrumds pageName={'Dashboard'}/>   
      <DashboardContainer/>
    </div>
  )
}
