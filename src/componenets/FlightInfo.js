import React from "react";
import Berlin from "../images/fi-place-berlin.png";
import Aeroplane from "../images/aeroplane.png";

export default () => {
    return <div className="Flight">
            <div className="Flight__left">
                <div className="Flight--image">
                    <img src={Berlin} alt="Nerlin" />
                </div>
                <div className="Flight--place">
                    <p> BER </p>
                    <p className="Flight--margin"> WAW </p>
                    <img src={Aeroplane} alt="" />
                </div>
                <div className="Flight--hours">
                    <p> 10.00 AM </p>
                    <p className="Flight--margin"> 10.00 AM </p>
                    <p> Flight 1h30m </p>
                </div>
            </div>
            <div className="Flight__right">
                <p>
                    We share a common European values - <b>
                        a quality and details oriented approach
                    </b>. The same time zone let us communicate within regular working hours. 
                    <b> Cheap and short flight enables easy face to face meetings and workshops. </b>
                </p>
            </div>
        </div>;
};
