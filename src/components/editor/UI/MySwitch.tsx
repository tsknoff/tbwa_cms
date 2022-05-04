import React, {FC, useState} from 'react';
import {FormControl, FormControlLabel, Switch} from "@mui/material";

interface MySwitchProps{
    label: string;
    checked: boolean;
    onChange: any;
}

const MySwitch:FC<MySwitchProps> = ({label, checked, onChange}) => {

    const [_checked, setChecked] = useState(checked)

    const handleChange = () => {
        setChecked(!_checked)
        onChange(_checked)
    }
    return (
        <FormControl fullWidth>
            <FormControlLabel
                control={
                    <Switch onChange={handleChange} checked={_checked} name="share"/>
                }
                label={label}
            />
        </FormControl>

    );
};

export default MySwitch;