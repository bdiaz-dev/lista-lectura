import { useFiltersStore } from '../stores/useFiltersStore'
import '../styles/filters.css'

export function Filters () {
  const { categoryFilter, setCategoryFilter, showAdded, setShowAdded } = useFiltersStore()
  return (
    <div className='filtersContainer'>
      <div>
        <label htmlFor='categorySelector'>Categorias: </label>
        <select name='categorySelector' id='categorySelector' value={categoryFilter} onChange={setCategoryFilter}>
          <option value='all'>Todas</option>
          <option value='Ciencia ficción'>Ciencia ficción</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Terror'>Terror</option>
        </select>
      </div>
      <div>
        <label htmlFor='onListCheck'>Mostrar agregados: </label>
        <input type='checkbox' name='onListCheck' id='onListCheck' checked={showAdded} onChange={setShowAdded} />
      </div>
    </div>
  )
}
