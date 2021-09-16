export const Pagination = (props) => {
  const currentPage = props.currentPage;
  const pages = props.pages;
  const clickHandler = props.clickHandler;
  let pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(
      <li className="page-item">
        <a
          className="page-link"
          key={i.toString()}
          onClick={() => {
            clickHandler(i);
          }}
        >
          {i}
        </a>
      </li>
    );
  }

  const goToNextPage = () => currentPage + 1;

  const goToPreviousPage = () => currentPage - 1;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-sm  m-4">
        <li className="page-item">
          <a
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
            aria-label="Previous"
            onClick={goToPreviousPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers}
        <li className="page-item">
          <a
            className={`page-link ${
              currentPage === props.pages ? "disabled" : ""
            }`}
            aria-label="Next"
            onClick={goToNextPage}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
