import React from 'react';

const OverlayButtons = () => {
    return (
        <>
            <div id="menu-language-toggle" className="white">
                <ul>
                    <li className="nav__item current"><a href="datsun-workout.html">EN</a></li>
                    <li className="divider"> \</li>
                    <li className="nav__item "><a href="../ru/work/datsun-workout.html">RU</a></li>
                </ul>
            </div>
            <div id="logo-container">
                <div id="logo" className="white-logo">
                    <a href="../index.htm" className="tbwa-homepage" id="tbwa-logo">
                        <img src="../assets/about/tbwa_logo_white.png" />
                    </a>
                </div>
            </div>
            <div id="menu-button" className="burger-white">
                <svg id="hamburger-top-svg" className="hamburger-svg" viewBox="0 0 40 6" xmlns="http://www.w3.org/2000/svg" >
                    <polygon points="0,0 40,0 40,6 0,6"></polygon>
                </svg>
                <svg id="hamburger-bottom-svg" className="hamburger-svg" viewBox="0 0 40 6" xmlns="http://www.w3.org/2000/svg" >
                    <polygon points="0,0 40,0 40,6 0,6"></polygon>
                </svg>
            </div>
        </>
    );
};

export default OverlayButtons;