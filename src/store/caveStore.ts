export const createCaveSlice = (set) => ({
  caveCords: {},
  fetchCords: () => set((state) => ({ caveCords: state })),
})
