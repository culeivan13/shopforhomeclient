import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { updateExistingProduct, applyDiscount } from "../redux/cartRedux";

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
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
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

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 2px;
  } ;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  } ;
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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductWrapper = styled.div``;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDiscount = () => {
    dispatch(applyDiscount({ discount: user.discount }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopTexts>
            <TopText>Shopping Cart ({cart.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <ProductWrapper key={product._id}>
                <Product>
                  <ProductDetail>
                    <Image src={product.image} />
                    <Details>
                      <ProductName>{product.title}</ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <RemoveCircleOutlineIcon
                        onClick={() =>
                          dispatch(
                            updateExistingProduct({
                              id: product._id,
                              quantity: -1,
                            })
                          )
                        }
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <AddCircleOutlineIcon
                        onClick={() =>
                          dispatch(
                            updateExistingProduct({
                              id: product._id,
                              quantity: 1,
                            })
                          )
                        }
                      />
                    </ProductAmountContainer>
                    <ProductPrice>
                      Rs {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </ProductWrapper>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 2000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -2000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                Rs {cart.total - cart.discount}
              </SummaryItemPrice>
            </SummaryItem>
            <Buttons>
              <Button onClick={handleDiscount}>APPLY DISCOUNT</Button>
              <Button onClick={() => history.push("/success")}>
                CHECKOUT NOW
              </Button>
            </Buttons>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
