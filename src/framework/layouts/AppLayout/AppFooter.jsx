import styled from 'styled-components'
import { electricPurple } from '../../../site/colors';

export default styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: ${electricPurple};
  color: white;
  z-index: 1;
  position: relative;
`;
