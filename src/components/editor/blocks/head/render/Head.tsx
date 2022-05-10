import React, {FC} from 'react';

interface HeadProps {

}

const Head: FC<HeadProps> = () => {
    return (
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <title>Street Athletics. Datsun Workout! - TBWA Moscow </title>

            <meta name="description"
                  content="TBWA is The Disruption® Company. Named Adweek’s 2018 Global Agency of the Year, our collective has 11,300 creative minds across 270 offices in 95 countries."/>


            <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon"/>
            <meta property="og:url" content="https://www.tbwa.ru/work/datsun-workout"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="TBWA"/>
            <meta property="og:description"
                  content="Datsun &quot;Street Athletics. Datsun Workout!&quot; "/>
            <meta property="og:image"
                  content="https://www.tbwa.ru/assets/work/DATSUN_ONDO_FITNESS_main_img.jpg"/>

            <link href="../vendor/video.js/video-js.css" rel="stylesheet"/>
            <link href="../vendor/video.js/videojs-playlist-ui.vertical.css"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="../styles/main.min.css"/>

                <script
                    src="../ajax/libs/jquery/1.9.1/jquery.min.js"></script>

                <script
                    src="../ajax/libs/gsap/1.14.2/TweenMax.min.js"></script>
                <script
                    src="../ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>

                <script
                    src="../ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>

                <script src="../api/player.js"></script>

                <script src="../vendor/video.js/videojs.min.js"></script>
                <script
                    src="../vendor/video.js/videojs-playlist.min.js"></script>
                <script
                    src="../vendor/video.js/videojs-playlist-ui.min.js"></script>
                <script type="text/javascript"
                        src="../js/global.min.js"></script>

                <script>
                    var siteUrl = "https://www.tbwa.ru/";
                </script>

                <script type="text/javascript"
                        src="../js/article.min.js"></script>
                <script type="text/javascript"
                        src="../js/article-video.min.js"></script>

        </head>
);
};

export default Head;