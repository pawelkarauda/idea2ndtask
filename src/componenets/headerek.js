import React from "react";
import Logo from "../images/logo_im_dark.png";
import FlightInfo from "./FlightInfo";
import ResponsiveMenu from "react-responsive-navbar";

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="Header__menu container">
                    <div className="Header__brand">
                        <img src={Logo} alt={"logo"} />
                    </div>

                    <nav className="Header__nav">
                        <div className="Header__hamburger">
                            <a className="Header__nav__item--icon" href="#">
                                Menu
                            </a>
                        </div>
                        <ul className="Header__nav__list">
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    About us
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Services
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Clients
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Case studies
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Process
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Careers
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a className="Header__nav__item--link" href="#">
                                    Contact
                                </a>
                            </li>
                            <li className="Header__nav__item">
                                <a
                                    className="Header__nav__item--link Header__nav__item--link--cat"
                                    href="#"
                                >
                                    Estimate project
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <div className="Header__title">
                        <h1 className="Header__title--main">Hallo Berlin!</h1>
                        <p className="Header__title--secondary">
                            Let’s partner in building an outstanding web &
                            mobile applications!
                        </p>
                    </div>
                </div>
                <div className="container">
                    <FlightInfo />
                </div>
            </header>
        );
    }
}

export default Header;
