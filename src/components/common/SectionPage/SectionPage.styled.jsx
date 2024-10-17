import styled from "@emotion/styled";
import bg from "../../../imgs/map-bg.png";

export const Section = styled.main`
min-height: 100vh;
background: linear-gradient(
      rgba(230, 220, 229, 0.85),
      rgba(230, 220, 229, 0.85)
    ), url(${bg}) no-repeat;
background-position: 50% 50%;
background-size: contain;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1240px;
margin: 0 auto;
padding: 20px 20px 50px;
`