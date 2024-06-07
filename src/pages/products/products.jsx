import styles from "./products.module.css";
import ProductItem from "../../components/productItem/productItem";
import ProductItem2 from "../../components/productItem2/productItem2";
import Pagination from "../../components/pagination/pagination.jsx";
import Pagination2 from "../../components/pagination/pagination2.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useProducts2 } from "../../context/apiContext2";

import { useProducts } from "../../context/apiContext.js";

function Products() {

  const [visibility, setVisibility] = useState(false);

  const products = useProducts();
  const products2 = useProducts2();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);

  const postsPerPage = 6;
  const postsPerPage2 = 6;

  const lastPostIndex = currentPage + postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  const lastPostIndex2 = currentPage2 + postsPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postsPerPage2;
  const currentPosts2 = products2.slice(firstPostIndex2, lastPostIndex2);

  return (
    <div className={styles.productPartContent}>
      <div className={styles.categoryList}>
        <ul>
          <li onClick={() => setVisibility(true)}>
            <p>1دسته بندی</p>
            <IoIosArrowBack />
          </li>
          <li onClick={() => setVisibility(false)}>
            <p>2دسته بندی</p>
            <IoIosArrowBack />
          </li>
          <li>
            <p>3دسته بندی</p>
            <IoIosArrowBack />
          </li>
          <li>
            <p>4دسته بندی</p>
            <IoIosArrowBack />
          </li>
          <li>
            <p>5دسته بندی</p>
            <IoIosArrowBack />
          </li>
          <li>
            <p>6دسته بندی</p>
            <IoIosArrowBack />
          </li>
        </ul>
      </div>
      <div className={styles.itemsPart}>
        <div className={styles.topCategory}>
          <span className={styles.topViews}>پربازدیدترین</span>
          <span>جدید ترین</span>
          <span>پرفروش ترین</span>
          <span>ارزان ترین</span>
        </div>
        {!visibility && (
          <ProductItem2 className={styles.products} products2={currentPosts2} />
        )}
        {visibility && (
          <ProductItem className={styles.products} products={currentPosts} />
        )}
        {visibility ? (
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ) : (
          <Pagination2
            totalPosts2={products2.length}
            postsPerPage2={postsPerPage2}
            setCurrentPage2={setCurrentPage2}
            currentPage2={currentPage2}
          />
        )}
      </div>
    </div>
  );
}
export default Products;
