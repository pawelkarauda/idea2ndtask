import React from "react";
import Logo from "../images/logo_im_dark.png";
import FlightInfo from "./FlightInfo";

class Header extends React.Component {
    burgerToggle() {
        let menu = document.querySelector(".Header__nav__mobile");
        let hamburger = document.querySelector(".Header__nav__item--icon");
        if (hamburger.innerText === "Menu") {
            hamburger.innerText = "Zamknij";
        } else {
            hamburger.innerText = "Menu";
        }

        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    }

    render() {
        return (
            <header className="Header">
                <div className="Header__menu container">
                    <div className="Header__brand">
                        <img src={Logo} alt={"logo"} />
                    </div>

                    <nav className="Header__nav">
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

                        <ul className="Header__nav__mobile">
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

                        <div className="Header__hamburger">
                            <a
                                onClick={this.burgerToggle}
                                className="Header__nav__item--icon"
                                href="#"
                            >
                                Menu
                            </a>
                        </div>
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
