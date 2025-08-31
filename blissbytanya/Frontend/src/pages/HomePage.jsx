import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BrandBar from '../components/BrandBar'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import BrowseByStyle from '../components/BrowseByStyle'
import HappyCustomers from '../components/HappyCustomers'


const HomePage = () => {
  return (
    <div>
        <h1 className=''>

          <HeroSection />
          <BrandBar />
          <NewArrivals/>
          <TopSelling limit={4}/>
          <BrowseByStyle />
          <HappyCustomers />

          

        </h1>
    </div>
  )
}

export default HomePage
