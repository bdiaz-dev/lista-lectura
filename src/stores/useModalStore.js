import { create } from 'zustand'

export const useModalStore = create((set) => ({
  isModal: false,
  bookToOpen: {},
  setIsModal: (bool) => set(() => ({ isModal: bool })),
  setBookToOpen: (book) => set(() => ({ bookToOpen: book }))
}))
