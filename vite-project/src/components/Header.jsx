import React from 'react'

const Header = () => {


  return (
    <>
      <header className="p-3 mb-3 border-bottom">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <svg
          className="bi me-2"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 link-dark" >
            Trang chủ
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            Thực đơn
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            Tin tức
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-warning text-white">
            Về chúng tôi
          </a>
        </li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Tìm kiếm món ăn"
          aria-label="Search"
        />
      </form>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2 link-dark">
          Login
        </button>
        <button type="button" className="btn btn-warning">
          Sign-up
        </button>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header   