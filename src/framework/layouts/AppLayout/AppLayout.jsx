import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 64px calc(100vh - 64px) 128px;
  height: 100vh;
  overflow: auto;
`;
