import React, { useState } from 'react';

import './Pagination.css';

const Pagination = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize }) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rigthPortionPageNumber = portionNumber * portionSize

  return <div className="pagination">
    {
      portionNumber > 1 &&
      <button onClick={() => { setPortionNumber(1) }}>
        First
      </button>
    }

    {
      portionNumber > 1 &&
      <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
        Prev
      </button>
    }

    {
      pages
        .filter(p => p >= leftPortionPageNumber && rigthPortionPageNumber >= p)
        .map(p => (
          <span
            onClick={() => { onPageChanged(p) }}
            className={p === currentPage ? "selected-Page" : ''}
            key={p}>
            {p}
          </span>
        ))
    }

    {
      portionCount > portionNumber &&
      <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
        Next
      </button>
    }

    {
      portionCount > portionNumber &&
      <button onClick={() => { setPortionNumber(portionCount) }}>
        Last
      </button>
    }
  </div>
}

export default Pagination;