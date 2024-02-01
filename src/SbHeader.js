import React from "react";

const Header = ({
  logoSrc,
  menuItems,
  showLocationIcon,
  findStoreText,
  signInLink,
  joinNowLink,
}) => (
  <header className="header">
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo">
          <img src={logoSrc} alt="Logo" />
        </div>

        <div className="header_menue">
          <nav>
            <ul>
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a href="/">{menuItem}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="header2nd-flex">
          <div className="header-icon">
            {showLocationIcon && (
              <i
                className="fa-solid fa-location-dot"
                style={{ fontSize: "2em" }}
              ></i>
            )}
            <div className="find-store">
              <p>{findStoreText}</p>
            </div>
          </div>

          <div className="header-link-button">
            <div>
              <a href={signInLink} className="btn-one">
                Sign in
              </a>
            </div>
            <div>
              <a href={joinNowLink} className="btn-two">
                Join now
              </a>
            </div>
          </div>
          <div className="bx bx-menu-alt-right" id="menu-icon"></div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
