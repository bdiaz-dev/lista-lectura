import { Filters } from './components/Filters'
import { Library } from './components/Library'
import { UserReadingList } from './components/UserReadingList'
// import { useFetch } from './services/useFetch'
export function App () {
  // useFetch()
  return (
    <>
      <h1>Editorial Dinav</h1>
      <Filters />
      <Library />
      <UserReadingList />
    </>
  )
}
