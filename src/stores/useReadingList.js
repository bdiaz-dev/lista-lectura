import { create } from 'zustand'

const localStorage = window.localStorage.getItem('readingList') ?? '[]'
const localStorageArray = JSON.parse(localStorage)

const saveList = (list) => {
  window.localStorage.setItem('readingList', JSON.stringify(list))
}

export const useReadingList = create((set) => ({
  readingList: localStorageArray ?? [],
  setReadingList: (book) => set((state) => {
    const existingIndex = state.readingList.findIndex(item => item.ISBN === book.ISBN)
    let newList
    if (existingIndex >= 0) {
      state.readingList.splice(existingIndex, 1)
      newList = { readingList: state.readingList }
    } else {
      newList = { readingList: [book, ...state.readingList] }
    }
    saveList(newList.readingList)
    return (newList)
  })
}))
