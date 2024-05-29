type PageProps = {
  pagesCount: number[];
  activePage: number;
  onClick?: (page: number) => void;
};
export function Pagination(props: PageProps) {
  const { pagesCount, activePage, onClick } = props;
  return (
    <ul className="pagination">
      {pagesCount &&
        pagesCount.map((page: number) => (
          <li
            className={`page-item ${activePage === page ? 'active' : ''}`}
            key={page}
            onClick={() => onClick && onClick(page)}
          >
            <span
              className="page-link"
              style={{ cursor: 'pointer' }}
            >
              {page}
            </span>
          </li>
        ))}
    </ul>
  );
}
