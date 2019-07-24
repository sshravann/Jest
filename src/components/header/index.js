import React from "react";
import Logo from "../../assets/graphics/logo.png";
import "./styles.scss";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
