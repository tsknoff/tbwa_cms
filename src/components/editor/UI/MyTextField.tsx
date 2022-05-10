import React, {FC, useState} from 'react';
import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";

interface MyTextFieldProps{
    label: string;
    onChange: any;
    multiline ?: boolean;
    defaultValue ?: string;
}

const MyTextField:FC<MyTextFieldProps> =
    ({
         label,
         onChange,
         multiline,
         defaultValue
    }) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }
    let _defaultValue = '';

    if (defaultValue) {
         _defaultValue = defaultValue
    }else{
        _defaultValue = ''
    }
    return (
        <FormControl fullWidth>
            {multiline &&
                <TextField
                    id="filled-textarea"
                    label={label}
                    defaultValue={_defaultValue}
                    multiline
                    onChange={handleChange}
                />
            }
            {!multiline &&
                <TextField
                    id="filled-textarea"
                    label={label}
                    defaultValue={_defaultValue}
                    onChange={handleChange}
                />
            }
        </FormControl>
    );
};

export default MyTextField;