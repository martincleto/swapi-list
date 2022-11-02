import styled, { keyframes } from 'styled-components'
import { lighten, rem } from 'polished'

const spinnerAnimation = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`

export const StyledSpinner = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > div {
    display: inline-block;
    width: ${rem(64)};
    height: ${rem(64)};
    margin: ${rem(8)};
    border-radius: 50%;
    background: ${lighten(0.2, 'rgb(182, 64, 99)')};
    animation: ${spinnerAnimation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`