import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/cartRedux";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  display: flex;
  min-height: 40vh;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    text-align: center;
  } ;
`;
const Message = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const Success = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState(`Dear, ${
    user.currentUser.name
  }. Please confirm a purchase of Rs.${cart.total - cart.discount}. You
    are getting a discount of Rs.
    ${cart.discount}. Please click on confirm to pay.`);

  const handleSales = () => {
    const generateSale = async () => {
      const userId = user.currentUser.id;
      const totalPrice = cart.total;
      const discountPrice = cart.discount;
      const products = [];

      cart.products.forEach((product) => {
        products.push({
          productId: product._id,
          quantity: product.quantity,
        });
      });

      const data = {
        userId,
        products,
        total: totalPrice,
        discount: discountPrice,
        net: totalPrice - discountPrice,
      };
      console.log(data);
      try {
        const res = await publicRequest.post("/sales/add", data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    // generateSale();
    setMessage("Purchase successful. Thank you for shopping with us.");
    dispatch(resetCart());
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Message>{message}</Message>
      </Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={handleSales}
          style={{
            background: "none",
            padding: "10px",
            border: "2px solid black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Confirm
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Success;
