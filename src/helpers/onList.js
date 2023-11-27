import { useReadingList } from '../stores/useReadingList'

export function onList (book) {
  const { readingList } = useReadingList()
  const index = readingList.findIndex(item => item.ISBN === book.ISBN)
  const onList = (index >= 0)
  console.log(onList)
  return onList
}
