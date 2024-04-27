import { useState } from "react";
import ProductCard from "../components/product_card";
import { product_list } from "../static/product_list";
import { StyledProducts } from "../styles/product.style";
import Pagination from "../components/pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product_list.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <StyledProducts>
      {currentPosts.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
      <Pagination postsPerPage={postsPerPage} totalPosts={product_list.length} paginate={paginate} />
    </StyledProducts>
  );
};

export default Products;
