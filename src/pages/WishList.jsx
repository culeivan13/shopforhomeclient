import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { removeWish } from "../redux/wishlistRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 10px;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const Image = styled.img`
  width: 200px;
  height: 20vh;
  object-fit: cover;
  @media only screen and (max-width: 480px) {
    width: 100%;
    min-height: 40vh;
  } ;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 480px) {
    align-items: center;
    padding: 5px;
  } ;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    font-weight: 400;
  } ;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 40%;
  @media only screen and (max-width: 480px) {
    margin: 8px 0px;
  } ;
`;

const ProductWrapper = styled.div``;

const Wishlist = () => {
  const wish = useSelector((state) => state.wish);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeWish({ id }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Top>
          <TopTexts>
            <TopText>Shopping Cart ({cart.quantity})</TopText>
            <TopText>Your Wishlist ({wish.quantity})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {wish.products.map((product) => (
              <ProductWrapper key={product._id}>
                <Product>
                  <ProductDetail>
                    <Image src={product.image} />
                    <Details>
                      <ProductName>{product.title}</ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <Button onClick={() => handleRemove(product._id)}>
                        Remove
                      </Button>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductPrice>Rs {product.price}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </ProductWrapper>
            ))}
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
