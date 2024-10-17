import styled from "@emotion/styled";

export const Item = styled.li`
display: flex;
flex-direction: column;
background: rgba(255, 255, 255, 0.3);
overflow: hidden;
`
export const ImageWrapper = styled.div`
height: 270px;
position: relative;
`
export const DescWrapper = styled.div`
padding: 20px 15px;
width: 100%;
& h2{
font-size: 28px;
font-weight: 700;
}
`
export const Places = styled.div`
font-size: 19px;
font-weight: 500;
padding: 15px 0;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3; 
line-clamp: 3;
-webkit-box-orient: vertical;
`;
export const Overview = styled.div`
font-size: 17px;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 5; 
        line-clamp: 5; 
-webkit-box-orient: vertical;

`

export const LowerWrapper = styled.div`
display: flex;
// justify-content: space-between;
align-items: center;
font-size: 17px;
font-weight: 500;
margin-top: 15px;
gap: 6px;
`
export const Date = styled.div`
font-size: 17px;
font-weight: 500;
`

export const ButtonWrap = styled.div`
position: absolute;
top: 0;
right: 0;
display: flex;
align-item: center;
flex-direction: column;
padding: 4px;
gap: 8px;
background: rgba(255, 255, 255, 0.5);

& a{
    transform: scale(0.9);
    transition: all 300ms ease-out;

}
& a:hover{
    transform: scale(1);
}
`
export const ModifyBtn = styled.button`
width: 36px;
height: 36px;
background: transparent;
border: none;
cursor: pointer;
transition: all 300ms ease-out;

&:hover{
    transform: scale(1.1);
}
`