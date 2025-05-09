import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import AllVocalMusic from '@/pages/home-page/AllVocalMusic'
import React from 'react'

const page = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className=' max-w-[1539px] mx-auto px-4 ' >
                    <AllVocalMusic></AllVocalMusic>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default page
