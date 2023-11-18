export interface gameGlobalStore {
  token: string
  id: string
  loading: boolean
  setToken: (param: string) => void
  setId: (param: string) => void
  setLoading: () => void
}

export interface caveStore {
  caveCords: object
  fetchCords: () => void
}
