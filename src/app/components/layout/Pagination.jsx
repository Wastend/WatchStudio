import React from 'react'

const Pagination = ({ articlesPerPage, totalArticles, paginate, currentPage }) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number}>
          <button onClick={() => paginate(number)} className={`pagination__button${currentPage === number ? ' active' : ''}`}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination