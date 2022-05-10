import React, {FC, useState} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BlockHeader from "../../BlockHeader";
import MyTextField from "../../../UI/MyTextField";
import MySwitch from "../../../UI/MySwitch";
import {IArticleContentProps} from "../model/IArticleContent";
import {IBlock} from "../../../edit/EditBlocksContainer";
import ImagesUploader from "../../../image-uploader/ImagesUploader";
import Typography from "@mui/material/Typography";

export interface IBlockData{
    id: string;
    setBlocks: any;
    blocks: IBlock[];
}
const UIArticleContent:FC<IBlockData> = ({id, blocks, setBlocks}) => {
    const [blockData, setBlockData] = useState({} as IArticleContentProps)

    function setBodyTitle(bodyTitle: string){
        setBlockData({...blockData, bodyTitle: bodyTitle})
        const filteredBlocks: IBlock[] = blocks.filter(b => b.id !== id)
        filteredBlocks.push({id: id, blockName: "article-content", data: blockData})
        setBlocks(filteredBlocks)
        console.log(blocks)

    }
    function setBodyText(bodyText: string){
        setBlockData({...blockData, bodyText: bodyText})
        const filteredBlocks: IBlock[] = blocks.filter(b => b.id !== id)
        filteredBlocks.push({id: id, blockName: "article-content", data: blockData})
        setBlocks(filteredBlocks)

    }
    function setAwards(awards: string[]){
        setBlockData({...blockData, awardsBody: awards})
        const filteredBlocks: IBlock[] = blocks.filter(b => b.id !== id)
        filteredBlocks.push({id: id, blockName: "article-content", data: blockData})
        setBlocks(filteredBlocks)

    }
    function setShare(share: boolean){
        setBlockData({...blockData, share: share})
        const filteredBlocks: IBlock[] = blocks.filter(b => b.id !== id)
        filteredBlocks.push({id: id, blockName: "article-content", data: blockData})
        setBlocks(filteredBlocks)
    }



    return (
        <Paper className="block__wrapper" >
            <BlockHeader blockName={"Article Content"}/>
            <Grid container padding={5} direction="column" xs={12} spacing={3}>
                <Grid item>
                    <MyTextField label={"Body title"} onChange={setBodyTitle} multiline={true}/>
                </Grid>
                <Grid item>
                    <MyTextField label={"Body text"} onChange={setBodyText} multiline={true}/>
                </Grid>
                <Grid item>
                    <MyTextField label={""} onChange={setAwards} multiline={true} defaultValue={"Награды"}/>
                </Grid>
                <Grid item>
                    <MyTextField label={"Awards"} onChange={setAwards} multiline={true}/>
                </Grid>
                <Grid item>
                    <MySwitch label={"Share"} checked={true} onChange={setShare}/>
                </Grid>
                <Grid item>
                    <Typography>Images</Typography>
                    <ImagesUploader/>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UIArticleContent;