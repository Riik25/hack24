import React from 'react';
import TypedEffect from './TypedEffect';
import './Main.css';

function Main(){
    return (
        <main>
            <section
            className="first">
                <div
                className="leftsection">
                    <img src="bg.png"
                    alt="background" />

                </div>
                <div
                className="rightsection">
                    <h>Welcome to</h>
                    <span
                    id="White">Student Hub</span>
                    <div>Accelerate your</div>
                    <TypedEffect />
                </div>
            </section>
            <hr />
            <section
            className="secondsection">
                <span
                className="grey">What I have done so far</span>
                <h1>Work experiences</h1>
                <div className="box">
                    <div
                    className="verrtical"></div>
                    <div
                    className="vertical"></div>
                    <div
                    className="vertical"></div>
                    <div
                    className="vertical"></div>
                </div>
            </section>
        </main>
    );
}