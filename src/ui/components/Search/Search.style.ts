import styled from 'styled-components'
import { rem } from 'polished'

export const StyledSearch = styled.form`
  input[type="search"] {
    border-radius: var(--border-radius);
    border: solid 1px var(--color-neutral-mid)
    font-size: ${rem(16)};
    padding: ${rem(8)};
    width: 100%;

    &::placeholder {
      color: var(--color-neutral-mid);
    }
  }
`