import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from '../types'
import { StateCreator } from 'zustand'

const createGameInitSlice: StateCreator<
  gameInitializeStore & caveStore & globalGameStore & droneStore,
  [],
  [],
  gameInitializeStore
> = (set) => ({
  token: '',
  id: '',
  setToken: (param: string) => set(() => ({ token: param })),
  setId: (param: string) => set(() => ({ id: param })),
})

export default createGameInitSlice
