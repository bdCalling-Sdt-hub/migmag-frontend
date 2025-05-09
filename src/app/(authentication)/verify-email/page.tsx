import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import EmailVerify from './EmailVerify'

const page: React.FC = () => {
    return (
        <div className=' bg-[#f2fef8] ' >
            <Navbar />
            <EmailVerify />
        </div>
    )
}

export default page
