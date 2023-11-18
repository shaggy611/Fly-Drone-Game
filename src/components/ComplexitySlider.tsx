import Slider from '@mui/material/Slider'
import styled from 'styled-components'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

function valuetext(value: number) {
  return `${value} level`
}

function ComplexitySlider() {
  const theme = useTheme()
  return (
    <>
      <Typography
        sx={{ fontSize: '1.2rem' }}
        pt={3}
        align='center'
        gutterBottom>
        Choose difficukty level:
      </Typography>

      <StyledSlider
        aria-label='Complexity level'
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay='auto'
        step={1}
        marks
        min={1}
        max={10}
        theme={theme}
      />
    </>
  )
}

export default ComplexitySlider

const StyledSlider = styled(Slider)`
  & .MuiSlider-thumb,
  & .MuiSlider-rail,
  & .MuiSlider-track {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  & .MuiSlider-mark {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`
