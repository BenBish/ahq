import React, { useState } from "react";
import styled from "@emotion/styled";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const NavItem = styled.li`
    @media (min-width: 992px) {
      padding-left: 2rem;
    }
  `;

  const NavLink = styled.a`
    color: #3a4347;
    font-size: 14px;
    transition: color 0.3s ease-out;
    &:hover {
      color: #1a2225;
      text-decoration: none;
    }
  `;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="mt-3 mb-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <img src={logo} alt="Autopilot" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <NavItem>
                <NavLink href="#">Subscription &amp; billing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Logout</NavLink>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
