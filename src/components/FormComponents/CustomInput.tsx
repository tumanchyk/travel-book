import React, { ChangeEvent, FocusEvent } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

interface CustomInputProps {
    label?: string;
    id: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value: string;
    required?: boolean;
    error?: string | boolean;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({label, id, handleChange, type, value, error, required = false, onBlur}) => {

  return <FormControl fullWidth={true}>
    <InputLabel htmlFor={id}
      sx={{
        '&.MuiInputLabel-root.Mui-focused': {
          color: '#202020'
        },
        '&.MuiInputLabel-root.MuiFormLabel-filled': {
          color: '#202020'
        }
      }}>
      {label}
    </InputLabel>
    <Input
      id={id}
      value={value}
      onChange={handleChange}
      autoComplete="off"
      type={type}
      required={required}
      onBlur={onBlur}
      sx={{
        '&.MuiInputBase-root.MuiInput-root::after': {
          borderBottomColor: '#202020'
        }
      }}
    />
    <FormHelperText sx={{ color: 'red' }}>{error}</FormHelperText>

  </FormControl>
}

export default CustomInput;