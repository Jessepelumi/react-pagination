import { StyledProductHeader } from "../styles/productheader.style";
import Socials from "./socials";

const ProductHeader = () => {
  return (
    <StyledProductHeader>
      <section>
        <h1>Say hello to your favourite gatgets plug</h1>
        <p>Your satisfaction is our prinary purpose</p>
      </section>
      <Socials />
    </StyledProductHeader>
  );
};

export default ProductHeader;
