import styled from "@emotion/styled";

export const HeaderEl = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 1240px;
margin: 0 auto;
padding: 20px;
`
export const Logo = styled.img`
width: 50px; 
height: 50px;
`
export const LogoutBtn = styled.button`
position: relative;
background: none;
outline: none;
border: none;
cursor: pointer;
text-transform: uppercase;
font-weight: 600;
transition: all 300ms ease-out;
line-height: 2;
padding: 0;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scale(0, 1);
    transition: all 300ms ease-out;
    background-color: #202020;
    z-index: 1;
  }

  &:hover::after{
    transform: scale(1);
  }

`