import styles from "./pagination.module.css";

export default function Pagination2({
  totalPosts2,
  postsPerPage2,
  setCurrentPage2,
  currentPage2,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts2 / postsPerPage2); i++) {
    pages.push(i);
  }
  return (
    <div className={styles.pagination}>
      <div>
        {pages.map((page, index) => (
          <button
            id="button"
            key={index}
            onClick={() => setCurrentPage2(page)}
            className={
              page === currentPage2 ? styles.active : styles.paginationBtn
            }
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
