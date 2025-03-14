import React from 'react'


const Footer = () => {
  return (
    <div
    className="relative w-full h-[400px] bg-cover bg-center justify-center text-white transition-all duration-1000 pt-10"
      style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/02/50/95/91/240_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity'></div>
      <div className='relative flex mx-30 space justify-between'>
        <div>
          <h1 className='font-semibold text-xl'>Về chúng tôi</h1>
          <p className='font-light text-sm'>Số điện thoại: 095.366.4722</p>
          <p className='font-light text-sm'>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
        </div>
        <div>
          <h1 className='font-semibold text-xl'>Phương thức thanh toán</h1>
        </div>
        <div>
          <h1 className='font-semibold text-xl'>Truyền thống xã hội</h1>  
        </div>
        <div>
          <h1 className='font-semibold text-xl'>Hỗ trợ khách hàng</h1>
          <h1 className='font-semibold text-sm'>Liên hệ:</h1>
          <p className='font-light text-sm'>Số điện thoại: 095.366.4722</p>
          <p className='font-light text-sm'>Email: happy.@gmal.com</p>
          <p className='font-light text-sm'>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
        </div>
      </div>
      
      <div className='relative mx-30 space-x-12 mt-10'>
        <h1 className='font-semibold text-xl'>Về chúng tôi</h1>
        <p className='font-light text-sm'>Số điện thoại: 095.366.4722</p>
        <p className='font-light text-sm'>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>  
      </div>
    </div>
  )
}

export default Footer