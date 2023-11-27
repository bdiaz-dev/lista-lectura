import { useState } from 'react'
import '../styles/userList.css'
import { useReadingList } from '../stores/useReadingList'
import { Book } from './Book'
export function UserReadingList () {
  const { readingList } = useReadingList()
  const [opened, setOpened] = useState(false)
  const handleOpenList = () => {
    document.getElementById('userList').style.bottom = opened ? '-410px' : '0'
    setOpened(!opened)
  }

  // const flecha = 'V'
  return (
    <aside className='userListPositioner'>
      <section id='userList'>
        <h2 className='userList--title' onClick={handleOpenList}>Lista de Lectura</h2>
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
