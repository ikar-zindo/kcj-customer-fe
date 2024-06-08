import React from 'react'

const HeaderComponent = () => {
  return (
      <div className="container">
         <header className="text-shojumaru-regular d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
               <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                  <img id="logoImage" width="40px" height="40px" src="src/assets/logo/logo-label-light.png"></img>

                  <span className="fs-6 mx-2 text-my-light text-shojumaru-regular">K-Curry<br></br><span className="text-my-red">Jib</span></span>
               </a>
            </div>

            <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
               <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
               <li><a href="/products" className="nav-link px-2 active">Menu</a></li>
               <li><a href="/restaurant" className="nav-link px-2">Restaurants</a></li>
            </ul>

            <div className="text-end">
               <a href="/login" type="button" className="btn btn-outline-primary me-2">Sign-in</a>
               <a href="/registration" type="button" className="btn btn-primary">Sign-up</a>
            </div>
         </header>
      </div>
  )
}

export default HeaderComponent