import styled from "@emotion/styled";

export const Item = styled.li`
display: flex;
padding: 20px;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
export const Desc = styled.p`
box-sizing: border-box;
font-size: 16px;
overflow: hidden;
width : 245px;
padding-right: 25px;
&:nth-child(4){
    width: 255px;
}
`
export const ButtonWrap = styled.div`
display: flex;
align-item: center;
gap: 10px;

& a{
    transform: scale(0.9);
    transition: all 300ms ease-out;

}
& a:hover{
    transform: scale(1);
}
`
export const ModifyBtn = styled.button`
width: 40px;
height: 40px;
background: transparent;
border: none;
cursor: pointer;
transition: all 300ms ease-out;

&:hover{
    transform: scale(1.1);
}
`