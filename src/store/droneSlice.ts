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
  horizontalSpeed: 0,
  verticalSpeed: 0,
  edgesPoints: [],
  droneRef: null,
  traveledDistance: 0,
  setHorizontalSpeed: (payload) =>
    set((state) => ({ horizontalSpeed: state.horizontalSpeed + payload })),
  setEdgesPoints: (payload) => set(() => ({ edgesPoints: [...payload] })),
  setVerticalSpeedUp: () =>
    set((state) => ({
      verticalSpeed:
        state.verticalSpeed <= 5
          ? state.verticalSpeed + 1
          : state.verticalSpeed,
    })),
  setVerticalSpeedDown: () =>
    set((state) => ({
      verticalSpeed:
        state.verticalSpeed > 1 ? state.verticalSpeed - 1 : state.verticalSpeed,
    })),
  setDroneRef: (payload) => set(() => ({ droneRef: payload })),
  setTraveledDistance: (payload) => set(() => ({ traveledDistance: payload })),
})

export default createDroneSlice
