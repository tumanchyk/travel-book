import styled from "@emotion/styled";

export const HeaderEl = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1240px;
gap: 20px;
margin: 0 auto;
padding: 20px;
`
export const Logo = styled.img`
width: 40px; 
height: 40px;

@media (min-width: 520px) {
  width: 50px; 
  height: 50px;

}
`
export const HeaderMainLink = styled.a`
display: flex;
align-items: center;
gap: 12px;
font-weight: 700;
font-size: 18px;
text-transform: uppercase;
color: #333333;

@media (min-width: 520px) {
  font-size: 20px;

}
`
export const LogoutBtn = styled.button`
  position: relative;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 300ms ease-out;
  line-height: 2;
  padding: 0;

  
  & span {
    position: relative;
    color: #202020;
    font-size: 14px;

    @media (min-width: 520px) {
    font-size: 16px;

  }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transition: all 300ms ease-out;
      background-color: #202020;
      z-index: 1;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;
