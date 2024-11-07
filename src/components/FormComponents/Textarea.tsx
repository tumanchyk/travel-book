import React, { ChangeEvent } from "react";
import TextField from '@mui/material/TextField';

interface TextareaProps {
    label?: string;
    id: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, value, handleChange, required = false }) => {
    return <TextField
            label={label}
            id={id}
            value={value}
            onChange={handleChange}
            required={required}
            multiline
            maxRows={5}
            variant="standard"
            fullWidth
            sx={{
            '& .MuiInputLabel-root': {
            pl: 2,
            },
            '& .MuiInputLabel-root.Mui-focused': {
            color: '#202020',
            },
            '& .MuiInputLabel-root.MuiFormLabel-filled': {
            color: '#202020',
            },
            '& .MuiInputBase-root.MuiInput-root::after': {
                borderBottomColor: '#202020'
            },
        }}
        />
}
export default Textarea;