import styled, { keyframes } from 'styled-components'
import { Typography } from '@mui/material'

function KeyboardTip() {
  return (
    <StyledKeyboardTip>
      <Typography sx={{ fontSize: '1.05rem' }} align='center' gutterBottom>
        Use keyboard arrow keys ← → ↑ ↓ for Drone move
      </Typography>
    </StyledKeyboardTip>
  )
}

export default KeyboardTip

const appearingBoard = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const StyledKeyboardTip = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
  opacity: 0;
  animation: ${appearingBoard} 0.4s 0.5s ease forwards;
`
