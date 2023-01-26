import React from 'react'
import Logo from '../../assets/img/logo.png'
import LoginXImg from '../../assets/img/login_x.png'

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="d-flex header-section">
        <div>
          <img src={Logo} width="50px" height="50px" />
        </div>
        <div className="d-flex header-title mlp-10 font-bold my-auto">
          <div className="font-yellow">RBX</div>
          <div className="font-light">Pirate</div>
        </div>
        <div className="header-login-btn d-flex font-light ml-auto my-auto">
          <div className="font-bold">Login</div>
          <div className="mlp-50">
            <img src={LoginXImg} width="20px" />
          </div>
        </div>
      </div>
      <div className="header-bottom-line"></div>
    </div>
  )
}

export default Header
