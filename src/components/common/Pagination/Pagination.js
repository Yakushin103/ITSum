import React from 'react';

import './Pagination.css';

const Pagination = ({
  totalCount,
  pageSize,
  onPageChanged,
  currentPage }) => {

  let pagesCount = Math.ceil(totalCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {
      pages.map(p => (
        <span
          onClick={() => { onPageChanged(p) }}
          className={p === currentPage ? "selected-Page" : ''}
          key={p}>
          {p}
        </span>
      ))
    }
  </div>
}

export default Pagination;