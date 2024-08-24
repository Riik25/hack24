import React from 'react';
import './Header.css';

function Header(){
    return (
        <header>
            <nav>
                <div className="left">
                    <ul>
                        <li><a
                        href="/">Home</a></li>
                        <li><a
                        href="/">About us</a></li>
                        <li><a
                        href="/">Contact us</a></li>
                        <li><a
                        href="/">Services</a></li>
                        <li><a href="/"
                        id="loginbutton">Login</a></li>
                    </ul>
                </div>
                <div className="right">Get Your Projects</div>
            </nav>
        </header>
    );
}