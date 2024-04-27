import ProductHeader from "../components/product_header";
import { StyledProductPage } from "../styles/productpage.style";
import Products from "./products";

const ProductPage = () => {
  return (
    <StyledProductPage>
      <ProductHeader />
      <Products />
    </StyledProductPage>
  );
};

export default ProductPage;
