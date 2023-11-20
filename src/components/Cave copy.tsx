import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useBoundStore } from '../store'
import styled from 'styled-components'

function Cave() {
  const id = useBoundStore((state) => state.id)
  const token = useBoundStore((state) => state.token)
  const [cords, setCords] = useState([])

  const polygonHeight = 12

  const generateCaveSVG = () => {
    if (cords.length > 0) {
      for (let i = 0; i < cords.length; i+=2) {
        const element = array[i]
      }
    }
  }

  useEffect(() => {
    const socket = new WebSocket('wss://cave-drone-server.shtoa.xyz/cave')
    const coords = []
    socket.onopen = () => {
      console.log('Connection established')
      socket.send(`player:${id}-${token}`)
    }
    socket.onmessage = (event) => {
      coords.push(event.data)
    }
    socket.onclose = () => {
      console.log('Connection closed')
      setCords(coords)
      console.log(coords)
    }
    return () => {
      socket.close()
    }
  }, [])

  return (
    <StyledCave>
      <svg width='500' height='10000' xmlns='http://www.w3.org/2000/svg'>
        {cords.map((item, index) => {
          const [x1, y1] = item.split(',').map(Number)

          return (
            <g key={uuidv4()}>
              <rect
                x='0'
                y={`${polygonHeight * index}`}
                width={`${250 + x1}`}
                height={polygonHeight}
                stroke='black'
                fill='black'
              />

              <rect
                x={`${250 + y1}`}
                y={`${polygonHeight * index}`}
                width={`${500 - (250 + y1)}`}
                height={polygonHeight}
                stroke='black'
                fill='black'
              />
            </g>
          )
        })}
      </svg>
    </StyledCave>
  )
}

export default Cave

const StyledCave = styled.div`
  & svg {
    margin-top: 30px;
    background-color: antiquewhite;
  }
`
