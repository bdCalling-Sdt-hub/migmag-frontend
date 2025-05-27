import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import AllVocal from '@/pages/home-page/AllVocal'
import React from 'react'

const page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' max-w-[1539px] mx-auto px-4 ' >
                <AllVocal></AllVocal>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default page
