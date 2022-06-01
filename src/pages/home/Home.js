import React from 'react'
import Email from '../../components/email/Email'
import Footer from '../../components/email/footer/Footer'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Featured />
        <Email />
        <Footer />
    </div>
  )
}

export default Home