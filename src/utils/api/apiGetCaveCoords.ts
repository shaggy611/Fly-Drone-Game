import { useBoundStore } from '../../store'

const apiGetCaveCoords = async () => {
  const socket = new WebSocket('wss://cave-drone-server.shtoa.xyz/cave')
  const coords: string[] = []
  const id = useBoundStore.getState().id
  const token = useBoundStore.getState().token

  socket.onopen = () => {
    console.log('Connection established')
    socket.send(`player:${id}-${token}`)
  }

  socket.onmessage = (event) => {
    coords.push(event.data)
  }

  socket.onclose = () => {
    console.log('Connection closed')
    useBoundStore.getState().setCaveCoords(coords)
    socket.close()
  }
}

export default apiGetCaveCoords
