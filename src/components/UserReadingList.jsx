import { useEffect, useState } from 'react'
import '../styles/userList.css'
import { useReadingList } from '../stores/useReadingList'
import { Book } from './Book'
import { useModalStore } from '../stores/useModalStore'
export function UserReadingList () {
  const { readingList } = useReadingList()
  const [opened, setOpened] = useState(false)
  const { setIsModal } = useModalStore()
  const handleOpenList = () => {
    setIsModal(false)
    document.getElementById('userList').style.bottom = opened ? '-410px' : '0'
    setOpened(!opened)
  }
  useEffect(() => {
    const notify = document.getElementById('addedNotify')
    console.log('opened: ' + opened)
    opened
      ? notify.style.top = '-290px'
      : notify.style.top = '0'
  }, [opened])

  // const flecha = 'V'
  return (
    <aside className='userListPositioner'>
      <section id='userList'>
        <h2
          className='userList--title'
          onClick={handleOpenList}
        >
          Lista de Lectura <span className='userList--length'> {readingList.length} </span>
        </h2>
        <h3 id='addedNotify'>libro añadido</h3>
        <article className='userBooksContainer'>
          {readingList && readingList.map(item => (
            <div key={item.ISBN + 'user'}>
              <Book book={item} onListMenu setOpened={setOpened} />
            </div>
          ))}

        </article>
      </section>
    </aside>
  )
}
