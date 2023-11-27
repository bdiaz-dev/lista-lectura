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
        <aside
          className='book-info-container'
        >
          {/* <section
            className='book-info'
            id={book.ISBN + 'info'}
          >
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
          </section> */}
        </aside>
      </div>
    </div>
  )
}
