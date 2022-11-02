import styled from 'styled-components'
import { lighten, rem } from 'polished'

export const StyledHeader = styled.header`
  align-items: center;
  background: var(--color-bg-alt);
  box-sizing: border-box;
  color: var(--color-default);
  display: flex;
  height: ${rem(82)};
  left: 0;
  padding: ${rem(16)};
  position: fixed;
  top: 0;
  width: 100%;

  .header {
    &__navigation {
      flex: 1;
      text-align: right;
    }

    &__navigation-link {
      color: var(--color-default);
      text-decoration: none;

      :hover {
        color: ${lighten(0.2, 'rgb(182, 64, 99)')};
        text-decoration: underline;
      }
    }

    &__title {
      font-family: 'StarJedi', sans-serif;
      margin: 0;
    }
  }
`
