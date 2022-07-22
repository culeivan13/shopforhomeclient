import styled from "styled-components";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex:2;
    padding: 0 15px;
`
const Title = styled.h1`
    font-weight: 400;
`
const Desc = styled.p`
    margin: 15px 0;
`
const Price = styled.div`
    font-weight: 400;
    font-size: 20px;
`

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 700;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Living Room Light</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Desc>
                    <AddContainer>
                        <Price>Rs. 11000</Price>
                        <AmountContainer>
                            <RemoveCircleOutlineIcon />
                            <Amount>1</Amount>
                            <AddCircleOutlineIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default Product;