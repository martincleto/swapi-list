import styled from 'styled-components'
import { lighten, rem } from 'polished'

import { LAYOUT } from '@/config'

export const StyledHeader = styled.header`
  background: var(--color-bg-alt);
  box-sizing: border-box;
  color: var(--color-default);
  left: 0;
  min-height: ${rem(62)};
  position: fixed;
  top: 0;
  width: 100%;
`

export const StyledHeaderContent = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${rem(LAYOUT.CONTENT_MAX_WIDTH)};
  padding: ${rem(16)};
  // width: 100%;

  h1 {
    font-family: 'StarJedi', sans-serif;
    font-size: ${rem(24)};
    margin: 0;
  }

  nav {
    flex: 1;
    text-align: right;

    a {
      color: var(--color-default);
      text-decoration: none;

      :hover {
        color: ${lighten(0.2, 'rgb(182, 64, 99)')};
        text-decoration: underline;
      }
    }
  }
`
