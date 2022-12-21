import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ totalPage, setActivePage, activePage }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-5 gap-3 text-bg-light py-3 rounded-pill"
      forcePage={activePage === 1 ? 0 : activePage -1}
      pageCount={totalPage}
      previousLabel="Prev"
      nextLabel="Next"
      previousLinkClassName='btn btn-secondary'
      nextLinkClassName='btn btn-secondary'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      onPageChange={(data) => setActivePage(data.selected + 1)}
      activeClassName="active"
    />
  )
}

export default Pagination
