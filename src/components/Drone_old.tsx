import { KeyboardEvent, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useBoundStore } from '../store'

export default function Drone() {
  const position = useBoundStore((state) => state.position)
  const setPosition = useBoundStore((state) => state.setPosition)
  const edgesPoints = useBoundStore((state) => state.edgesPoints)
  const drone = useRef(null)
  const dronePolygon = useRef(null)

  const dronePosition = {
    transform: `translate(${position[0]}px, ${position[1]}px)`,
  }

  function changeDronePosition(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case 'ArrowLeft':
        setPosition([(position[0] -= 1), position[1]])
        break
      case 'ArrowRight':
        setPosition([(position[0] += 1), position[1]])
        break
      case 'ArrowUp':
        setPosition([position[0], (position[1] -= 1)])
        break
      case 'ArrowDown':
        setPosition([position[0], (position[1] += 1)])
        break
    }
  }

  // function pointsOnEdge(startPoint, endPoint, count) {
  //   const result = []
  //   for (let i = 0; i <= count; i++) {
  //     const t = i / count
  //     const x =
  //       parseFloat(startPoint[0]) +
  //       t * (parseFloat(endPoint[0]) - parseFloat(startPoint[0]))
  //     const y =
  //       parseFloat(startPoint[1]) +
  //       t * (parseFloat(endPoint[1]) - parseFloat(startPoint[1]))
  //     result.push([x, y])
  //   }
  //   return result
  // }

  useEffect(() => {
    document.addEventListener('keydown', changeDronePosition)

    return () => document.removeEventListener('keydown', changeDronePosition)
  }, [])

  useEffect(() => {
    const points = dronePolygon.current
      .getAttribute('points')
      .split(' ')
      .map((point) => point.split(',').map(Number))

    // const pointsArrays = [
    //   ...pointsOnEdge(points[0], points[1], 20),
    //   ...pointsOnEdge(points[1], points[2], 20),
    //   ...pointsOnEdge(points[2], points[0], 20),
    // ]

    const { x, y } = dronePolygon.current.getBoundingClientRect()

    const pointsArraysMoved = points.map((item) => [item[0] + x, item[1] + y])

    // setEdgesPoints(pointsArraysMoved)

    // let res

    // edgesPoints.forEach((item) => {
    //   const a = pointsArraysMoved.some((element) => {
    //     if (element[0] < item[0] && element[1] >= item[1]) {
    //       return true
    //     }
    //     return false
    //   })

    //   if (a) {
    //     res = 'colision'
    //   }
    // })

    // console.log(edgesPoints)

    const caveRef = document.querySelector('#cave').getBoundingClientRect()
    const caveAllBlocks = document.querySelectorAll('polygon')
    // const relativDronePosition = [
    //   droneRef.top - caveRef.top,
    //   droneRef.left - caveRef.left,
    // ]

    caveAllBlocks.forEach((box, index) => {
      const caveBox = box.getBoundingClientRect()

      if (dronePolygon.current && caveRef) {
        const droneRef = dronePolygon.current.getBoundingClientRect()

        const horizontColision =
          (index % 2 === 0 && droneRef.left <= caveBox.right) ||
          (index % 2 !== 0 && droneRef.right >= caveBox.left)

        const verticalColision =
          droneRef.top <= caveBox.bottom && droneRef.bottom >= caveBox.top

        if (horizontColision && verticalColision) {
          console.log('colision')
        }
        console.log(horizontColision, verticalColision)
      }

      // console.log(caveBox);
    })
  }, [position])

  return (
    <StyledDrone dronePosition={position} style={dronePosition}>
      <svg
        ref={drone}
        width='20'
        height='11'
        xmlns='http://www.w3.org/2000/svg'>
        <polygon ref={dronePolygon} points='0,0 20,0 10,11' />
      </svg>
    </StyledDrone>
  )
}

const StyledDrone = styled.div<{
  dronePosition: number[]
}>`
  position: absolute;
  left: 50%;
  top: 30px;

  & {
    fill: red;
    stroke: purple;
    stroke-width: 1;
  }
`
