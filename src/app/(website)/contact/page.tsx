import React from 'react'
import ContactFrom from './ContactFrom'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' max-w-[1539px] mx-auto ' >
                <ContactFrom></ContactFrom>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default page
