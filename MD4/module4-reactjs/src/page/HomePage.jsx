import React, { useState } from 'react'
import Banner from '../components/HomePage/Banner'
import Introduction from '../components/HomePage/Introduction'
import Instruct from '../components/HomePage/Instruct'
import OrderDate from '../components/HomePage/OrderDate'
import SelectionReason from '../components/HomePage/SelectionReason'
import MenuBanner from '../components/HomePage/MenuBanner'
import ModalBanner from '../components/ModalBanner'
import { useOutletContext } from 'react-router-dom'


const HomePage = () => {
  // const [order,setOrder] = useState ({date:"", table : 1});
  const {order, setOrder} = useOutletContext()
  return (
    
    <div>
    
        <Banner />
        <Introduction />
        <Instruct />
        <OrderDate order={order} setOrder={setOrder}/>
        {/* <div className="p-4 mt-4 bg-gray-200">
        <h2 className="text-lg font-bold">Thông tin đặt bàn:</h2>
        <p>Ngày đặt: {order.date}</p>
        <p>Số bàn: {order.tables}</p>
      </div> */}
        <MenuBanner />
        <SelectionReason />
    </div>
  )
}

export default HomePage