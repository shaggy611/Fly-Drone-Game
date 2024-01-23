import {
  gameInitializeStore,
  caveStore,
  globalGameStore,
  droneStore,
} from '../types'
import { StateCreator } from 'zustand'
import { sliceResetFns } from './index';

const initialGameInitState = {
  token: '',
  id: '',
}

const createGameInitSlice: StateCreator<
  gameInitializeStore & caveStore & globalGameStore & droneStore,
  [],
  [],
  gameInitializeStore
> = (set) => {
  sliceResetFns.add(() => set(initialGameInitState))

  return {
    ...initialGameInitState,
    setToken: (param: string) => set(() => ({ token: param })),
    setId: (param: string) => set(() => ({ id: param })),
  }
}

export default createGameInitSlice
