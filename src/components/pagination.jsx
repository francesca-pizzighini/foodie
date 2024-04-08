import { Link } from "react-router-dom";

function Pagination({ recipesPerPage, totalRecipes, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="number">
            <Link
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="!#"
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
