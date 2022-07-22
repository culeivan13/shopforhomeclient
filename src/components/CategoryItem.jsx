import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    // border: 1px solid red;
    min-height: 60vh;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`;
const Image = styled.img`
    width: 25vw;
    height: 50vh;
    object-fit: cover;
`;
const Title = styled.h2`
    text-align: center;
    width: 50%;
    // border: 1px solid green;
    margin: 5px 0;
`;
const Button = styled.button`
    padding: 5px;
    background: none;
    font-weight: 600;
    cursor: pointer;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.category}`}>
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    );
}

export default CategoryItem;