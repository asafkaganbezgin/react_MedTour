import React, { Component } from "react";
import ReactDOM from "react-dom";
import LandingNav from "../LandingNav";
import Footer from "../Footer";
import Reservation from "./reservation";
import "./reservations.css";

class Reservations extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <Reservation />
                <Footer />
            </div>
        );
    }
}

export default Reservations;
