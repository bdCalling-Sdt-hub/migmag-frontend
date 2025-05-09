import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import RegisterFrom from './RegisterFrom'
import Footer from '@/components/footer/Footer'

const page = () => {
    return (
        <div className=' bg-[#f2fef8] ' >
            <Navbar></Navbar>
            <div>
                <RegisterFrom></RegisterFrom>
            </div>
        </div>
    )
}

export default page
