import { gameGlobalStore, caveStore } from './../types/index'
import { StateCreator } from 'zustand'

const createCaveSlice: StateCreator<
  caveStore & gameGlobalStore,
  [],
  [],
  caveStore
> = (set) => ({
  caveCords: {},
  fetchCords: () => set((state) => ({ caveCords: state })),
})

export default createCaveSlice
