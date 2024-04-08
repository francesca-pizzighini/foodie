import { NavLink } from "react-router-dom";

function Pagination({ recipesPerPage, totalRecipes, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="number">
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="!#"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
