import React, { ChangeEvent } from "react";
import { FieldWrapper, ImageBox, Img, UploadBtn, UploadIcon, UploadInput } from './FileField.styled'; 
import { FormHelperText } from "@mui/material";
const defaultImg = "https://res.cloudinary.com/dbyoqto0b/image/upload/v1703527979/defaultImg_nt4qio.png";

interface FileFieldProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: File | string;
    error?: string;
    required?: boolean;
}

const FileField: React.FC<FileFieldProps> =({ handleChange, value, error, required }) => {
  return (
    <>
    <FieldWrapper>
        <ImageBox
        >
            {value ? (<Img
            src={typeof value === "string" ? value : URL.createObjectURL(value)}
            alt="Uploaded image"
            />) : (
            <Img
            src={defaultImg}
            alt='Default image'
            />)}
        </ImageBox>
        <UploadBtn>
            <UploadIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.666 16.6641L19.9993 24.9974L28.3327 16.6641"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 25V5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </UploadIcon>
        <UploadInput
            type='file'
            accept="image/*"
            name="logoImg"
            onChange={(e) => handleChange(e)}
            required={required}
        />
        </UploadBtn>
    </FieldWrapper>
    <FormHelperText sx={{ color: 'red' }} style={{marginTop: '-17px'}}>{error}</FormHelperText>
      
    </>

  );
}
 
export default FileField;