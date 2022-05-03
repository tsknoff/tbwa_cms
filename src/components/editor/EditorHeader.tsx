import React, {FC} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import AppBar from "@mui/material/AppBar";
import {IPage} from "../../models/IPage";

interface EditorHeaderProps {
    pageId: number;
}


const EditorHeader: FC<EditorHeaderProps> = ({pageId}) => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
            <Toolbar>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <Typography color="inherit" variant="h6" align="center">
                            {pageId && pageId}
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Button variant="contained" sx={{ mr: 1 }}>
                            Save
                        </Button>
                        <Tooltip title="Reload">
                            <IconButton>
                                <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default EditorHeader;