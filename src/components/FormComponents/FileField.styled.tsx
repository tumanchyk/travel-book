import styled from "@emotion/styled";

export const FieldWrapper = styled.div`
position: relative;
height: 250px;
margin: 10px 0;

`
export const ImageBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
border: 1px solid grey;
overflow: hidden;
position: relative;
`
export const Img = styled.img`
max-height: 100%;
max-width: 100%;
`
export const UploadBtn = styled.div`
position: absolute;
top: 7px;
right: 7px;
width: 40px;
height: 40px;
color: black;
background-color: white;
transition: all 300ms ease-out;
&:hover{
    background-color: black;
    color: white;
}
& path{
    stroke: currentColor;
}
`
export const UploadInput = styled.input`
width: 100%;
height: 100%;
opacity: 0;
`
export const UploadIcon = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
`
