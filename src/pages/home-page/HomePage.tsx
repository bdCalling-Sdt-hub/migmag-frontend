import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import HomeBanner from './HomeBanner'
import MusickSlider from './MusickSlider'
import TopTenVocal from './TopTenVocal'
import ArtistList from './ArtistList'
import Footer from '@/components/footer/Footer'
import VocalPublish from './VocalPublish'
import Coverd from './Coverd'

const HomePage = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className='px-4' >
                    <HomeBanner></HomeBanner>
                </div>
                <MusickSlider></MusickSlider>
                <div className=' px-4 lg:mt-[69px] mt-6 ' >
                    <TopTenVocal></TopTenVocal>
                </div>
                <div className='  ' >
                    <ArtistList></ArtistList>
                </div>
                <div>
                    <VocalPublish></VocalPublish>
                </div>
                <div>
                    <Coverd></Coverd>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default HomePage
