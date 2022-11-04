import styled from 'styled-components'
import { rem } from 'polished'

import { LAYOUT } from '@/config'

const cardSpace = 8
const columnGap = 16  + cardSpace * 2

export const StyledCard = styled.article`
  background: var(--color-default);
  border: solid 1px var(--color-neutral-mid);
  border-radius: var(--border-radius);
  box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.3);
  padding: ${rem(cardSpace)};

  h2, li {
    margin: 0 0 ${rem(cardSpace)};
  }

  h2 {
    font-size: ${rem(22)};
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding: 0 0 0 ${rem(16)};
    margin: 0;
  }

  @media (min-width: ${LAYOUT.BREAKPOINT_MEDIUM}px) {
    min-width: calc(33.6% - ${rem(columnGap)});
  }
`