import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/cartRedux";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const Success = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    setTotal(cart.total);
    setDiscount(cart.discount);
    setName(user.currentUser.name);
    dispatch(resetCart());
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Container>
        <Message>
          Dear, {name}. Purchase of Rs.{total - discount} was successful. You
          got a discount of Rs.
          {discount}. Your order will be delivered shortly.
        </Message>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Success;
