import styled from "styled-components";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct, updateExistingProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

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
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const cartProducts = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/${productId}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [productId]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            if (quantity <= 1) return
            setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        for (var i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i]._id === product._id) {
                dispatch(updateExistingProduct({ id: cartProducts[i]._id, quantity }));
                return
            }
        }
        dispatch(addProduct({ ...product, quantity }));
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.image} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.name}</Title>
                    <Desc>
                        {product.description}
                    </Desc>
                    <AddContainer>
                        <Price>Rs. {product.price}</Price>
                        <AmountContainer>
                            <RemoveCircleOutlineIcon onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <AddCircleOutlineIcon onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default Product;