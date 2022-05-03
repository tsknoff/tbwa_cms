import React, {FC, useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {FormControl} from "@mui/material";
import WorkItem from "../../work/WorkItem";

interface MySelectProps{
    label: string;
    menuItems: string[];
    onChange: any;

}

const MySelect:FC<MySelectProps> = ({label, onChange, menuItems}) => {
    const [value, setValue] = useState('')

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-select-small">{label}</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label={label}
                onChange={handleChange}
            >
                {menuItems && menuItems.map(menuItem =>
                    <MenuItem value={menuItem}>{menuItem}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
};

export default MySelect;