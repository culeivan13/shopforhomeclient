import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/cartRedux";

const Container = styled.div`
    display: flex;
    min-height: 70vh;
    justify-content: center;
    align-items: center;
`
const Message = styled.p`
    font-weight: 500;
    font-size: 20px;
`

const Success = () => {
    const dispatch = useDispatch();
    dispatch(resetCart());
    return (
        <>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Container>
                <Message>Purchase Successful</Message>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Success;