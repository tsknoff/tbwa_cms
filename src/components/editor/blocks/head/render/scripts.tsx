import React from 'react';

const Scripts = () => {
    return "<style type=\"text/css\">\n" +
        "                    #logo.white-logo a {\n" +
        "                    background: url(../assets/about/tbwa_logo_white.png) 0 0/contain no-repeat;\n" +
        "                }\n" +
        "\n" +
        "                    #logo.black-logo a {\n" +
        "                    background: url(../assets/about/tbwa_logo_black.png) 0 0/contain no-repeat;\n" +
        "                }\n" +
        "\n" +
        "                    #logo a img {\n" +
        "                    height: 30px;\n" +
        "                    width: auto;\n" +
        "                    opacity: 0;\n" +
        "                }\n" +
        "\n" +
        "                    @media screen and (max-width: 64em) {\n" +
        "                    #logo.black - logo a {\n" +
        "                    height: 20px;\n" +
        "                }\n" +
        "\n" +
        "                    #logo.white-logo a {\n" +
        "                    height: 20px;\n" +
        "                    background: url(../assets/about/tbwa_logo_black.png) 0 0/contain no-repeat;\n" +
        "                }\n" +
        "\n" +
        "                    #logo a img {\n" +
        "                    height: 20px;\n" +
        "                }\n" +
        "                }\n" +
        "                </style>\n" +
        "\n" +
        "                <div id='js_cookieNotice' className='cookieNotice'>\n" +
        "                    <div className='cookieNotice__container'>\n" +
        "                        <p>\n" +
        "                            This website uses cookies to improve your\n" +
        "                            experience.\n" +
        "                        </p>\n" +
        "                        <p>\n" +
        "                            <a id='js_cookieNotice_accept'\n" +
        "                               href='#'>Accept</a>\n" +
        "                            <a id='js_cookieNotice_refuse'\n" +
        "                               href='#'>Refuse</a>\n" +
        "                            <a href='../privacy-policy.html'>Privacy\n" +
        "                                Policy</a>\n" +
        "                        </p>\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <style type='text/css'>\n" +
        "                    .cookieNotice {\n" +
        "                    background: #000;\n" +
        "                    display: none;\n" +
        "                    font-family: \"Averta Bold\", Open Sans Bold, Open Sans Hebrew Semibold, Helvetica Neue, sans-serif;\n" +
        "                    font-weight: 400;\n" +
        "                    font-size: 1em;\n" +
        "                    line-height: 120%;\n" +
        "                    left: 0;\n" +
        "                    padding: 30px 60px 30px 0;\n" +
        "                    position: fixed;\n" +
        "                    right: 0;\n" +
        "                    bottom: 0;\n" +
        "                    width: 100%;\n" +
        "                    s\n" +
        "                    color: #fff;\n" +
        "                    z-index: 100;\n" +
        "                }\n" +
        "\n" +
        "                    .cookieNotice__container {\n" +
        "                    margin: 0 auto;\n" +
        "                    width: 90%;\n" +
        "                }\n" +
        "\n" +
        "                    .cookieNotice__container * {\n" +
        "                    margin: 0 1em;\n" +
        "                    float: left;\n" +
        "                }\n" +
        "\n" +
        "                    .cookieNotice__container a {\n" +
        "                    color: #fecc00;\n" +
        "                }\n" +
        "\n" +
        "                    .cookieNotice__container a h4 {\n" +
        "                    font - size: 1.2rem;\n" +
        "                }\n" +
        "\n" +
        "                    .cookieNotice p {\n" +
        "                    color: #fff;\n" +
        "                }\n" +
        "\n" +
        "\n" +
        "                </style>\n" +
        "\n" +
        "                <script type='text/javascript'>\n" +
        "                    function facebookLogout() {\n" +
        "                    FB.getLoginStatus(function (response) {\n" +
        "                        if (response.status === 'connected') {\n" +
        "                            FB.logout(function (response) {\n" +
        "                                console.log(response)\n" +
        "                            });\n" +
        "                        }\n" +
        "                    });\n" +
        "                }\n" +
        "\n" +
        "                    var elNotice = document.getElementById('js_cookieNotice')\n" +
        "                    var elAccept = document.getElementById('js_cookieNotice_accept')\n" +
        "                    var elRefuse = document.getElementById('js_cookieNotice_refuse')\n" +
        "\n" +
        "\n" +
        "                    function setCookie(name, value, days\n" +
        "                    ) {\n" +
        "                    var expiry = new Date()\n" +
        "                    expiry.setTime(expiry.getTime() + (days * 24 * 60 * 60 * 1000))\n" +
        "                    var expires = 'expires=' + expiry.toUTCString()\n" +
        "                    document.cookie = name + '=' + value + ';' + expires + ';' + 'path=/'\n" +
        "                }\n" +
        "\n" +
        "                    function getCookie(name) {\n" +
        "                    var name = name + '='\n" +
        "                    var decodedCookie = decodeURIComponent(document.cookie)\n" +
        "                    var ca = decodedCookie.split(';')\n" +
        "\n" +
        "                    for (var i = 0; i < ca.length; i++) {\n" +
        "                    var c = ca[i]\n" +
        "\n" +
        "                    while (c.charAt(0) == ' ') {\n" +
        "                    c = c.substring(1)\n" +
        "                }\n" +
        "\n" +
        "                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length)\n" +
        "                    //if (c.indexOf(name) == 0) return true\n" +
        "                }\n" +
        "\n" +
        "                    return false\n" +
        "                }\n" +
        "\n" +
        "                    function cookieIsSet() {\n" +
        "                    return getCookie('cookieConsent')\n" +
        "                }\n" +
        "\n" +
        "                    function analyticsIsSet() {\n" +
        "                    return getCookie('acceptAnalytics')\n" +
        "                }\n" +
        "\n" +
        "                    function socialIsSet() {\n" +
        "                    return getCookie('acceptSocial')\n" +
        "                }\n" +
        "\n" +
        "                    function showNotice() {\n" +
        "                    elNotice.style.display = 'block'\n" +
        "                }\n" +
        "\n" +
        "                    function hideNotice() {\n" +
        "                    elNotice.style.display = 'none'\n" +
        "                }\n" +
        "\n" +
        "                    //this sets all cookies, recommended settings\n" +
        "\n" +
        "                    function setAcceptCookie() {\n" +
        "                    setCookie('cookieConsent', '1', 365);\n" +
        "                    setAcceptAnalytics();\n" +
        "                    setAcceptSocial();\n" +
        "\n" +
        "                }\n" +
        "\n" +
        "                    function setAcceptAnalytics() {\n" +
        "                    setCookie('acceptAnalytics', '1', 365)\n" +
        "                }\n" +
        "\n" +
        "                    function setAcceptSocial() {\n" +
        "                    setCookie('acceptSocial', '1', 365)\n" +
        "                }\n" +
        "\n" +
        "                    function vimeoOptOut() {\n" +
        "                    //remove vimeo cookies\n" +
        "                    setCookie('player', '', -1);\n" +
        "\n" +
        "                }\n" +
        "\n" +
        "                    function eraseCookieFromAllPaths(name) {\n" +
        "                    // This function will attempt to remove a cookie from all paths.\n" +
        "                    var pathBits = location.pathname.split('/');\n" +
        "                    var pathCurrent = ' path=';\n" +
        "\n" +
        "                    // do a simple pathless delete first.\n" +
        "                    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';\n" +
        "\n" +
        "                    for (var i = 0; i < pathBits.length; i++) {\n" +
        "                    pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];\n" +
        "                    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';\n" +
        "                }\n" +
        "                }\n" +
        "\n" +
        "                    function loadExternalScripts() {\n" +
        "                    //get craft sections\n" +
        "\n" +
        "\n" +
        "                    //check if anaylytics cookies are accepted\n" +
        "\n" +
        "                    var fSeg = 'work';\n" +
        "                    var lSeg = 'datsun-workout';\n" +
        "                    var workk = 'https://www.tbwa.ru/work'\n" +
        "                    if (document.cookie.split(';').filter((item) => item.includes('acceptAnalytics=1')).length) {\n" +
        "\n" +
        "\n" +
        "                    //     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
        "                    //       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n" +
        "                    //       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n" +
        "                    //       })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n" +
        "\n" +
        "                    //     ga('create', '', 'auto');\n" +
        "                    //     ga('set', 'anonymizeIp', true);\n" +
        "                    //     ga('send', 'pageview');\n" +
        "\n" +
        "\n" +
        "                    // var head  = document.getElementsByTagName('head')[0];\n" +
        "                    // var gtagscript  = document.createElement('script');\n" +
        "                    // gtagscript.src= \"https://www.googletagmanager.com/gtag/js?id=UA-4626987-2\";\n" +
        "                    // gtagscript.async = true;\n" +
        "                    // head.appendChild(gtagscript);\n" +
        "\n" +
        "                    // window.dataLayer = window.dataLayer || [];\n" +
        "                    // function gtag(){dataLayer.push(arguments);}\n" +
        "                    // gtag('js', new Date());\n" +
        "                    // gtag('config', 'UA-4626987-2');\n" +
        "\n" +
        "                    (function (i, s, o, g, r, a, m) {\n" +
        "                    i['GoogleAnalyticsObject'] = r;\n" +
        "                    i[r] = i[r] || function () {\n" +
        "                    (i[r].q = i[r].q || []).push(arguments)\n" +
        "                }, i[r].l = 1 * new Date();\n" +
        "                    a = s.createElement(o),\n" +
        "                    m = s.getElementsByTagName(o)[0];\n" +
        "                    a.async = 1;\n" +
        "                    a.src = g;\n" +
        "                    m.parentNode.insertBefore(a, m)\n" +
        "                })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n" +
        "\n" +
        "                    ga('create', '', 'auto');\n" +
        "                    ga('set', 'anonymizeIp', true);\n" +
        "                    ga('send', 'pageview');\n" +
        "\n" +
        "                } else {\n" +
        "\n" +
        "                }\n" +
        "                    //end analytics\n" +
        "\n" +
        "                    //check if social cookies are accepted\n" +
        "                    if (document.cookie.split(';').filter((item) => item.includes('acceptSocial=1')).length) {\n" +
        "                    // console.log(socialIsSet())\n" +
        "                    //load FB\n" +
        "\n" +
        "                    //load Twitter\n" +
        "                    window.twttr = (function (d, s, id) {\n" +
        "                    var js, fjs = d.getElementsByTagName(s)[0],\n" +
        "                    t = window.twttr || {};\n" +
        "                    if (d.getElementById(id)) return t;\n" +
        "                    js = d.createElement(s);\n" +
        "                    js.id = id;\n" +
        "                    js.src = \"https://platform.twitter.com/widgets.js\";\n" +
        "                    fjs.parentNode.insertBefore(js, fjs);\n" +
        "\n" +
        "                    t._e = [];\n" +
        "                    t.ready = function (f) {\n" +
        "                    t._e.push(f);\n" +
        "                };\n" +
        "\n" +
        "                    return t;\n" +
        "                }(document, \"script\", \"twitter-wjs\"));\n" +
        "                    //end twitter\n" +
        "\n" +
        "\n" +
        "                    //load article-video\n" +
        "                    articleVideo.init();\n" +
        "\n" +
        "                    //end vimeo\n" +
        "\n" +
        "                }\n" +
        "                    //end of social\n" +
        "\n" +
        "                    // convert data-src to src for iframes\n" +
        "                    var externalContents = document.querySelectorAll('[iframe-src]');\n" +
        "                    if (externalContents[0]) {\n" +
        "                    for (var i = 0; i < externalContents.length; i++) {\n" +
        "                    var iframe = document.createElement('iframe');\n" +
        "                    iframe.src = externalContents[i].getAttribute('iframe-src');\n" +
        "\n" +
        "                    iframe.frameborder = externalContents[i].getAttribute('frameborder');\n" +
        "                    iframe.allowfullscreen = externalContents[i].getAttribute('allowfullscreen');\n" +
        "                    // TODO convert more attribute or find better way to append all setted attributes and class to that element\n" +
        "                    externalContents[i].parentNode.replaceWith(iframe, externalContents[i]);\n" +
        "                }\n" +
        "                }\n" +
        "\n" +
        "                    // Custom content\n" +
        "\n" +
        "\n" +
        "                }\n" +
        "\n" +
        "                    window.onload = function () {\n" +
        "\n" +
        "\n" +
        "                    //console all cookies , remove after testing\n" +
        "                    var cookie = document.cookie.split(';');\n" +
        "                    for (var i = 0; i < cookie.length; i++) {\n" +
        "\n" +
        "                    var chip = cookie[i],\n" +
        "                    entry = chip.split(\"=\"),\n" +
        "                    name = entry[0];\n" +
        "\n" +
        "                    //console.log(chip, entry, name)\n" +
        "                }\n" +
        "\n" +
        "                    if (!cookieIsSet()) {\n" +
        "                    //console.log('cookie not set')\n" +
        "                    //console.log(cookieIsSet())\n" +
        "                    setTimeout(function () {\n" +
        "                    showNotice()\n" +
        "                }, 2000);\n" +
        "                } else {\n" +
        "\n" +
        "                    //console.log('cookkie is set')\n" +
        "                    loadExternalScripts();\n" +
        "                    //console.log(cookieIsSet())\n" +
        "                }\n" +
        "\n" +
        "                    elAccept.onclick = elAccept.ontouch = function (e) {\n" +
        "                    e.preventDefault();\n" +
        "                    hideNotice();\n" +
        "                    setAcceptCookie();\n" +
        "                    loadExternalScripts();\n" +
        "                }\n" +
        "\n" +
        "                    if (elRefuse) {\n" +
        "                    elRefuse.onclick = elRefuse.ontouch = function (e) {\n" +
        "                    e.preventDefault();\n" +
        "                    hideNotice();\n" +
        "                }\n" +
        "                }\n" +
        "\n" +
        "\n" +
        "                    //check for Analytics settings\n" +
        "                    var analyticsSelector = document.getElementById('gdrp-analytics-selector');\n" +
        "                    if (typeof (analyticsSelector) != 'undefined' && analyticsSelector != null) {\n" +
        "\n" +
        "                    if (document.cookie.split(';').filter((item) => item.includes('acceptAnalytics=1')).length) {\n" +
        "                    $('input#checkboxAnalytics').prop(\"checked\", true);\n" +
        "                } else {\n" +
        "                    $('input#checkboxAnalytics').prop(\"checked\", false);\n" +
        "                }\n" +
        "                }\n" +
        "                    //end analytics settings check\n" +
        "\n" +
        "                    //check for Analytics settings\n" +
        "                    var socialSelector = document.getElementById('gdrp-social-selector');\n" +
        "                    if (typeof (socialSelector) != 'undefined' && socialSelector != null) {\n" +
        "\n" +
        "                    if (document.cookie.split(';').filter((item) => item.includes('acceptSocial=1')).length) {\n" +
        "                    $('input#checkboxSocial').prop(\"checked\", true);\n" +
        "                } else {\n" +
        "                    $('input#checkboxSocial').prop(\"checked\", false);\n" +
        "                }\n" +
        "                }\n" +
        "                    //end analytics settings check\n" +
        "\n" +
        "                    $('input#checkboxAnalytics').on('change', function () {\n" +
        "                    if (this.checked) {\n" +
        "                    setCookie('acceptAnalytics', '1', 365);\n" +
        "                    setAcceptAnalytics();\n" +
        "                    loadExternalScripts();\n" +
        "\n" +
        "                } else {\n" +
        "                    setCookie('acceptAnalytics', '0', 365);\n" +
        "                    gaOptout();\n" +
        "                }\n" +
        "                })\n" +
        "\n" +
        "                    $('input#checkboxSocial').on('change', function () {\n" +
        "                    if (this.checked) {\n" +
        "                    setCookie('acceptSocial', '1', 365)\n" +
        "                    setAcceptAnalytics();\n" +
        "                    loadExternalScripts();\n" +
        "\n" +
        "                } else {\n" +
        "                    setCookie('acceptSocial', '0', 365)\n" +
        "                    facebookLogout();\n" +
        "                    vimeoOptOut();\n" +
        "                    //gaOptout();\n" +
        "                }\n" +
        "                })\n" +
        "                    // FB.logout(function () { document.location.reload(); });\n" +
        "                }\n" +
        "                </script>"
};

export default Scripts;