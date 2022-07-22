import styled from "styled-components";

const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #FFF9CA;
    // justify-content: space-between;
    align-items: center;
`

const ImageContainer = styled.div`
    flex: 1;
    // border: 1px solid black;
    height: 100%
`
const Image = styled.img`
    height: 100%;
    // width: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    // border: 1px solid black;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Info = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Welcome = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            </ImageContainer>
            <InfoContainer>
                <Title>SUMMER SALE</Title>
                <Info>SHOP NOW AND GET 30% OFF!</Info>
                <Button>Shop Now</Button>
            </InfoContainer>
        </Container>
    );
}

export default Welcome;