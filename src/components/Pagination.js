import React from "react";

export default function Pagination({ pageCount, currentPage, setCurrentPage }) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    if (currentPage !== pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation text-secondary">
      <ul className="pagination justify-content-center">
        <li className={"page-item " + (currentPage === 1 && "disabled")}>
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={handlePrevClick}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {currentPage < 4
          ? [...Array(pageCount).slice(0, 5)].map((pageNumber, i) => {
              const page = i + 1;
              return (
                <li
                  key={i}
                  className={"page-item " + (page === currentPage && "active")}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => currentPage !== page && setCurrentPage(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })
          : [...Array(pageCount).slice(currentPage - 3, currentPage + 2)].map(
              (pageNumber, i) => {
                const page = currentPage + 3 - (6 - i) + 1;
                return (
                  <li
                    key={i}
                    className={
                      "page-item " + (page === currentPage && "active")
                    }
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() =>
                        currentPage !== page && setCurrentPage(page)
                      }
                    >
                      {page}
                    </a>
                  </li>
                );
              }
            )}

        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={handleNextClick}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
