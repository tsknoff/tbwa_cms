import React from 'react';
import FeaturedMedia from "./featured-media/render/FeaturedMedia";
import ReactDOMServer from "react-dom/server";

const PageRender = () => {
    let element = FeaturedMedia({client: "Nissan", headlines: ["123","123"], backgroundImage: "123123123123123213"}) as JSX.Element;
    let rendered_element = ReactDOMServer.renderToStaticMarkup(element);
    return (
        <div>

        </div>
    );
};

export default PageRender;