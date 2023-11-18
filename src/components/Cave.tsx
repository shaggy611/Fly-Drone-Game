import { useEffect } from 'react'
import { io } from 'socket.io-client'

function Cave() {
  useEffect(() => {
    const socket = io('wss://cave-drone-server.shtoa.xyz/cave')

    socket.on('connect', () => {
        
    })
  }, [])
  return <div>Cave</div>
}

export default Cave
