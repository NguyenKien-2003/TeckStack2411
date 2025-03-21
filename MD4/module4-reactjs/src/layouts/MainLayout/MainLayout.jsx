import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import ModalBanner from '../../components/ModalBanner'


const MainLayout = () => {
  const [order, setOrder] = useState({date:"", table : 1})
  return (
    <>
  
    <Header />
    <div>
      <Outlet context={{order,setOrder}}/>  
    </div> 
    <Footer />
    </>

  )
}

export default MainLayout