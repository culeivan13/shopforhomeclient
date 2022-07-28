import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-height: 60vh;
  //   border: 1px solid red;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //   border: 1px solid green;
`;
const ProductInfo = styled.div`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductName = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  margin-top: 5px;
  margin-bottom: 3px;
`;
const ProductPrice = styled.div`
  font-weight: 600;
  margin: 5px 0;
`;
const Image = styled.img`
  width: 25vw;
  height: 50vh;
  object-fit: cover;
  @media only screen and (max-width: 480px) {
    width: 100%;
    min-height: 50vh;
  } ;
`;
const Button = styled.button`
  padding: 5px;
  background: none;
  font-weight: bold;
  cursor: pointer;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.image} />
      </ImageContainer>
      <ProductInfo>
        <ProductName>{item.title}</ProductName>
        <ProductPrice>Rs: {item.price}</ProductPrice>
        <Link to={`/product/${item._id}`}>
          <Button>Buy Now</Button>
        </Link>
      </ProductInfo>
    </Container>
  );
};

export default Product;
