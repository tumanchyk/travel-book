import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const AccountLink = styled(Link)`
position: relative;
&:after{
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: -4px;
  background: transparent;
  transition: all 200ms ease-out;
}
&:hover:after {
      background: #202020;

}
`