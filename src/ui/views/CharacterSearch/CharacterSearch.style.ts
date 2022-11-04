import styled from 'styled-components'
import { rem } from 'polished'

import { LAYOUT } from '@/config'

export const StyledCharacterSearch = styled.main`
  padding-top: ${rem(132)};

  [role="complementary"] {
    text-align: center;
    width: 100%;

    img {
      border-radius: 50%;
      display: block;
      height: ${rem(120)};
      margin: 0 auto ${rem(16)} auto;
      object-fit: cover;
      opacity: 0.75;
      width: ${rem(120)};
    }
  }

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