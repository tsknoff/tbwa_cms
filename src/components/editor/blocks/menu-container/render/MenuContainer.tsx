import React from 'react';

const MenuContainer = () => {
    return (
        <div id="menu-container">
            <div id="menu-dark-bg"></div>
            <div id="menu-slash-bg">
                <div id="menus">
                    <div id="main-menu">
                        <ul>
                            <li className="menu-label"><a href="../disruption.html"><span>Disruption<sup>®</sup></span></a>
                            </li>
                            <li className="menu-label"><a href="../work.html" className="active"><span>Work</span></a>
                            </li>
                            <li className="menu-label"><a href="../our-team.html"><span>Our team</span></a></li>
                            <li className="menu-label"><a href="../about.html"><span>About</span></a></li>
                        </ul>
                    </div>
                    <div id="sub-menu">
                        <div id="inner-sub-menu">
                            <div id="secondary-menu-container">
                                <div id="secondary-menu">
                                    <ul></ul>
                                </div>
                            </div>

                            <div id="contact-info-container">
                                <div id="contact-info">
                                    <h3></h3>
                                    <p className="name"></p>
                                    <a className="email" href="mailto:"></a>
                                    <h3></h3>
                                    <p className="name"></p>
                                    <a className="email" href="mailto:"></a>
                                </div>
                                <div id="office-address">
                                    <h3></h3>
                                    <span className="address">
                                        <p><strong>HR</strong><br/><a target="_blank" rel="noreferrer" data-behavior="truncate"
                                                              href="mailto:rus-hr@tbwa.ru">rus-hr@tbwa.ru</a></p>
                                        <p>ᅠ</p>
                                        <p><strong>Business affaires</strong>ᅠ</p>
                                        <p><a href="mailto:hello@tbwa.ru">hello@tbwa.ru</a></p>
                                        <p>ᅠ</p>
                                        <p><a href="mailto:ekaterina.volnistova@tbwa.ru"></a></p>
                                        <p><a target="_blank" rel="noreferrer" data-behavior="truncate"
                                              href="mailto:nadezhda.feliseeva@tbwa.ru"></a></p>
                                        <p>Paveletskaya square, 2, p. 1, floor 12</p>
                                        <p>115054, Moscow, Russia</p><br/>
                                        <a className="phone" href="tel:+7 (495) 544-59-49">+7 (495) 544-59-49</a>
                                    </span><br />
                                    <a className="email" href="mailto:"></a>
                                </div>
                            </div>
                        </div>
                        <div id="social-icons">
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default MenuContainer;