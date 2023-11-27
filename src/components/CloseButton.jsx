export function CloseButton ({ click }) {
  const handleOver = (e) => {
    e.target.classList.replace('fa-regular', 'fa-solid')
  }
  const handleExit = (e) => {
    e.target.classList.replace('fa-solid', 'fa-regular')
  }
  return (
    <i
      onMouseOver={handleOver}
      onMouseLeave={handleExit}
      className='fa-regular fa-rectangle-xmark fa-3x'
      onClick={click}
    />
  )
}
