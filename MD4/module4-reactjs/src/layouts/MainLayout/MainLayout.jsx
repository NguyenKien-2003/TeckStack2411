import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Introduction from '../../components/Introduction'
import Instruct from '../../components/Instruct'


const MainLayout = () => {
  return (
    <>
    <Header />
    <Banner />
    <Introduction />
    <Instruct />
    <Footer />
    </>

  )
}

export default MainLayout