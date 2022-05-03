import React, {useEffect, useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Typography from "@mui/material/Typography";
import WorkContainer from "./WorkContainer";
import WorkHeader from "./WorkHeader";


const Work = () => {

    return (
        <React.Fragment>
            <WorkHeader />
            <WorkContainer />
        </React.Fragment>
    );
};

export default Work;