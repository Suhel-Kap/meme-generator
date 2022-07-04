import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={require("../images/logo.png")} alt="logo" />
                <h1>Meme Generator</h1>
            </div>
        </header>
    );
}
