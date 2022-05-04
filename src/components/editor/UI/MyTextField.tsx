import React, {FC, useState} from 'react';
import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";

interface MyTextFieldProps{
    label: string;
    onChange: any;
    multiline ?: boolean
}

const MyTextField:FC<MyTextFieldProps> = ({label, onChange, multiline}) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }
    return (
        <FormControl fullWidth>
            {multiline &&
                <TextField
                    id="filled-textarea"
                    label={label}
                    multiline
                    onChange={handleChange}
                />
            }
            {!multiline &&
                <TextField
                    id="filled-textarea"
                    label={label}
                    onChange={handleChange}
                />
            }
        </FormControl>
    );
};

export default MyTextField;