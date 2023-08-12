import React from 'react'

const Pagination = ({ articlesPerPage, totalArticles, paginate, currentPage }) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  const setPage = (number) => {
    paginate(number)
    window.scrollTo(0, 0)
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number}>
          <button onClick={() => setPage(number)} className={`pagination__button${currentPage === number ? ' active' : ''}`}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination