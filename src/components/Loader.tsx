import styled, { keyframes } from 'styled-components'

function Loader() {
  return (
    <StyledLoader>
      <div className='load'>
        <hr />
        <hr />
        <hr />
        <hr />
      </div>

      <p>Loading game data ...</p>
    </StyledLoader>
  )
}

export default Loader

const spin = keyframes`
  0%{transform: rotate(0deg)}
  100%{transform:translate(0) rotate(180deg)}
  25%{transform:translate(160%) rotate(180deg)}
  50%{transform:translate(160%, 160%) rotate(90deg)}
  75%{transform:translate(0, 160%)}
  `

const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & .load {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
  }
  & .load hr {
    border: 0;
    margin: 0;
    width: 35%;
    height: 35%;
    position: absolute;
    border-radius: 30%;
    animation: ${spin} 3s ease-in infinite;
  }

  & .load :first-child {
    background: #398ab9;
    animation-delay: -1.5s;
    box-shadow: #3d3d3d88 5px 5px 5px;
  }
  & .load :nth-child(2) {
    background: #ebd671;
    animation-delay: -1s;
    box-shadow: #3d3d3d88 5px 5px 5px;
  }
  & .load :nth-child(3) {
    background: #ea5455;
    animation-delay: -0.5s;
    box-shadow: #3d3d3d88 5px 5px 5px;
  }
  & .load :last-child {
    background: #85c88a;
    box-shadow: #3d3d3d88 5px 5px 5px;
  }

  & p {
    margin-top: 180px;
  }
`
