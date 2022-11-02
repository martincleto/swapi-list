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
    --color-accent: rgb(182, 64, 99);
    --color-default: rgb(255,255,255);
    --color-neutral-lighter: rgb(245,245,245);
    --color-neutral-light: rgb(225,225,225);
    --color-neutral-mid: rgb(180,180,180);
    --color-neutral-dark: rgb(50,50,50);

    background: var(--color-neutral-lighter);
    color: var(--color-neutral-dark);
    font-family: 'Montserrat', Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  a {
    transition: color 0.2s ease-in-out;
  }

  input:focus-visible {
    outline-color: var(--color-accent);
  }

  main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${rem(16)};
    justify-content: space-between;
    padding: ${rem(98)} ${rem(16)} ${rem(24)};
  }

  .no-results {
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

  @media (min-width: ${BREAKPOINT_MEDIUM}px) {
    main {
      flex-direction: row;
      max-width: ${rem(960)};
      margin: auto;
    }
  }
`

export default GlobalStyle