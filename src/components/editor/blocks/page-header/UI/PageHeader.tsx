import React, {FC} from 'react';

interface PageHeaderProps{
    client: string;
    headlines: string[];
    backgroundImage: string;

}

const PageHeader: FC<PageHeaderProps> = ({client, headlines, backgroundImage}) => {
    return (
        <section id="featured-media">
            <div className="vid-cover" style={{backgroundImage: "url("+backgroundImage+")"}}>
                <div className="image-darken"></div>
            </div>
            <div className="featured-media-overlay" style={{position: "absolute", top: "28vh", left: "20vw", zIndex: 9, color: "#fff"}}>
                <div className="client-date"
                     style={{fontFamily: "'Averta Bold',Open Sans Bold,Open Sans Hebrew Semibold,Noto Sans SC Bold,Helvetica Neue,sans-serif", fontSize: "23px", marginTop: "40px", marginLeft: "35px", direction: "ltr"}}>
                    <span className="client">{client}</span><span className="location"></span>
                </div>

                <div className="headline" style={{transform: "skewX(20deg)", paddingTop: "30px"}}>
                    {headlines && headlines.map(headline =>
                        <h1>{headline}</h1>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeaderProps;