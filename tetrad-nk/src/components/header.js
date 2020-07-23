import { Link } from "gatsby"
import React from "react";
import logo from "../images/logo.png"

const Header = () => (
  <header>
    <div className="header-logo">
        <Link to="/">
          <img src={logo} alt={"TetraD-NK logo"}/>
        </Link>
    </div>
      <div className="header-tagline-wrapper">
          <div className="header-tagline">
              Быстро. Выгодно. Качественно.
          </div>
      </div>
      <button className="header-button">Обсудить проект</button>
  </header>
)

export default Header
