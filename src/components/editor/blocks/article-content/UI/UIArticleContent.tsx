import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BlockHeader from "../../BlockHeader";
import MyTextField from "../../../UI/MyTextField";
import MySwitch from "../../../UI/MySwitch";
import {IArticleContentProps} from "../model/IArticleContent";

const UIArticleContent = () => {
    const [blockData, setBlockData] = useState({} as IArticleContentProps)

    function setBodyTitle(bodyTitle: string){
        setBlockData({...blockData, bodyTitle: bodyTitle})
        //console.log(blockData)
    }
    function setBodyText(bodyText: string){
        setBlockData({...blockData, bodyText: bodyText})
        //console.log(blockData)
    }
    function setAwards(awards: string[]){
        setBlockData({...blockData, awardsBody: awards})
        //console.log(blockData)
    }
    function setShare(share: boolean){
        setBlockData({...blockData, share: share})
        //console.log(blockData)
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
                    <MyTextField label={"Awards"} onChange={setAwards} multiline={true}/>
                </Grid>
                <Grid item>
                    <MySwitch label={"Share"} checked={true} onChange={setShare}/>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UIArticleContent;