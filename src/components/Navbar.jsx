import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { resetCart } from "../redux/cartRedux";

const Container = styled.div`
    height: 30px;
    padding: 10px 20px;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    // background-color: #B2A4FF;
`
const Left = styled.div`
    // border: 1px solid red;
    display: flex;
    justify-content: left;
    align-items: center;
    flex:1;
`
const Right = styled.div`
    // border: 1px solid red;
    display: flex;
    justify-content: right;
    align-items: center;
    flex: 1;
`
const LeftItems = styled.div`
    cursor: pointer;
    font-size: 20px;
    margin: 0 8px;
`
const Logo = styled.div`
    font-weight: bold;
    font-size: 26px;
    letter-spacing: 3px;
`
const RightItems = styled.div`
    // border: 1px solid green;
    font-size: 20px;
    cursor: pointer;
    margin: 0 8px;
`

const Button = styled.button`
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
`

const Navbar = () => {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(resetCart());
        dispatch(logout());
    }

    return (
        <Container>
            <Left>
                <LeftItems>
                    <Logo>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            SFH.
                        </Link>
                    </Logo>
                </LeftItems>
                <LeftItems>
                    <Link to="/products" style={{ textDecoration: "none" }}>Products</Link>
                </LeftItems>
                <LeftItems>About Us</LeftItems>
            </Left>
            <Right>
                {user
                    ? <>
                        <RightItems><Button onClick={handleLogout}>Logout</Button></RightItems>
                        <Link to="/cart">
                            <RightItems>
                                <Badge badgeContent={cart.quantity} color="primary">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </RightItems>
                        </Link>
                    </>
                    : <>
                        <RightItems><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></RightItems>
                        <RightItems><Link to="/register" style={{ textDecoration: "none" }}>Register</Link></RightItems>
                    </>}
            </Right>
        </Container>
    );
}

export default Navbar;