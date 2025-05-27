import React from 'react'
import SingerDetails from './SingerDetails'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SingerDetails></SingerDetails>
      <div style={{ fontFamily: 'Favorit' }}  className='px-4' >
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
