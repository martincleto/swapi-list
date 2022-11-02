import styled from 'styled-components'
import { rem } from 'polished'

export const StyledHeader = styled.header`
  background: var(--color-bg-alt);
  color: var(--color-bg-default);
  height: ${rem(50)};
  left: 0;
  padding: ${rem(16)};
  position: fixed;
  top: 0;
  width: 100%;

  h1 {
    font-family: 'StarJedi', sans-serif;
    margin: 0;
  }
`
