import { gameGlobalStore } from "../types"

export const createGameInitSlice = (set) => ({
  token: '',
  id: '',
  loading: false,
  setToken: (param: string) => set(() => ({ token: param })),
  setId: (param: string) => set(() => ({ id: param })),
  setLoading: () => set((state) => ({ loading: !state.loading })),
})
