import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="row grid-container" id="footer-menus">
                <div className="columns large-3 large-offset-1 medium-10 medium-offset-2 small-14 small-offset-0 mobile-hide"
                     id="footer-logo-container">
                    <a href="../index.htm" id="footer-logo">
                        <img src="../assets/about/footer_logo.png" />
                    </a>
                </div>
                <div className="columns large-2 large-offset-1 medium-7 medium-offset-0 small-0 end">
                    <div id="footer-main-menu">
                        <div id="main-menu">
                            <ul>
                                <li className="menu-label"><h4><a href="../disruption.html"><span>Disruption<sup>®</sup></span></a>
                                </h4></li>
                                <li className="menu-label"><h4><a href="../work.html"
                                                                  className="active"><span>Work</span></a></h4></li>
                                <li className="menu-label"><h4><a href="../our-team.html"><span>Our team</span></a></h4>
                                </li>
                                <li className="menu-label"><h4><a href="../about.html"><span>About</span></a></h4></li>
                            </ul>
                        </div>
                    </div>
                    <div id="footer-secondary-menu">
                        <div id="secondary-menu">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="columns large-6 large-offset-0 medium-14 medium-offset-0 small-14">
                    <div className="row">
                        <div className="columns large-7 large-offset-0">
                            <span className="block inquiries">
                                <h3></h3>
                                <p className="name small"></p>
                                <a className="email" href="mailto:"></a>
                            </span>
                            <span className="block inquiries">
                                <h3></h3>
                                <p className="name small"></p>
                                <a className="email" href="mailto:"></a>
                            </span>
                        </div>
                        <div className="columns large-6 large-offset-1">
                            <span className="block contact">
                                <p className="small">
                                    <p>
                                        <strong>HR</strong>
                                        <br />
                                        <a target="_blank" rel="noreferrer" data-behavior="truncate"
                                           href="mailto:rus-hr@tbwa.ru">rus-hr@tbwa.ru</a>
                                    </p>
                                    <p></p>
                                    <p><strong>Business affaires</strong></p>
                                    <p><a href="mailto:hello@tbwa.ru">hello@tbwa.ru</a></p>
                                    <p></p>
                                    <p><a href="mailto:ekaterina.volnistova@tbwa.ru"></a></p>
                                    <p><a target="_blank" rel="noreferrer" data-behavior="truncate"
                                          href="mailto:nadezhda.feliseeva@tbwa.ru"></a></p>
                                    <p>Paveletskaya square, 2, p. 1, floor 12</p>
                                    <p>115054, Moscow, Russia</p>
                                    <a className="phone" href="tel:+7 (495) 544-59-49">+7 (495) 544-59-49</a>
                                    <a className="email" href="mailto:"></a>
                                </p>
                                </span>
                        </div>
                    </div>
                </div>
                <div className="columns large-6 large-offset-0 medium-14 medium-offset-0 end">
                    <div className="row">
                        <div className="columns large-6 large-offset-8"></div>
                    </div>
                </div>
                <div id="footer-language-toggle">
                    <ul>
                        <li className="nav__item current"><a href="../index.htm">EN</a></li>
                        <li className="divider"> \</li>
                        <li className="nav__item "><a href="../ru/index.htm">RU</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid-container" id="legal">
                <div className="row">
                    <div className="columns large-offset-1 large-6">
                        <span>All rights reserved</span>
                    </div>
                    <div className="columns large-6 end medium-14 medium-offset-0">
                        <a href="../terms-of-service.html">Terms Of Service</a> <a href="../privacy-policy.html">Privacy
                        Policy</a> <a href="../cookie-policy.html">Cookie Policy</a>
                        <a href="https://tbwa.com" target="_blank">TBWA\Worldwide</a>
                    </div>
                </div>
            </div>
        </footer>
);
};

export default Footer;