import styles from "./pagination.module.css";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={styles.pagination}>
      <div>
        {pages.map((page, index) => (
          <button
            id="button"
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage ? styles.active : styles.paginationBtn
            }
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
