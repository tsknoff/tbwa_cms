import React, {ChangeEventHandler, FC, useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {FormControl} from "@mui/material";
import WorkItem from "../../work/WorkItem";
import TextField from "@mui/material/TextField";

interface MyTextFieldProps{
    label: string;
    onChange: any;

}

const MyTextField:FC<MyTextFieldProps> = ({label, onChange}) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }
    return (
        <FormControl fullWidth>
            <TextField
                id="filled-textarea"
                label={label}
                onChange={handleChange}
            />
        </FormControl>
    );
};

export default MyTextField;