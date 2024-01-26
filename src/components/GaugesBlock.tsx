import styled, { keyframes } from 'styled-components'
import { useBoundStore } from '../store'

function GaugesBlock() {
  const horizontalSpeed = useBoundStore((state) => state.horizontalSpeed)
  const verticalSpeed = useBoundStore((state) => state.verticalSpeed)
  const gameDataLoaded = useBoundStore((state) => state.gameDataLoaded)

  const verticalGauge = (verticalSpeed * 100) / 6
  const horizontalGauge =
    horizontalSpeed <= 3 && horizontalSpeed >= -3
      ? (horizontalSpeed * 100) / 6
      : horizontalSpeed > 3
      ? 50
      : -50

  console.log(horizontalSpeed)

  return (
    <>
      {gameDataLoaded ? (
        <StyledWrapper>
          <span className='gauge-subtext'>Vertical Speed</span>
          <div className='gauge-wrapper'>
            <div className='gauge'>
              <span
                className='gauge-indicator'
                style={{ left: `${verticalGauge}%` }}></span>
            </div>

            <p className='indication-text'>{verticalSpeed}</p>
          </div>

          <span className='gauge-subtext'>Horizontal Speed</span>
          <div className='gauge-wrapper'>
            <div className='gauge horizontal'>
              <span
                className='gauge-indicator'
                style={{ left: `${horizontalGauge}%` }}></span>
            </div>

            <p className='indication-text'>{horizontalSpeed}</p>
          </div>
        </StyledWrapper>
      ) : (
        ''
      )}
    </>
  )
}

export default GaugesBlock

const appearing = keyframes`
    10% { transform:translateX(0%); opacity: 0; }
    30% { transform:translateX(-25%); }
    50% { transform:translateX(0%); }
    60% { transform:translateX(-7%); }
    80% { transform:translateX(0%); }
    98% { transform:translateX(-3%); }
    100% { transform:translateX(0); opacity: 1; }
`

const StyledWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
  max-width: 230px;
  max-height: 150px;
  width: 100%;
  animation: ${appearing} 0.5s ease-in;

  & .gauge-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .gauge-subtext {
    width: 100%;
    text-align: left;
    display: block;
    font-size: 14px;
  }

  & .gauge {
    background-color: #757575;
    width: 100%;
    max-width: 200px;
    height: 18px;
    border-radius: 30px;
    margin: 7px 0;
    padding: 2px 8px;
    position: relative;
    display: flex;
    align-items: center;
  }

  & .gauge-indicator {
    display: block;
    position: relative;
    background-color: #F15412;
    width: 5.5%;
    height: 65%;
    border-radius: 100%;
    transition: all 0.5s ease-in;
    border: 1px solid darkblue;
  }

  & .horizontal {
    justify-content: center;
  }

  & .indication-text {
    margin: 0;
  }
`
