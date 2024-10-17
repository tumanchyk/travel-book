import React from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const CustomInput = ({label, id, handleChange, type, value, error, required}) => {

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