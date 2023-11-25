import {
    gameInitializeStore,
    caveStore,
    globalGameStore,
    droneStore
  } from './../types/index'
  import { StateCreator } from 'zustand'
  
  const createDroneSlice: StateCreator<
    caveStore & globalGameStore & gameInitializeStore & droneStore,
    [],
    [],
    droneStore
  > = (set) => ({
    position: [0, 0],
    setPosition: (payload) => set(() => ({ position: payload })),
  })
  
  export default createDroneSlice
  