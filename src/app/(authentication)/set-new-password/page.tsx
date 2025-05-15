import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import SetNewPassword from './SetNewPassword'

const page : React.FC = () => {
  return (
    <div className=' bg-[#f2fef8] ' >
      <Navbar></Navbar>
      <SetNewPassword></SetNewPassword>
    </div>
  )
}

export default page
