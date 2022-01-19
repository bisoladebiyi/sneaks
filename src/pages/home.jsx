import React from 'react'
import Features from '../components/features'
import Header from '../components/header'
import ShopSection from '../components/shopSection'

const Home = () => {
    return (
        <div className="h-full">
            <Header />
            <Features />
            <ShopSection  />
        </div>
    )
}

export default Home
