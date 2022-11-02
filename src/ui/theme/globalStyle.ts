import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

import { BREAKPOINT_MEDIUM } from '@/config'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'StarJedi';
    src:
      local('StarJedi'),
      url('./assets/fonts/StarJedi.ttf') format("truetype"),
      url('./assets/fonts/StarJedi.woff') format("woff"),
      url('./assets/fonts/StarJedi.woff2') format("woff2");
    font-style: normal;
  }

  body {
    --border-radius: ${rem(3)};
    --color-bg-alt: rgb(52, 93, 138);
    --color-bg-default: rgb(255,255,255);
    --color-accent: rgb(182, 64, 99);
    --color-neutral-lighter: rgb(245,245,245);
    --color-neutral-light: rgb(225,225,225);
    --color-neutral-mid: rgb(180,180,180);
    --color-neutral-dark: rgb(50,50,50);

    background: var(--color-bg-default);
    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--color-accent);

    :hover {
      color: var(--color-accent-dark);
    }
  }

  input:focus-visible {
    outline-color: var(--color-accent);
  }

  main {
    padding: ${rem(72)} ${rem(16)} ${rem(24)};
  }

  @media (min-width: ${BREAKPOINT_MEDIUM}px) {
    main {
      max-width: ${rem(960)};
      margin: auto;
    }
  }
`

export default GlobalStyle