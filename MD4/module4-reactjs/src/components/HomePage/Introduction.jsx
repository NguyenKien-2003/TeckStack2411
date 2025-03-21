import React from 'react'

const Introduction = () => {
  return (
    <div className='bg-gray-100 p-1 mt-[-16px]'>
    <div className="flex space-x-4 p-4 m-10 mx-28">
    <div className="w-1/2">
      <h1 className="text-4xl font-semibold my-8">Tiệc tại gia chất nhà hàng</h1>
      <p className="text-gray-700 mr-8 text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
<br /> <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
      </p>
    </div>

    {/* Video YouTube */}
    <div className="w-1/2 flex justify-center items-center ">
      <div className=" aspect-video shadow-lg rounded-xl ">
        <iframe
          className="w-[565px] h-[400px]"
          src="https://www.youtube.com/embed/keeUu0z5aTU"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Introduction