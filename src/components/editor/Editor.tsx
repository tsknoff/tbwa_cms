import AppBar from '@mui/material/AppBar';
import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import RefreshIcon from "@mui/icons-material/Refresh";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {FormControl, FormControlLabel, FormHelperText, Input, Switch} from "@mui/material";
import TextField from "@mui/material/TextField";
import EditorHeader from "./EditorHeader";
import FeaturedMedia from "./blocks/render/featured-media/render/FeaturedMedia";
import {TBWA_ASSETS_URL} from "../../services/PageService";
import ReactDOMServer from 'react-dom/server';



const Editor = () => {
    // let element = FeaturedMedia({client: "Nissan", headlines: ["123","123"], backgroundImage: "123123123123123213"}) as JSX.Element;
    // let rendered_element = ReactDOMServer.renderToStaticMarkup(element);
    // console.log(rendered_element)

    return (
        <React.Fragment>
            {/*<EditorHeader pageId={params.editorId}/>*/}
            {/*<FeaturedMedia client={"ad"} headlines={["1","2"]} backgroundImage={"https://www.tbwa.ru/assets/work/cover-b.jpg"} />*/}
            {/*<Paper sx={{ maxWidth: 800, margin: 'auto', overflow: 'auto' }} >*/}
            {/*    <AppBar*/}
            {/*        position="static"*/}
            {/*        color="default"*/}
            {/*        elevation={0}*/}
            {/*        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}*/}
            {/*    >*/}
            {/*        <Toolbar>*/}
            {/*            <Grid container xs={12} direction="row" alignItems="center" >*/}
            {/*                <Grid item xs={11} >*/}
            {/*                    <Typography color="inherit"  align="center">*/}
            {/*                        Block Name*/}
            {/*                    </Typography>*/}
            {/*                </Grid>*/}
            {/*                <Grid item xs={1}>*/}
            {/*                    <IconButton>*/}
            {/*                        <DragIndicatorIcon*/}
            {/*                            color="inherit"*/}
            {/*                            sx={{ display: 'block' }}*/}
            {/*                        />*/}
            {/*                    </IconButton>*/}
            {/*                </Grid>*/}
            {/*            </Grid>*/}
            {/*        </Toolbar>*/}
            {/*    </AppBar>*/}
            {/*    <Grid container padding={5} direction="column" xs={12} spacing={3}>*/}
            {/*        <Grid item>*/}
            {/*            <FormControl fullWidth>*/}
            {/*                <TextField*/}
            {/*                    id="filled-textarea"*/}
            {/*                    label="Body title"*/}
            {/*                    multiline*/}
            {/*                    defaultValue="Body title"*/}
            {/*                />*/}
            {/*            </FormControl>*/}
            {/*        </Grid>*/}
            {/*        <Grid item>*/}
            {/*            <FormControl fullWidth>*/}
            {/*                <TextField*/}
            {/*                    id="filled-textarea"*/}
            {/*                    label="Body text"*/}
            {/*                    multiline*/}
            {/*                    defaultValue="Body text"*/}
            {/*                />*/}
            {/*            </FormControl>*/}
            {/*        </Grid>*/}
            {/*        <Grid item>*/}
            {/*            <FormControl fullWidth>*/}
            {/*                <TextField*/}
            {/*                    id="filled-textarea"*/}
            {/*                    label="Awards"*/}
            {/*                    multiline*/}
            {/*                    defaultValue="Awards"*/}
            {/*                />*/}
            {/*            </FormControl>*/}
            {/*        </Grid>*/}
            {/*        <Grid item>*/}
            {/*            <FormControl fullWidth>*/}
            {/*                <FormControlLabel*/}
            {/*                    control={*/}
            {/*                        <Switch checked={true} name="share"/>*/}
            {/*                    }*/}
            {/*                    label="Social share button"*/}
            {/*                />*/}
            {/*            </FormControl>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Paper>*/}
        </React.Fragment>
    );
};

export default Editor;