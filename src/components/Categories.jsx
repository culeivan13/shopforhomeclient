import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    // justify-content: space-between;
`
const Title = styled.h2`
    margin-top: 5px;
    font-size: 30px;
    text-align: center;
`

const Categories = () => {
    return (
        <>
            <Title>Shop by Category</Title>
            <Container>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Container>
        </>
    );
}

export default Categories;