import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return <div className="nav">
        {/* <a href="/">Home</a> // React를 죽이고, 새로고침을 하게됨.
        <a href="/about">About</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;