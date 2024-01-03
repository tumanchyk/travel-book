import styled from "@emotion/styled";

export const ListEl = styled.ul`
background: rgba(255, 255, 255, 0.3)

`
export const HeadList = styled.ul`
display: flex;
align-items: center;
padding: 20px 110px 20px 20px;
border-bottom: 1px solid #000;
background: rgba(255, 255, 255, 0.3)
`
export const HeadItem = styled.li`
font-weight: 600;
font-size: 18px;
width : ${props => props.width};
`
export const NoItems = styled.p`
text-align: center;
font-weight: 600;
font-size: 24px;
margin-top: 70px;
`
