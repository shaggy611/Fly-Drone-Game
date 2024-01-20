import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from '../types'
import { StateCreator } from 'zustand'

const initialGameInitState = {
  token: '',
  id: '',
}

const createGameInitSlice: StateCreator<
  gameInitializeStore & caveStore & globalGameStore & droneStore,
  [],
  [],
  gameInitializeStore
> = (set) => ({
  ...initialGameInitState,
  setToken: (param: string) => set(() => ({ token: param })),
  setId: (param: string) => set(() => ({ id: param })),
})

export default createGameInitSlice
