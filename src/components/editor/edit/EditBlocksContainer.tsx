import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {FormControl, FormControlLabel, FormHelperText, Input, Switch} from "@mui/material";
import TextField from "@mui/material/TextField";
import UIArticleContent from "../blocks/render/article-content/UI/article-content/UIArticleContent";
const EditBlocksContainer = () => {
    return (
        <div>
            <UIArticleContent />
        </div>
    );
};

export default EditBlocksContainer;