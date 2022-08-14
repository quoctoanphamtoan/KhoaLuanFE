import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination(props) {
    const {data} =props
    return (
        <div className="pagination-foot">
            <ReactPaginate 
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={data.totalPage}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              onPageChange={data.handelPageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              activeLinkClassName={"active"}
            />
        </div>
    )
}
