import React from "react"
import styles from '../../styles/Home.module.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={styles.pageLink} onClick={() => paginate(number)}>

              {number}

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
