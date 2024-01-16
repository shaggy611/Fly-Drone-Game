import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from './../types/index'
import { StateCreator } from 'zustand'

const createDroneSlice: StateCreator<
  caveStore & globalGameStore & gameInitializeStore & droneStore,
  [],
  [],
  droneStore
> = (set) => ({
  position: [0, 0],
  speed: 0,
  edgesPoints: [],
  setPosition: (payload) => set(() => ({ position: payload })),
  setEdgesPoints: (payload) => set(() => ({ edgesPoints: [...payload] })),
  setSpeedUp: () =>
    set((state) => ({
      speed: state.speed <= 5 ? state.speed + 1 : state.speed,
    })),
  setSpeedDown: () =>
    set((state) => ({
      speed: state.speed > 0 ? state.speed - 1 : state.speed,
    })),
})

export default createDroneSlice
