import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import LoginPage from './LoginPage'

const page : React.FC = () => {
    return (
        <div className=' bg-[#f2fef8] ' >
            <Navbar/>
            <div>
                <LoginPage></LoginPage>
            </div>
        </div>
    )
}

export default page
