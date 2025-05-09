import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import OtpVerifyPage from './OtpVerifyPage'

const page: React.FC = () => {
    return (
        <div className=' bg-[#f2fef8] ' >
            <Navbar/>
            <OtpVerifyPage></OtpVerifyPage>
        </div>
    )
}

export default page
