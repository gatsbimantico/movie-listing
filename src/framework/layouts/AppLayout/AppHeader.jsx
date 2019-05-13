import styled from 'styled-components'
import { electricPurple } from '../../../site/colors';

export default styled.header`
  background: ${electricPurple};
  overflow-y: hidden;
  overflow-x: scroll;
  text-align: center;
  line-height: 64px;
  box-shadow: 0 -0.6em 0.7em 0.5em black;
  z-index: 1;
  position: relative;
`;
