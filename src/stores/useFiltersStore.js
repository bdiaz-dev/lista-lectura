import { create } from 'zustand'

export const useFiltersStore = create((set) => ({
  categoryFilter: 'all',
  showAdded: false,
  setCategoryFilter: (e) => set(() => ({ categoryFilter: e.target.value })),
  setShowAdded: (e) => set((state) => ({ showAdded: !state.showAdded }))
}))
