export interface gameGlobalStore {
    token: string
    id: string
    loading: boolean
    setToken: (param: string) => void
    setId: (param: string) => void
    setLoading: () => void
}
