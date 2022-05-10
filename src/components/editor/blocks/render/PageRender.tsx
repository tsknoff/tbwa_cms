import React, {FC} from 'react';
import ReactDOMServer from "react-dom/server";
import FeaturedMedia from "../featured-media/render/FeaturedMedia";
import Paper from "@mui/material/Paper";
import BlockHeader from "../BlockHeader";
import Grid from "@mui/material/Grid";
import MyTextField from "../../UI/MyTextField";
import MySwitch from "../../UI/MySwitch";
import Head from "../head/render/Head";
import ArticleContent from "../article-content/render/ArticleContent";
import MenuContainer from "../menu-container/render/MenuContainer";
import Footer from "../footer/render/Footer";
import OverlayButtons from "../overlay-buttons/render/OverlayButtons";


const PageRender = (blockName: string, blockProps?: any) => {

    let blockToRender

    switch (blockName) {
        case 'head':
            blockToRender = Head(blockProps) as JSX.Element
            return ReactDOMServer.renderToStaticMarkup(blockToRender)
            break;
        case 'menu-container':
            blockToRender = MenuContainer() as JSX.Element
            return ReactDOMServer.renderToStaticMarkup(blockToRender)
            break;
        case 'overlay-buttons':
            blockToRender = OverlayButtons() as JSX.Element
            return ReactDOMServer.renderToStaticMarkup(blockToRender)
            break;
        case 'article-content':
            blockToRender = ArticleContent(blockProps) as JSX.Element
            return ReactDOMServer.renderToStaticMarkup(blockToRender)
            break;
        case 'featured-media':
            blockToRender = FeaturedMedia(blockProps) as JSX.Element
            return ReactDOMServer.renderToStaticMarkup(blockToRender)
            break;
        case 'footer':
            blockToRender = Footer() as JSX.Element
            return ReactDOMServer.renderToStaticMarkup(blockToRender)
            break;
        default:
            return ""

    }

};

export default PageRender