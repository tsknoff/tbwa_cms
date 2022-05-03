import React, {ChangeEventHandler, FC, useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {FormControl} from "@mui/material";
import WorkItem from "../../work/WorkItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface MyButtonProps{
    value: string;
    label: string;
    onClick: any;

}

const MyButton:FC<MyButtonProps> = ({value, label, onClick}) => {

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        onClick(e)
    }
    return (
        <Button onClick={handleClick} variant="contained" >
            {value}
        </Button>
    );
};

export default MyButton;