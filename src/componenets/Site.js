import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlightInfo from "./FlightInfo";
import AboutInfo from "./AboutInfo";
import CallToAction from "./CallToAction";

export default () => {
    return (
        <div>
            <Header />

            <AboutInfo />
            <CallToAction />
            {/*<Footer /> */}
        </div>
    );
};
