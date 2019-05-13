import styled from "styled-components";
import { electricPurple, jadeGreen } from "../../../site/colors";

export default {
  h1: styled.h1`
    color: ${jadeGreen};
    text-transform: uppercase;
    white-space: pre;
  `,
  h2: styled.h2`
    color: ${electricPurple};
    text-transform: uppercase;
    margin: 10px 0 0;
  `,
  h3: styled.h3`
    color: ${jadeGreen};
    margin: 20px 0 0;
  `
};
