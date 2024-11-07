import Button from '@mui/material/Button';
import React from 'react';

interface FormBtnProps {
  name: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
}

const FormBtn: React.FC<FormBtnProps> = ({name, type, disabled}) => {
    return <Button
      variant="contained"
      color="primary"
      sx={{
        backgroundColor: 'transparent',
        color: '#202020',
        border: '2px solid #202020',
        borderRadius: 0,
        width: "100%",
        marginTop: 2,
        '&:hover': {
          backgroundColor: '#202020',
          color: '#FFF'
        },
       "&.Mui-disabled": {
          background: "transparent",
          color: "#202020",
          opacity: 0.7,
          cursor: "not-allowed"
        }
      }}
      type={type}
      disabled={disabled}
>
  {name}
</Button>
}
export default FormBtn;