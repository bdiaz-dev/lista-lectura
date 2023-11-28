import { useModalStore } from '../stores/useModalStore'
import { useReadingList } from '../stores/useReadingList'

export function Book ({ book, handleOpenBook, onListMenu = false }) {
  const { readingList } = useReadingList()
  const { setIsModal, setBookToOpen } = useModalStore()
  const index = readingList.findIndex(item => item.ISBN === book.ISBN)
  const isOnList = (index >= 0)
  const handleClick = (e, book) => {
    if (handleOpenBook) handleOpenBook(e, book)
    else setBookToOpen(book); setIsModal(true)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div
        id={book.ISBN + 'book'}
        className='book'
        onClick={(e) => { handleClick(e, book) }}
      >
        {isOnList && !onListMenu && <i className='fa-solid fa-bookmark fa-2x' />}
        <img src={book.cover} alt={book.title} id={book.ISBN + 'img'} />
      </div>
    </div>
  )
}
