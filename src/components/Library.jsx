// Styles
import '../styles/library.css'
import '../styles/books.css'

// Components
import { Book } from './Book'
import { ModalBook } from './ModalBook'

// Hooks & Stores
import { useLibrary } from '../hooks/useLibrary'
import { useEffect, useState } from 'react'
import { useModalStore } from '../stores/useModalStore'

// Constants
import { hide, show } from '../constants/cssAnimations'

export function Library () {
  const { library } = useLibrary()
  const { isModal, setIsModal, setBookToOpen } = useModalStore()
  const [miniBookHided, setMiniBookHided] = useState('')

  const handleOpenBook = (e, book) => {
    e.target.style.animation = hide
    setBookToOpen(book)
    setIsModal(true)
    setMiniBookHided(e.target.id)
  }

  useEffect(() => {
    if (!isModal && miniBookHided) {
      const img = document.getElementById(miniBookHided)
      img.style.animation = show
      setMiniBookHided('')
    }
  }, [isModal])

  return (
    <>
      {isModal && <ModalBook />}

      <section className='library'>

        {library && library.map((book) => {
          return (

            <Book
              key={book.ISBN}
              book={book}
              handleOpenBook={handleOpenBook}
            />

          )
        })}

      </section>
    </>
  )
}
