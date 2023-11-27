import { library } from '../mocks/books.json'
import { useFiltersStore } from '../stores/useFiltersStore'
import { useReadingList } from '../stores/useReadingList'
export function useLibrary () {
  const { categoryFilter, showAdded } = useFiltersStore()
  const { readingList } = useReadingList()
  const libraryMaped = library.map(item => ({
    title: item.book.title,
    pages: item.book.pages,
    genre: item.book.genre,
    cover: item.book.cover,
    synopsis: item.book.synopsis,
    year: item.book.year,
    ISBN: item.book.ISBN,
    author: item.book.author.name
  })
  )
  const filteredBooks = libraryMaped.filter((item) => ((categoryFilter === 'all' || item.genre === categoryFilter) && (
    showAdded === true || (readingList.findIndex(itemOnList => itemOnList.ISBN === item.ISBN) < 0)
  )))
  return { library: filteredBooks }
}
