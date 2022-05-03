import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import AppBar from "@mui/material/AppBar";
import {Link} from "react-router-dom";
import {pageAPI} from "../../services/PageService";

const WorkHeader = () => {
    const {data: pages, error, isLoading} = pageAPI.useFetchAllPagesByTypeQuery('work')
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
                            Work cases
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <SearchIcon color="inherit" sx={{ display: 'block' }} />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            placeholder="Search by client or title"
                            InputProps={{
                                disableUnderline: true,
                                sx: { fontSize: 'default' },
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item>
                        <Link className="button-link" to={`/create`}
                        >
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add new case
                            </Button>
                        </Link>
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

export default WorkHeader;