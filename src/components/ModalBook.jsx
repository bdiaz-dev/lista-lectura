// Styles
import '../styles/modalBook.css'

// Components
import { CloseButton } from './CloseButton'

// Hooks & Stores
import { useModalStore } from '../stores/useModalStore'
import { useReadingList } from '../stores/useReadingList'

// Constants
import { hide } from '../constants/cssAnimations'

export function ModalBook () {
  const { readingList, setReadingList } = useReadingList()
  const { setIsModal, bookToOpen } = useModalStore()
  const index = readingList.findIndex(item => item.ISBN === bookToOpen.ISBN)

  const handleClose = () => {
    const modal = document.querySelector('.modalBook')
    modal.style.animation = hide
    modal.addEventListener('animationend', () => { setIsModal(false) })
  }

  const handleAddToList = () => {
    setReadingList(bookToOpen)
    // console.log(isOnList)
    handleNotify()
  }

  const handleNotify = () => {
    const notify = document.getElementById('addedNotify')
    notify.style.animation = ''
    if (notify === undefined) return
    notify.style.color = isOnList() ? 'red' : 'lightblue'
    notify.textContent = isOnList() ? `${bookToOpen.title} quitado.` : `${bookToOpen.title} añadido.`
    notify.style.animation = 'addedNotify 2s'
    notify.addEventListener('animationend', () => { notify.style.animation = '' })
  }

  const isOnList = () => (index >= 0)

  return (
    <article className='modalBook'>
      <CloseButton
        click={handleClose}
      />
      <img src={bookToOpen.cover} alt={bookToOpen.title} />
      <div className='modalBookInfo'>
        <h1>{bookToOpen.title}</h1>
        <h2>{bookToOpen.year} - {bookToOpen.author}</h2>
        <p>{bookToOpen.synopsis}</p>
        <ul>
          <li>{bookToOpen.pages} Paginas</li>
          <li>{bookToOpen.genre}</li>
          <li>ISBN: {bookToOpen.ISBN}</li>
        </ul>
        <button onClick={handleAddToList}>{isOnList() ? 'Quitar' : 'Añadir'}</button>
      </div>

    </article>
  )
}
