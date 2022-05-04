import React, {FC} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AppBar from "@mui/material/AppBar";

interface BlockHeaderProps{
    blockName: string;

}

const BlockHeader:FC<BlockHeaderProps> =
    ({
         blockName,

    }) => {
    return (
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
                            {blockName}
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
    );
};

export default BlockHeader;