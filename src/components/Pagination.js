export const Pagination = (props) => {
  // страница, которая отображается в данный момент, активная, по умолчанию указываем в props, что равна 1
  const currentPage = props.currentPage;
  // кол-во номеров страниц, которые отображаются
  const pages = props.pages;
  // обработчик события клик на номере страницы
  const clickHandler = props.clickHandler;
  // массив номеров страниц с персонажами
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

  // переключение на Previous и Next не срабатывает :(
  const goToNextPage = () => currentPage + 1;

  const goToPreviousPage = () => currentPage - 1;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-sm  m-4">
        <li className="page-item">
          <a
            // класс "disabled" не применяется хотя у нас даже по умолчанию currentPage = 1.
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
