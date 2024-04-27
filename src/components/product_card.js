import { StyledProductCard } from "../styles/productcard.style";

const ProductCard = ({
  item: { image, product_name, description, product_price },
}) => {
  return (
    <StyledProductCard>
      <img src={image} alt={product_name} />
      <section>
        <h2>{product_name}</h2>
        <p>{description}</p>
        <aside>
          <span>&#8358;{product_price}</span>
          <button>PURCHASE</button>
        </aside>
      </section>
    </StyledProductCard>
  );
};

export default ProductCard;
