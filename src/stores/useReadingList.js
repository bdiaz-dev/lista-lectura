import { create } from 'zustand'

export const useReadingList = create((set) => ({
  readingList: [],
  setReadingList: (book) => set((state) => {
    const existingIndex = state.readingList.findIndex(item => item.ISBN === book.ISBN)
    if (existingIndex >= 0) { state.readingList.splice(existingIndex, 1); return ({ readingList: [...state.readingList] }) }
    return ({ readingList: [book, ...state.readingList] })
  })

}))
