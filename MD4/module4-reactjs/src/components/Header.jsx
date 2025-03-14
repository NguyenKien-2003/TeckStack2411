import React from 'react'
import { Search, ShoppingCart, User} from "lucide-react";



const Header = () => {
  return (
    <>
      <header className='bg-white mx-30'>
        <div className='flex justify-between items-center p-4 my-1.7'>
          <nav className='hidden md:flex space-x-12'>
            <a href="#" className="text-black font-bold mt-3  text-[14px] active:text-red-500 active:border-b-1">Trang chủ</a>
            <a href="#" className="text-black font-bold mt-3 text-[14px]">Thực đơn</a>
            <a href="#" className="text-black font-bold mt-3 text-[14px]">Về chúng tôi</a>
            <a href="#" className="text-black font-bold mt-3 text-[14px]">Tin tức</a>
            <a href="#" className="text-white font-bold bg-yellow-700 p-2 mt-1 px-5 text-[14px]">Đặt tiệc ngay</a>
          </nav>
          <div className='flex items-center'>
            <div className='flex border-b py-2'>
              <input type='text' className='text-xs focus:outline-none' placeholder='Tìm kiếm món ăn'/>
              <Search className="h-4 w-4 text-black-500 mt-1.5" />
            </div>
            <div className='flex py-2 ml-10 items-center'>
              <User className="h-6 w-6 text-black-500 mt-0.5 mr-0.5"/>
              <p className='text-black text-xs'>Tài khoản</p>
            </div>
            <div className='items-center ml-10'>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header