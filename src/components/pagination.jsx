import { HashLink } from "react-router-hash-link";

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
            <HashLink
              onClick={(e) => {
                // e.preventDefault();
                paginate(number);
              }}
              to={"/recipes#form"}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
