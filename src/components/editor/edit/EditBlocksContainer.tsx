import React, {useState} from 'react';
import UIArticleContent from "../blocks/article-content/UI/UIArticleContent";
import MyButton from "../UI/MyButton";
import PageRender from "../blocks/render/PageRender";
import Head from "../blocks/head/render/Head";
import ImagesUploader from "../image-uploader/ImagesUploader";


export interface IBlock {
    id: string;
    blockName: string;
    data: {}
}
const EditBlocksContainer = () => {

    const[blocks, setBlocks] = useState([
        { id: "1", blockName: "article-content", data: {}},
        { id: "2", blockName: "Footer", data: {}},
    ] as IBlock[])

    const savePage = () =>{
        let pageSourceHTML = '';
        blocks.map( block => {
            pageSourceHTML += PageRender(block.blockName, block.data)
            console.log(pageSourceHTML)
        })

    }


    return (
        <div style={{paddingTop: "25px"}}>
            <UIArticleContent id={"1"} setBlocks={setBlocks} blocks={blocks} />
            <MyButton value={"Save changes"} label={"save"} onClick={savePage}/>
        </div>
    );
};


export default EditBlocksContainer;