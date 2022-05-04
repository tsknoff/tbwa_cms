import React, {FC} from 'react';
import {TBWA_ASSETS_URL, TBWA_SITE_URL} from "../../../../../services/PageService";
import {IArticleContentProps} from "../model/IArticleContent";

const ArticleContent: FC<IArticleContentProps> =
    ({
         bodyTitle,
         bodyText,
         awardsTitle,
         awardsBody,
         share,
         media,
         labelMoreWorks,
    }) => {
    return (
        <section id="article-content">
            <div className="grid-container">
                <div className="row">
                    <div className="small-offset-2 xlarge-5 large-6 medium-8 small-11 columns">
                        <div id="main-copy">
                            <div className="blurb">
                                {bodyTitle}
                            </div>
                            <div className="article-copy">
                                {bodyText}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="awards-share">
                    <div className="large-offset-1 small-offset-2 large-1 small-2 columns">
                        <h2>{awardsTitle}</h2>
                    </div>
                    <div id="awards"
                         className="xlarge-3 large-4 medium-10 small-8 small-offset-1 medium-offset-0 columns end">
                        <div id="award-copy">
                            {awardsBody && awardsBody.map(award =>
                                <p className="award-desc">{award}</p>
                            )}
                        </div>
                    </div>
                    {share &&
                        <>
                            <div className="large-1 large-offset-1 small-2 small-offset-2 columns article-share" >
                                <h2>Share</h2>
                            </div>
                            <div className="large-4 small-8 small-offset-1 medium-offset-0 columns end article-share" >
                                <a href="https://www.tbwa.ru/ru/work/datsun-workout" className="twitter-share">Share on Twitter</a>
                            </div>
                        </>
                    }
                </div>

                <div className="row">
                    <div className=" ">
                        {/*<div className="vid-container ">*/}
                        {/*    <div className="video-wrapper">*/}
                        {/*        <iframe className="article-video" style={{*/}
                        {/*            dataUrl: "", frameBorder: "0", */}
                        {/*            webkitallowfullscreen: "", mozallowfullscreen: "", allowFullScreen: "", */}
                        {/*            height: "auto", width: "100%;"}}*/}
                        {/*                >*/}

                        {/*        </iframe>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    {media &&
                        <div className=" ">
                            {media && media.map(content =>
                                <div className="img-container " key={content.id}>
                                    <img alt="asset" src={TBWA_ASSETS_URL + content.src} />
                                </div>
                            )}
                        </div>
                    }
                </div>
                <div className="row">
                    <div className="columns large-14" id="back-to-parent">
                        <a href={TBWA_SITE_URL + labelMoreWorks.src }>{labelMoreWorks.label}</a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ArticleContent;