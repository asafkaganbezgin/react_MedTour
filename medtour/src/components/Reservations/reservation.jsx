import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

var tourData;

class Reservation extends React.Component {
    constructor() {
        super();
        this.state = {
            serverResponse: ""
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const res = await axios.get(
            "http://localhost:3001/api/tourData/user/5dee9f7b53e5670d6075500d"
        );
        const { data } = await res;
        this.setState({ serverResponse: data });
    }

    render() {
        var dataServer = this.state.serverResponse;
        {
            alert(JSON.stringify(this.state.serverResponse));
            console.log("[" + dataServer + "]");
        }
        return <div>{JSON.stringify(this.state.serverResponse)}</div>;
    }
}

export default Reservation;
