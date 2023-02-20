import React from 'react'
import { Link } from "react-router-dom";
import PORTFOLIOImage from "../Images/PORTFOLIO.png";

const Header = () => {
  return (
    <header>
      {/* <div>
        <h3>ポートフォリオ</h3>
      </div> */}

      <div className='d-flex align-items-center justify-content-center'>
        <img src={PORTFOLIOImage} className="nav-img"></img>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header