import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {FormControl, FormControlLabel, Switch} from "@mui/material";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const UiArticleContent = () => {
    return (
        <Paper sx={{ maxWidth: 800, margin: 'auto', overflow: 'auto' }} >
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container xs={12} direction="row" alignItems="center" >
                        <Grid item xs={11} >
                            <Typography color="inherit"  align="center">
                                Article Content
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton>
                                <DragIndicatorIcon
                                    color="inherit"
                                    sx={{ display: 'block' }}
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container padding={5} direction="column" xs={12} spacing={3}>
                <Grid item>
                    <FormControl fullWidth>
                        <TextField
                            id="filled-textarea"
                            label="Body title"
                            multiline
                            defaultValue=""
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <TextField
                            id="filled-textarea"
                            label="Body text"
                            multiline
                            defaultValue=""
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <TextField
                            id="filled-textarea"
                            label="Awards"
                            multiline
                            defaultValue=""
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <FormControlLabel
                            control={
                                <Switch checked={true} name="share"/>
                            }
                            label="Social share button"
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UiArticleContent;