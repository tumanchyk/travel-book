import styled from "@emotion/styled";

export const ListEl = styled.ul`
display: grid;
flex-wrap: wrap;
grid-template-columns: repeat(1, 1fr);
gap: 26px;
@media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 830px) {
    grid-template-columns: repeat(3, minmax(30%, 1fr));
}
`

export const NoItems = styled.p`
text-align: center;
font-weight: 600;
font-size: 24px;
margin-top: 70px;
`