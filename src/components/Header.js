import { useState } from "react";
import { LOGO_URL } from "../Utils/Constant";

const Header = () =>{
   const [BtnNameReact,setBtnNameReact] = useState('Login');
   console.log("Header rendered");

    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' 
          src={LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul>
            <li>
              Home
            </li>
            <li>
              About Us
            </li>
            <li>
              Contact Us
            </li>
            <li>
              Cart
            </li>
            <button
            className="login"
            onClick={() => {
              BtnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {BtnNameReact}
          </button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;