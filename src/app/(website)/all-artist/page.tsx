import React from 'react'
import AllArtistPage from './AllArtistPage'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const page: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' max-w-[1539px] mx-auto px-4 ' >
                <AllArtistPage></AllArtistPage>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default page
