import styled from 'styled-components'
import { rem } from 'polished'

import { LAYOUT } from '@/config'

export const StyledCharacterSearch = styled.main`
  padding-top: ${rem(132)};

  @media (min-width: ${LAYOUT.BREAKPOINT_MEDIUM}px) {
    padding-top: ${rem(98)};
  }
`

export const StyledFilters = styled.div`
  order: 3;
  padding-top: ${rem(8)};
  width: 100%;

  @media (min-width: ${LAYOUT.BREAKPOINT_MEDIUM}px) {
    align-self: center;
    order: inherit;
    padding: 0 0 0 ${rem(36)};
    max-width: ${rem(300)};
  }
`